function RuntimeUA(runtimeFactory, domain) {
    _classCallCheck(this, RuntimeUA);

    if (!runtimeFactory) throw new Error('The sandbox factory is a needed parameter');
    if (!domain) throw new Error('You need the domain of runtime');

    var _this = this;

    _this.runtimeFactory = runtimeFactory;
    _this.runtimeCatalogue = runtimeFactory.createRuntimeCatalogue();

    // TODO: post and return registry/hypertyRuntimeInstance to and from Back-end Service
    // the response is like: runtime://sp1/123

    var runtimeURL = 'runtime://' + domain + '/' + Math.floor(Math.random() * 10000 + 1);
    _this.runtimeURL = runtimeURL;
    _this.domain = domain;

    // TODO: check if runtime catalogue need the runtimeURL;
    _this.runtimeCatalogue.runtimeURL = runtimeURL;

    // Instantiate the identity Module
    _this.identityModule = new _IdentityModule2.default(runtimeURL);

    // Use the sandbox factory to create an AppSandbox;
    // In the future can be decided by policyEngine if we need
    // create a AppSandbox or not;
    var appSandbox = runtimeFactory.createAppSandbox();

    // Instantiate the Registry Module
    _this.registry = new _Registry2.default(runtimeURL, appSandbox, _this.identityModule, _this.runtimeCatalogue);

    // Instantiate the Message Bus
    _this.messageBus = new _MessageBus2.default(_this.registry);

    // Instantiate the Policy Engine
    _this.policyEngine = new _PolicyEngine2.default(new _RuntimeCoreCtx2.default(_this.identityModule, _this.registry));

    _this.messageBus.pipeline.handlers = [

    // Policy message authorise
    function (ctx) {
      _this.policyEngine.authorise(ctx.msg).then(function (changedMgs) {
        ctx.msg = changedMgs;
        ctx.next();
      }).catch(function (reason) {
        console.error(reason);
        ctx.fail(reason);
      });
    }];

    // Add to App Sandbox the listener;
    appSandbox.addListener('*', function (msg) {
      _this.messageBus.postMessage(msg);
    });

    // Register messageBus on Registry
    _this.registry.messageBus = _this.messageBus;

    // Register registry on IdentityModule
    _this.identityModule.registry = _this.registry;

    _this.registry.addEventListener('runtime:loadStub', function (domainURL) {
      _this.loadStub(domainURL).then(function () {
        _this.registry.trigger('runtime:stubLoaded', domainURL);
      }).catch(function (reason) {
        console.error('Failed to deploy the ProtocolStub component ', reason);
      });
    });

    _this.registry.addEventListener('runtime:loadIdpProxy', function (domainURL) {
      _this.loadIdpProxy(domainURL).then(function () {
        _this.registry.trigger('runtime:idpProxyLoaded', domainURL);
      }).catch(function (reason) {
        console.error('Failed to deploy the IDP Proxy component ', reason);
      });
    });

    // Use sandbox factory to use specific methods
    // and set the message bus to the factory
    runtimeFactory.messageBus = _this.messageBus;

    // Instanciate the SyncherManager;
    _this.syncherManager = new _SyncherManager2.default(_this.runtimeURL, _this.messageBus, _this.registry, _this.runtimeCatalogue);

    // Instantiate the Graph Connector
    _this.graphConnector = new _GraphConnector2.default(_this.runtimeURL, _this.messageBus);
  }