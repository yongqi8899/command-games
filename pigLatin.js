const english = process.argv.slice(2)
let isVowel = "aeiouAEIOU".split("");
let latinSatz = english.map((word)=>{
  let latin;
  if (isVowel.includes(word.charAt(0))) {
    latin = word.concat("way");
  }
  if (!isVowel.includes(word.charAt(0)) && isVowel.includes(word.charAt(1))) {
    latin = word.slice(1).concat(word[0], "ay");
  }
  if (
    !isVowel.includes(word.charAt(0)) &&
    !isVowel.includes(word.charAt(1))
  ) {
    latin = word.slice(2).concat(word.slice(0, 2), "ay");
  }
  return latin;
})
console.log(latinSatz.join(" "));