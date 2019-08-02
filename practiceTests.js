/************** Error Handling ***************/

// function returnArg(...args) {
//   console.log(args)
//   if(args.length) {
//     return args[0]
//   }
// }

 
// //arguments/...


// /*********** try/catch/rethrowing ***********/
// state = {
//   error: ''
// }


// try {
//   console.log(myVar)
// } catch(e) {
//   this.setState({error:e.message});
// }
// render() {
//   return(
//     <div>
//       <h1>{this.state.error}</h1>
//     </div>
//   )
// }

// console.log(myVar);

// function test() {
//   // throw new Error('Hey yall');
// }

// try {
//   test();
//   console.log('Connected to internet')
// } catch(e) {
//   if(e.message === 'Whoops') {
//     console.log('Unable to connect to internet');
//   } else {
//     throw e;
//   }
//   // console.log(e)
// }

/************ Nested try/catch **********/

// try {
//   try {
//     if(3 > 5) {
//       throw new Error('What the heck');
//     }
//   } catch(e) {
//     if(e.message === 'jk') {
//       console.log('Iz all right')
//     } else {
//       throw e;
//     }
//   }
// } catch(e) {
//   console.log(e.message)
// }


/********* Unwinding The Stack *********/
// function a() {
//   try {
//     b()
//   } catch(e) {
//     throw e;
//     console.log(e.message);
//   }
// }
// function b() {
//   c()
// }
// function c() {
//   throw new Error('I come from planet C')
// }
// try {
//   a()
// } catch(e) {
//   console.log(e.message);
// }

/********** Hoisting *********/

// console.log(x);
// var x = 0;

// //function declaration vs expression
// console.log(hoistMe);
// // function hoistMe() {
// //   console.log(4);
// // }


// var hoistMe = function() {
//   console.log(4);
// }