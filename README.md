# dev-runtime-nodejs

### 1. Motivation
This repository  aims to deploy and execute the reTHINK runtime in Node.js. The execution of reTHINK different components takes place in Nodejs sandboxes.

### 2. Architecture Overview
The design and implementation of this runtime was mostly influenced by [runtime-browser](https://github.com/reTHINK-project/dev-runtime-browser) . This Runtime was designed with compliance with Runtime Node requirements reported in D3.1. Essentially, it follows by design security approach, where different types of components are executed in isolated SandBoxes.

Sandboxing technology was realised thanks to multi-processor environment in NodeJS. Particularly, the native [child_process.fork()](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options) method was used for this purpose. Spawned (forked) NodeJS child processes are independent of the parent. Each process has its own memory, with its own V8 instance engine. However, an IPC (Inter-Process Communication) channel is established between the parent and child that allows messages to be passed back and forth between them.




#### 2.1 Architecture Description

![runtime-nodejs](Runtime-NodeJS.png)



As illustrated in the diagram above, Runtime Node design has a flexible approach. Since it supports  deploying hyperty application in an isolated sandbox and in the same context as Runtime Node process as well (main node process where the javascript code is being executed first, labeled as Runtime-NodeJS).
In the following upcoming sections a descritpion of main architecture components is given. Afterwards, an emphasis on architecture possible slight variations depending on possible use cases and/or business models.

At bootstrap the `demo.js` demo is launched. In the following the functionalities of each components :

##### RuntimeNode:
- Main RuntimeNode process
- Deploys `core` in an isolated sandbox( ```child_process```)
- Routes messages back and forth between the Context App and the core
- Exposes loadHyperty and loadProtoStub to Context Application

##### Core Sandbox:

 - Node.js child process (simultaneously is a parent process of ``ContextServiceProvider sandbox``) used as an isolated sandbox to load  the Hyperty runtime
 - Instantites ``SandboxApp`` proxy to Context App Sandbox in main app
 - Instantiates ``SandboxWorker`` to load  Context Service Provider as sandbox for ProtoStub.
 - Handles communication between internal/external components
 - All Communications from/to the ``core`` is routed through The Message Bus

##### Context Service Provider (SandboxWorker):
- Nodejs child process having ``core Sandbox`` as parent process.
- Loads and activates Protostub to the messaging node

##### Context App Sandbox:
- Deployed directly in Runtime Node or in an isolated sandbox( labeled ``Service Application``)
- Used to load and activate Hyperties
 
##### demo.js:
- Loads Runtime-Core, Hyeprty,and the ProtoStub from the toolkit
- Starts demo `NodeHyperty` like in [#Dev-toolkit](https://github.com/reTHINK-project/dev-hyperty-toolkit) demo.

### 2.2  Hyperty running in same context as the Runtime Node:
In order to be able to develop and manipulate hyperty instance. The Runtime Node allows implementing hyperty Context Sandbox (is faux sandbox, just JavaScript module) in the same context as the Runtime.Likewise,the runtime browser, where hyperties app are loaded and then executed in the same context as the Runtime. Accordingly, the developers/users can interact directly from the Runtime with hyperties' instances.

Despite the functionality aspect of this approach. This implementation represents considerable threat to the Runtime. In fact, an hyperty running in the context app has same hardware resources as the runtime. Therefore, executing a malicious code on this Context app, or if the code threw an error at some point of its execution, the whole runtime is compromised.
In brief this implemenation provides functional Runtime without worrying about the security aspect.
### 2.3  Hyperty running in an isolated Sandbox:
On the contrary of what was said before. In this implementation, the hyperty is totally isolated in Nodejs child process, as sub process, it has its own V8 NodeJs engine. As a result, it runs on its own isolated context.
Labeled as  ``Service Application``  in above architecture. A use case we could thing of, consists of having a server hyperty that regularly monitors other servers, and sends back collected data (statistics) to the Runtime Node.


### 3. Quick Start
First you need to clone this repository:
```
git clone https://github.com/reTHINK-project/dev-runtime-nodejs.git
cd dev-runtime-nodejs
cd demo
```

Afterwards, run the following (as root) :
(always in demo/ folder)

```
# npm install 
```

**Running NodeHyperty demo on Runtime Node**
```
# npm run demo
```
This demo is set for `hybroker.rethink.ptinovacao.pt` domain. As a result, it uses all other components (catalogue, domain registry, msg-node) of reTHINK associated with this domain.

This will start NodeHyperty from catalogue in `https://catalogue.domain/.well-known/hyperty/NodeHyperty`. Moreover, this demo connects  to the remote msg-node-vertx of `hybroker.rethink.ptinovacao.pt`.


### 4. Understanding this demo

The demo in this repository concerns ServerConference hyperty running on RuntimeNode. In order to allow WebRTC Group communication in reTHINK framework.

First you need to include the runtime loader:
```
import rethink from 'runtime-nodejs/dist/RuntimeNode.js';
```

**Initial configuration :**

```
let domain = 'localhost'; // configurable domain name of the runtime-nodejs
const hypertyURI = (domain, hyperty) => `https://catalogue.${domain}/.well-known/hyperty/${hyperty}`;
const runtimeURL = 'https://catalogue.' + domain + '/.well-known/runtime/Runtime';
```

**Then load the runtime :**
```
let runtime = rethink.install({
  domain: domain,
  runtimeURL,
  development: true
}).then((runtime) => {
  console.log('runtime loaded !');
  // ... now you can load hyperty
  console.log('\n loading hyperty :'.green, hypertyURI(domain, 'ServerConference'));
  runtime.requireHyperty(hypertyURI(domain, 'ServerConference'))
    .then((ServerConference) => {

      console.log('NodeHyperty -->\n'.blue, ServerConference);
      callHyperty = ServerConference;

      init();
    }).catch((reason) => {
      console.log('Error:', reason);
    });
}).catch((e) => {
  console.error('aie !', e);
});
```

### 5. How to use this Runtime Node :

 In case a hyperty developer(how to develop Hyperty) wants to deploy it on this Runtime Node. A small modification is needed on `demo.js` in `demo/ folder`. Essentially, using the method `runtime.requireHyperty(hypertyURI(domain,'name Of  Hyperty'))`.
 
 where :
 
`domain` : context service provider's domain.

`name of Hyperty` : simply an identifier of the Hyperty to be loaded and executed.
