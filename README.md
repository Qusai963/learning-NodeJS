# What is Node?
### Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.

## Node-Specific Functionality

### Globals

#### Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file.

*  module  is an object referring to the functionality that will be exported from a file. In Node, each file is treated as a module.
*  require()  is a function used to import modules from other files or Node packages.
process is an object referencing to the actual computer process running a Node program and allows for access to command-line arguments and much more.

### Modules
Node has a many built-in modules to aid in interactions with the command line, the computer file system, and the Internet. These include

 HTTP and HTTPS  for creating web servers.
 File System  ,  OS  , and  Path  for interacting with the file system, operating system, and file/directory paths.

# What is Express?
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Middlewares

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

## Templating Engine
A templating engine is a tool that allows you to generate dynamic content and HTML pages based on templates and data. Templating engines typically use a combination of static HTML markup and dynamic template tags to generate output that varies based on the data being processed.