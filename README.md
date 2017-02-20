# dev-runtime-nodejs
### 1. Motivation
<p align="justify">This repository  aims to deploy and execute reTHINK Runtime in Node.js. The execution of reTHINK different components takes place in Node.js sandboxes.</p>

### 2. Architecture Overview
<p align= "justify">The design and implementation of this Runtime Node was mostly influenced by <a href="https://github.com/reTHINK-project/dev-runtime-browser" rel="nofollow">runtime-browser</a>. This Runtime was designed with compliance with reTHINK Runtime Node requirements reported in D3.1. Essentially, it follows by design security approach, where different types of components are executed in isolated SandBoxes.
</p>
<p align= "justify"> Sandboxing technology was realised thanks to multi-processor environment in Node.js. Particularly, the native  <a href = "https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options" rel="nofollow"> child_process.fork() </a> method was used for this purpose. Spawned (forked) Node.js child processes are independent of the parent. Each process has its own memory, with its own V8 instance engine. However, an IPC (Inter-Process Communication) channel is established between the parent and child that allows messages to be passed back and forth between them.
</p>
![runtime-nodejs](Runtime-NodeJS.png)
<p align="center">
  Figure : Runtime Node Architecture
</p>


###2.1 Architecture Description
<p align="justify">As illustrated in the diagram above, Runtime Node design has a flexible approach. Since it supports  deploying hyperty application in an isolated sandbox,or in the same context sandbox as Runtime Node process (main node process where the javascript code is being executed first, labeled as Runtime-NodeJS).
In the following upcoming sections a descritpion of main architecture components is given. Afterwards, an emphasis on architecture possible slight variations depending on possible use cases and/or business models.</p>

At bootstrap the `HelloWorldObservers.js` demo is launched. In the following the functionalities of each components :

#####``RuntimeNode`` :
- Main RuntimeNode.js process
- Deploys `core runtime` in an isolated sandbox( ```child_process```)
- Routes messages back and forth between the Context Application and the core runtime
- Exposes loadHyperty and loadProtoStub to Context Application

#####``Core Sandbox``:

 - Node.js child process (simultaneously is a parent process of ``ContextServiceProvider sandbox``) used as an isolated sandbox to load  the Hyperty runtime
 - Instantiates ``SandboxApp``, a proxy in order to communicate with Context Application Sandbox
 - Instantiates ``SandboxWorker``, a proxy to load Context Service Provider CSP ProtoStub for external communications 
 - Handles communication between internal/external components of the runtime
 - All Communications from/to the ``core`` are routed through The Message Bus after policy engine autorisation

#####``Context Service Provider CSP(SandboxWorker) `` :
- Node.js child process having ``core Sandbox`` as parent process.
- Loads and activates Protostub to the CSP messaging node services

####``Context Application Sandbox:``
- Deployed directly in Runtime Node or in an isolated sandbox( labeled in the above diagram as``Service Application``)
- Used to load and activate Hyperties and server edge application.
 
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
First, before running this demo, the CSP domain needs to be set. As a result, it uses all other components (catalogue, domain registry, msg-node) of reTHINK associated with the given domain.

### 4. Understanding this demo

First you need to include the runtime loader:
`let rethink = require('./RuntimeNode');`

**Then load the runtime :**

```
let runtime = rethink.default.install({
  domain: domain,
  development: true
}).then((runtime) => {
  console.log('\n loading hyperty :'.green, hypertyURI(domain, 'NodeHyperty'));
	// Now we load the hyperty, given its name i.e NodeHyperty, HelloWorldObserver, HelloWorldReporter etc :	
	runtime.requireHyperty(hypertyURI(domain, 'NodeHyperty'))
    .then((NodeHyperty) => {
      console.log('Hyperty loaded :\n'.green);
      console.log('NodeHyperty -->\n'.blue, NodeHyperty);
 			// ..... here we can manipulate hyperty instance
			// before trying this make sure that the reTHINK toolkit(in dev-hyperty-toolkit) is up running for node with the command:npm run start:node
    }).catch((reason) => {
      console.log('Error:', reason);
    });
}).catch((e) => {
  console.error('Error while loading the Runtime, reason !', e);
});
```


### 5. How to use this Runtime Node :

In case a hyperty developer wants to deploy his/her Hyperty on this Runtime Node. A small modification is needed on `demo.js` in `demo/ folder`. Essentially, using the method `runtime.requireHyperty(hypertyURI(domain,'name Of  Hyperty'))` in line [demo.js#L40](https://github.com/reTHINK-project/dev-runtime-nodejs/blob/develop-improves/Demo/HelloWorldObserver.js#L32)
 
 where :
 
`domain` : context service provider's domain.

`name of Hyperty` : simply an identifier of the Hyperty to be loaded and executed.
