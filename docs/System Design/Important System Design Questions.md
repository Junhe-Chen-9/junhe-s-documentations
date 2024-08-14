### Key requirements

#### System can be designed very differently and achieve similar results, but what is a good design?

- User/Customers
  - This helps us understand who is going to use the system, and based on this, we need to alter our system.
- Scale
  - how many traffic we are anticipating read queries
  - how much data is queried per request
  - how many traffic are processed
  - will there be spikes
- Performance
  - what is expected write-to-read data delay?
  - what is expected p99 latency for read queries?
- Cost
  - design will minimize the cost of development
  - design will minimize the cost of maintenancel nm
