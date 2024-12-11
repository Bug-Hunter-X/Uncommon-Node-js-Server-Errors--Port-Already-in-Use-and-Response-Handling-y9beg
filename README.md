# Uncommon Node.js Server Errors

This repository demonstrates two uncommon errors that can occur when developing Node.js servers:

1. **`ERR_SERVER_ALREADY_IN_USE`**: This error arises when you try to start a server on a port that's already occupied by another process.
2. **Improper Response Handling**:  Failure to properly handle the response object can result in memory leaks and unexpected behavior. 

The `bug.js` file contains code that reproduces the `ERR_SERVER_ALREADY_IN_USE` error, while the `bugSolution.js` file provides a solution and explains how to prevent and address this problem and other response-related issues.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.  If another server is already running on port 3000, the error will be thrown.
3. Run `node bugSolution.js` to see the solution.