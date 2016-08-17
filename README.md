# dev-runtime-nodejs
### 1. Motivation
This repository  aims to deploy and execute the reTHINK runtime in Node.js. The execution of reTHINK different components takes place in Nodejs sandboxes.

### 2. Architecture Overview
<p align= "justify">The design and implementation of this runtime was mostly influenced by <a href="https://github.com/reTHINK-project/dev-runtime-browser" rel="nofollow">runtime-browser</a>. This Runtime was designed with compliance with Runtime Node requirements reported in D3.1. Essentially, it follows by design security approach, where different types of componenets are executed in isolated SandBoxes.
</p>
<p align= "justify"> Sandboxing technology was realised thanks to multi-processor environment in NodeJS. Particularly, the native  <a href = "https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options" rel="nofollow"> child_process.fork() </a> method was used for this purpose. Spawned (forked) NodeJS child processes are independent of the parent. Each process has its own memory, with its own V8 instance engine. However, an IPC (Inter-Process Communication) channel is established between the parent and child that allows messages to be passed back and forth between them.
</p>
![runtime-nodejs](Runtime-NodeJS.png)
<p align="center">
  Figure : Runtime Node Architecture
</p> 


###2.1 Architecture Description 
<p align="justify">As illustrated in the diargam above, Runtime Node design has a flexible approach. Since it supports both deploying hyperty application in an isolated sandbox or in the same context as Runtime Node process (main node process where the javascript code is being executed first, labeled as Runtime-NodeJS). 
In the following upcoming sections a descritpion of main architecture components is given. Afterwards, an emphasis on architecture possible slight variations depending on possible use cases and/or businesss models.</p>

At bootstrap the `server.js` is launched. In the following the functionalities of each components :

####``server.js`` :
- Serves  ``/resources/descriptors`` folder that act as temporarily local catalogue (Hyperties.json, Runtimes.json, ProtoStubs.json)
- Loads RuntimeUAStub

#####``RuntimeUAStub`` :
- Main Runtime-Node.js process
- Deploys `core` in an isolated sandbox( ```child_process```)
- Routes messages back and forth between the Context App and the core
- Exposes loadHyperty and loadProtoStub to Context Application

#####``Core Sandbox``:

 - Node.js child process (simultaneously is a parent process of ``ContexServiceProvider sandbox``) used as an isolated sandbox to load  the Hyperty runtime
 - instantites ``SandboxApp`` proxy to Context App Sandbox in main app
 - Instantiates ``SandboxWorker`` to load  Context Service Provider as sandbox for ProtoStub.
 - Handels communication between internal/external components
 - All Communications from/to the ``core`` is routed through The Message Bus
 
#####``Context Service Provider (SandboxWorker) `` :
- Nodejs child process having ``core Sandbox`` as parent process.
- Loads and activates Protostub to the messaging node

####``Context App Sandbox:``
- Deployed directly in Runtime Node or in an isolated sandbox( labeled ``Service Application``)
- It's used to load and activate Hyperties

###2.2  Hyperty running in same context as the Runtime Node:
<p align="justify">In order to be able to develop and manipulate hyperty instace. The Runtime Node allows implementing hyperty Context Sandbox (is faux sandbox, just JavaScript module) in the same context as the Runtime.Likewise,the runtime browser, where hyperties app are loaded and then executed in the same context as the Runtime. Accordingly, the developers/users can interact directly from the Runtime with hyperties' instances.</p>

<p align="justify">Despite the functionality aspect of this approach. This implementation represnets considerable threat to the Runtime. In fact, an hyperty running in the context app has same hardware resources as the runtime. Therefore, executing a malicious code on this Context app,or if the code threw an error at some point of its execution, the whole runtime is compomised.</p> 
In brief this implemenation provides functional Runtime without worrying about the security aspect.
###2.3  Hyperty running in an isolated Sandbox:
<p align="justify">On the contrary of what was said before. In this implementation, the hyperty is totally isolated in Nodejs child process, as sub process, it has its own V8 NodeJs engine. As a result, it runs on its own isolated context.</p> 
Labeled as  ``Service Application``  in above architecture. A use case we could thing of, consists of having a server hyperty that regularly monitors other servers, and sends back collected data (statistics) to the Runtime Node.

        
###3. Quick Start
First you need to clone this repository:
```
git clone https://github.com/reTHINK-project/dev-runtime-nodejs.git
cd dev-runtime-nodejs
```

Afterwards, run the following (as root) :

```
# npm install
# npm start
```
