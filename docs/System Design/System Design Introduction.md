# Introduction

Application can be big and complex system, it is a collection of systems, some can be large for example it can be handling all the key functionality and some can be as small as counting the traffics. There are sophisticated distrubuted systems behinds each of the functions. Every small feature can be huge problem and to be sure application runs at large scale smoothly we need to have a good architectures. Advanced distributed system is needed for a lot of simple tasks.

## System design strategy 

-  Broke down the problem into multiple common subproblems.
-  Apply fundamental system design concepts and best practice to address each subproblems.

### The main problems and its concepts
- How to transfer data at large scale
  - non-blocking I/O
  - buffering and batching
  - network protocols
  - message formats
  - load balancing
  - partitioning
  - consistent hashing
- how to aggregate data efficiently 
  - push vs pull
  - deduplication
  - checkpointing
  - data enrichment
  - embeded database
  - state management
  - fallback
- how to store data reliably
  - reverse proxy
  - coordination service
  - health checking
  - peer and service discovery
  - replication 
  - quorum 
  - availability zone
- how to retrieve data quickly 
  - aggregate on write
  - eventual consistency
  - denormalization
  - data rollup
  - hot and cold storage
  - polyglot persistence
  - distributed cache
All these concepts are bricks and we need to know when and how to use them. 
### What to study?
- common system design problems 
- what tools we have for solving them
