let cipher = process.argv.slice(2)
let alpha = 'abcdefghijklmnopqrstuvwxyz'.split("")
let wordsArr = cipher[0].split(" ")
let alphasArr = wordsArr.map((alphaArr)=>{
    let newAlpha = []
    alphaArr.split("").map(e => {
        let index = alpha.indexOf(e)
        let newIndex = index + Number(cipher[1]%26)
        newAlpha.push(alpha[newIndex])
    });
    let newWord = newAlpha.join("");
    console.log(newWord);
})
