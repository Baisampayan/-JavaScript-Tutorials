// String Method charAt()
console.log(`String Method charAt()`);
const str1 = "JavaScript";
console.log(str1.charAt(4));

// String Method charCodeAt()
console.log(`String Method charCodeAt()`);
const str2 = "Abc";
console.log(str2.charCodeAt(0));

//String Method concat()
console.log(`String Method concat()`);
const str3 = " is the future."
console.log(str1.concat(str3));

// String Method indexOf()
console.log(`String Method indexOf()`);
const str4 = "Full Stack Development at Full Speed";
console.log(str4.indexOf("S"));     // Position of the Character "S" in the string
console.log(str4.indexOf("e",13));  // Position of the Character "e" in the string after the 13th index
console.log(str4.indexOf("Development"));  // Position of the String "Development" in the string
console.log(str4.indexOf("Full",13));  // Position of the Character "Full" in the string after the 13th index

// String Method indexLastOf()
console.log(`String Method indexLastOf()`);
const str5 = "Full Stack Development at Full Speed";
console.log(str5.lastIndexOf("S"));     // Position of the Character "S" in the string
console.log(str5.lastIndexOf("F",1));  // Position of the Character "e" in the string after the 13th index
console.log(str5.lastIndexOf("Development"));  // Position of the String "Full" in the string
console.log(str5.lastIndexOf("Full",39));  // Position of the Character "e" in the string after the 13th index

// String Method search()
const str6 = "Full Stack Development at Full Speed";
console.log(str6.search("at")); // Return the position of the "at" in the string