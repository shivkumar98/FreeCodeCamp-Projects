// rules of pig latin:

// if word begins with consonant, take the first consonant or consonant cluster and add it to the end of the word and add "ay" to it

// if a word begins with a vowel, just add "way" at the end

function translatePigLatin(str) {
    console.log(str[0])
    if (str.match(/^[^aeiou]+/)){
      console.log(str.match(/^[^aeiou]+/))
      return str.replace(/^[^aeiou]+/, "")+str.match(/^[^aeiou]+/)+"ay"
    } else if (str.match(/^[aeiou]/)){
      return str+"way"
    } 
  }
  
  console.log(translatePigLatin("consonant"))
  