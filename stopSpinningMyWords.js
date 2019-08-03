//   Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(arr){
    var splitArr = arr.split(" ")
    var newArr = []
  
    for(let i=0; i<splitArr.length; i++){
  
      if(splitArr[i].length <= 4){
        newArr.push(splitArr[i] )
      }
      else{
      var wordSplit = splitArr[i].split('')
      var wordReverse = wordSplit.reverse()
      var wordJoin = wordReverse.join('')
      newArr.push(wordJoin)
      // console.log(wordJoin)
      }
    }
  // console.log(splitArr)
  return(newArr.join(' '))
  }
  
  spinWords('This is incredibly awesome')