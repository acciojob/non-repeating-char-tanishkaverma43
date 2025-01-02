function firstNonRepeatedChar(str) {
 // Write your code here
	  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return str[i];
    }
  }

  return null;

	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
