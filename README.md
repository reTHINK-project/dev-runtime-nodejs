# dev-runtime-nodejs
### 1. Motivation
<p align="justify">This repository  aims to deploy and execute the reTHINK runtime in Node.js. The execution of reTHINK different components takes place in Nodejs sandboxes.</p>

### 2. Architecture Overview
<p align= "justify">The design and implementation of this runtime was mostly influenced by <a href="https://github.com/reTHINK-project/dev-runtime-browser" rel="nofollow">runtime-browser</a>. This Runtime was designed with compliance with Runtime Node requirements reported in D3.1. Essentially, it follows by design security approach, where different types of components are executed in isolated SandBoxes.
</p>
<p align= "justify"> Sandboxing technology was realised thanks to multi-processor environment in NodeJS. Particularly, the native  <a href = "https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options" rel="nofollow"> child_process.fork() </a> method was used for this purpose. Spawned (forked) NodeJS child processes are independent of the parent. Each process has its own memory, with its own V8 instance engine. However, an IPC (Inter-Process Communication) channel is established between the parent and child that allows messages to be passed back and forth between them.
</p>
![runtime-nodejs](Runtime-NodeJS.png)
<p align="center">
  Figure : Runtime Node Architecture
</p>


###2.1 Architecture Description
<p align="justify">As illustrated in the diagram above, Runtime Node design has a flexible approach. Since it supports  deploying hyperty application in an isolated sandbox and in the same context as Runtime Node process as well (main node process where the javascript code is being executed first, labeled as Runtime-NodeJS).
In the following upcoming sections a descritpion of main architecture components is given. Afterwards, an emphasis on architecture possible slight variations depending on possible use cases and/or business models.</p>

At bootstrap the `HelloWorldObservers.js` demo is launched. In the following the functionalities of each components :

#####``RuntimeNode`` :
- Main Runtime-Node.js process
- Deploys `core` in an isolated sandbox( ```child_process```)
- Routes messages back and forth between the Context App and the core
- Exposes loadHyperty and loadProtoStub to Context Application

#####``Core Sandbox``:

 - Node.js child process (simultaneously is a parent process of ``ContextServiceProvider sandbox``) used as an isolated sandbox to load  the Hyperty runtime
 - Instantites ``SandboxApp`` proxy to Context App Sandbox in main app
 - Instantiates ``SandboxWorker`` to load  Context Service Provider as sandbox for ProtoStub.
 - Handles communication between internal/external components
 - All Communications from/to the ``core`` is routed through The Message Bus

#####``Context Service Provider (SandboxWorker) `` :
- Nodejs child process having ``core Sandbox`` as parent process.
- Loads and activates Protostub to the messaging node

####``Context App Sandbox:``
- Deployed directly in Runtime Node or in an isolated sandbox( labeled ``Service Application``)
- Used to load and activate Hyperties
 
####``HelloWorldObserver.js`` :(in folder Demo/)
- Serves  ``/resources/descriptors`` folder that acts as temporarily local catalogue (Hyperties.json, Runtimes.json, ProtoStubs.json) using express framework in nodejs.
- Loads RuntimeNode
- Starts demo `HelloWorldObserver` like in [#Dev-toolkit](https://github.com/reTHINK-project/dev-hyperty-toolkit) demo.

###2.2  Hyperty running in same context as the Runtime Node:
<p align="justify">In order to be able to develop and manipulate hyperty instance. The Runtime Node allows implementing hyperty Context Sandbox (is faux sandbox, just JavaScript module) in the same context as the Runtime.Likewise,the runtime browser, where hyperties app are loaded and then executed in the same context as the Runtime. Accordingly, the developers/users can interact directly from the Runtime with hyperties' instances.</p>

<p align="justify">Despite the functionality aspect of this approach. This implementation represents considerable threat to the Runtime. In fact, an hyperty running in the context app has same hardware resources as the runtime. Therefore, executing a malicious code on this Context app, or if the code threw an error at some point of its execution, the whole runtime is compromised.</p>
In brief this implemenation provides functional Runtime without worrying about the security aspect.
### 2.3  Hyperty running in an isolated Sandbox:
<p align="justify">On the contrary of what was said before. In this implementation, the hyperty is totally isolated in Nodejs child process, as sub process, it has its own V8 NodeJs engine. As a result, it runs on its own isolated context.</p>
Labeled as  ``Service Application``  in above architecture. A use case we could thing of, consists of having a server hyperty that regularly monitors other servers, and sends back collected data (statistics) to the Runtime Node.


### 3. Quick Start
First you need to clone this repository:
```
git clone https://github.com/reTHINK-project/dev-runtime-nodejs.git
cd dev-runtime-nodejs
```

Afterwards, run the following (as root) :

```
# npm run setup 
```

**Running hello world demo on Runtime Node**
```
# npm run demo
```
This demo is set for `hybroker.rethink.ptinovacao.pt` domain. As a result, it uses all other components (catalogue, domain registry, msg-node) of reTHINK associated with this domain.

This will start hello world observer from local catalogue in `static/resources/descriptors`. Moreover, this demo connects  to the remote msg-node-vertx of `hybroker.rethink.ptinovacao.pt`.


### 4. Understanding this demo

First you need to include the runtime loader:
```
let rethink = require('./RuntimeUAStub');
```

Then load the runtime :
```
let runtime = rethink.default.install({
  domain: domain,
  development: true
}).then((runtime) => {
  console.log('runtime loaded !');
  // ... now you can load hyperty
}).catch((e) => {
  console.error('aie !', e);
});
```
Now you load the hyperty :

```
console.log('loading hyperty :', hypertyURI(domain, 'HelloWorldObserver'));
runtime.requireHyperty(hypertyURI(domain, 'HelloWorldObserver'))
    .then((HelloWorldObserver) => {
      console.log('HelloWorldObserver ->'.red, HelloWorldObserver);
        let helloObserver = HelloWorldObserver;
        // ..... here we can manipulate hyperty instance
        console.log('helloObserver'.green, helloObserver);
    }).catch((reason) => {
      console.log('Error:', reason);
    });
```

### 5. How to use this Runtime Node :

 In case a hyperty developer(how to develop Hyperty) wants to deploy it on this Runtime Node. A small modification is needed on `HelloWorldObserver.js` in `Demo/ folder`. Essentially, using the method `runtime.requireHyperty(hypertyURI(domain,'name Of  Hyperty'))` in line [HelloWorldObserver.js#L40](https://github.com/reTHINK-project/dev-runtime-nodejs/blob/develop-improves/Demo/HelloWorldObserver.js#L32)
 
 where :
 
`domain` : context service provider's domain.

`name of Hyperty` : simply an identifier of the Hyperty to be loaded and executed.
