// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge. 
// Don't forget the space after the closing parenthesis!



WRONG ANSWER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function createPhoneNumber(numbers){
    var phone = ['('];
    var phoneAnswer = phone.toString();
  
    for(i=0; i<3; i++){
        phone.push(numbers[i])
    }
  
    phone.push(') ')
  
    for(i=2; i<5; i++){
        phone.push(numbers[i])
    }
  
    phone.push('-')
  
    for(i=5; i<9; i++){
        phone.push(numbers[i])
    }
  
    console.log(phone)
    console.log(phoneAnswer)
    phone.toString()
  }
  
  
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])



  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }