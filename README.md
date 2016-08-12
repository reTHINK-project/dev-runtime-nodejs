# dev-runtime-nodejs
### Overview
Since this develompnet is still in porgress, we give a short overview that will be updated in the near future.

This repository  aims to execute the reTHINK runtime core in Node.js.

The execution of the core runtime takes place in an subprocess(child process) which isolates it from the main process (the process node where the App javascript code is being executed first).
### Architecture Overview
The design and implementation of this runtime was mostly influenced by [runtime-browser](https://github.com/reTHINK-project/dev-runtime-browser). This runtime was designed with compliance with Runtime Node requirements reported in D3.1. Essentially, this runtime follows by design security approach, where different types of componenets are executed in isolated SandBoxes.

Sandboxing technology was realised thanks to multi-processor environment in NodeJS. Particularly, the native `child_process.fork()` method was used for this purpose. Spawned (forked) NodeJS `child processes` are independent of the parent. Each process has its own memory, with its own V8 instance engine. However, an IPC(Inter-Process Communication) channel is established between the parent and child that allows messages to be passed back and forth between them.
![runtime-nodejs](Runtime-NodeJS.png)
<p align="center">
  ```Figure :Runtime Node Architecture```
</p> 


### Architecture Description 
At bootstrap the server.js is launched. In the following the functionalities of each components :

``server.js`` :
- It servers /resources/descriptors folder tat server as temporarily local catalogue (Hyperties.json, Runtimes.json, ProtoStubs.json)
- It Loads RuntimeUAStub

``RuntimeUAStub`` :
- Main Runtime-Node.js process
- It deploys `core` in an isolated sandbox( child-process)
- Routes messages back and forth between the Context App and the core
- It Exposes loadHyperty and loadProtoStub to Context Application

``Core Sandbox``:
 - Node.js child process (simultaneously is a parent process of ContexServiceProvider sandbox) used as an isolated sandbox to load  the Hyperty runtime
 - instantite ``SandboxApp`` proxy to Context App Sandbox in main app
 - Instantiate ``SandboxWorker`` to load  Context Service Provider as sandbox for ProtoStub.
 - Handels communication between internal/external components
 - All Communications from/to the ``core`` is routed through The Message Bus
 
``Context Service Provider SandboxWorker `` :
- Nodejs child process having ``core`Sandbox`` as parent process.
- It loads and activates Protostub to the messaging node

``Context App Sandbox `` :
- Deployed in main app
- It's used to load and activate Hyperties 

        
##### Quick Start
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
