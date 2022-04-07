- Object oriented programing is a type of program design where logic is designed in objects rather than conventional functions
- functional programming is a type of program design where logic is constructed/structured in form of functions
- What is testing? - Testing is the process of evaluating the correctness, efficiency and robustness of a particular program or specific parts of it.
- What is the difference between undeclared & undefined variables? -Declared variables are variables whose types and name have been specified by users while undeclared variables are varibles whore types cannot be infered by a compiler or an interpreter.
- What are promises in JavaScript? - A promise is an object that hold a state(whether pending or working) and a result
- Write an example definition of a JS object for a person called `customer`.The object should have the following details:

 * fullname

 * id number (i.e random number)

 * a function to retrievew the full name and id number of the customer.
 ```
 const person = {
     name: "customer",
     fullname: "Victor Mwangi",
     id: 4,
 }
 function retrieveCustomer(){
     for(key in person) {
         if(person.name === 'customer'){
             return {person.fullname, person.id} 
         }
     }
 }
 ```
 - What will be the output of the following code?

 ```

 	console.log(false == '0') // equality  -> true

 	console.log(false === '0') // strict equality -> false

 ```
- React/Js what is the virtual dom? - A virtual dom is a dom stored in memory during rendering
- React/Js how do you pass data from parent to child component? - through props
- React/Js what is the difference between useState & Useffect hook? - usestate rerenders when state changes, useeffect runs when a rerender occurs
- What is the difference between  Class and Functional components? - class components are initialised through a class which extends react component while functional components are initialised through functions or arrow functions.
- What is the difference between state and props? state is mutable while props are immutable and transfer data to child components from parent
- What is a higher order component? -  a component that can be reused within the react app
- What is the purpose of `render()` function? - it creates or updates the dom
- What is GCP? - Google Cloud Platform is a hosting provider




- What is App Engine?






- What is the difference between Software as a Service and Platform (SaaS) as a Service (Paas)?

Software as a service provides the service directly to customers while paas allows saas to utilise it.




-What is Infrastructure as Code and why is it important in the modern server environment?






- What is Infrastructure as a Service (IaaS)?






- What is a class C network address






- What is a “port number” and why is it used






- What is JavaScript?






- What are the data types supported by JavaScript?






-  How can you create an object in JavaScript?






-  What is NaN in JavaScript?






-  What is the difference between Call & Apply?






-  How does Node.js work?






-  Explain callback in Node.js






-  What are the advantages of using promises instead of callbacks?






-  How would you connect a Postgresql database to Node.js?






-  What is callback hell?






-  What is REPL in Node.js?






-  What is node cluster and how do you use it?