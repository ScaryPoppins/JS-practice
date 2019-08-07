// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):

//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

// ALGORITHMSNUMBERS



function narcissistic(value) {
    let valueSplit = value.toString().split("")
    let value2 = valueSplit
    var valueMult = []
   
   //  console.log(valueSplit)
   //  console.log(value2)
   
    for(i=0; i<value.length; i++){
        +valueMult.push(Math.pow(value2[i],valueSplit.length))
    }
   
   //  console.log(valueMult)
   
    if (value.length > 1)
    {
    var valueTotal = valueMult.reduce((accumulator, currentValue) =>
    { return +accumulator + +currentValue})
   //  console.log(valueTotal)
    }
    else{
      var valueTotal = valueSplit.push()*value
    }
   // console.log(valueTotal)
   // console.log(value)
   
    if (value == valueTotal){
      console.log(true)
      return true
    }
   else{ 
     console.log(false)
     return false
     }
   }
   
   narcissistic("371")