# dev-runtime-nodejs
### 1. Overview
Since this develompnet is still in porgress, we give a short overview that will be updated in the near future.

This repository  aims to execute the reTHINK runtime core in Node.js.

The execution of the core runtime takes place in an subprocess(child process) which isolates it from the main process (the process node where the App javascript code is being executed first).
### 2. Architecture Overview
<p align= "justify">The design and implementation of this runtime was mostly influenced by <a href="https://github.com/reTHINK-project/dev-runtime-browser" rel="nofollow">runtime-browser</a>. This runtime was designed with compliance with Runtime Node requirements reported in D3.1. Essentially, this runtime follows by design security approach, where different types of componenets are executed in isolated SandBoxes.
</p>
<p align= "justify"> Sandboxing technology was realised thanks to multi-processor environment in NodeJS. Particularly, the native  <a href = "https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options" rel="nofollow"> child_process.fork() </a> method was used for this purpose. Spawned (forked) NodeJS child processes are independent of the parent. Each process has its own memory, with its own V8 instance engine. However, an IPC (Inter-Process Communication) channel is established between the parent and child that allows messages to be passed back and forth between them.
</p>
![runtime-nodejs](Runtime-NodeJS.png)
<p align="center">
  Figure : Runtime Node Architecture
</p> 


###2.1 Architecture Description 
<p align="justify">As illustrated in the diargam above, Runtime Node design has a flexible approach. Since it supports both deploying hyperty application in an isolated sandbox or in the same context as Runtime Node process. 
In the following upcoming sections a descritpion of main architecture components is given. Afterwards, an emphasis on architecture possible slight variations depending on possible use cases and/or businesss models.</p>

At bootstrap the `server.js` is launched. In the following the functionalities of each components :

####``server.js`` :
- Serves /resources/descriptors folder that act as temporarily local catalogue (Hyperties.json, Runtimes.json, ProtoStubs.json)
- Loads RuntimeUAStub

#####``RuntimeUAStub`` :
- Main Runtime-Node.js process
- Deploys `core` in an isolated sandbox( ```child_process```)
- Routes messages back and forth between the Context App and the core
- Exposes loadHyperty and loadProtoStub to Context Application

#####``Core Sandbox``:
 - Node.js child process (simultaneously is a parent process of ContexServiceProvider sandbox) used as an isolated sandbox to load  the Hyperty runtime
 - instantites ``SandboxApp`` proxy to Context App Sandbox in main app
 - Instantiates ``SandboxWorker`` to load  Context Service Provider as sandbox for ProtoStub.
 - Handels communication between internal/external components
 - All Communications from/to the ``core`` is routed through The Message Bus
 
#####``Context Service Provider SandboxWorker `` :
- Nodejs child process having ``core`Sandbox`` as parent process.
- Loads and activates Protostub to the messaging node

####``Context App Sandbox:``
- Deployed in main app
- It's used to load and activate Hyperties

###2.2  Hyperty running in same contex as the Runtime Node

        
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
