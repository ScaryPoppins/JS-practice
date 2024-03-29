//   Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.








// var listn = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]

// function list(names){
// var namer = ''

//   for(i=0; i<names.length; i++){
//     namer =+ names[i].name
//   }
//   return(namer)
// }

// list(listn)






function list(names){
    let nameList = [];
    let nameString = '';
    
   if (names.length === 0) {
     return nameString;
    } else if (names.length === 1) {
      return names[0].name;
    }
    
   for (let name in names) {
     console.log(names[name].name);
     
     nameList.push(names[name].name);
   }
   
   for (let i = 0; i < nameList.length -1; i++) {
     nameString += nameList[i] + ', ';
   }
   
   if (nameList.length >= 1) {
     nameString += '& ' + nameList.pop();
   } else {
     nameString += nameList.pop();
   }
   
   return nameString;
  }
  
  
  // Example:
  
  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])