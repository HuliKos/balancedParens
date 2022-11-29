// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
function balanced (input) {
    char = input.split("")
    let openP = 0
    let closeP = 0

    for(i=0; i<char.length; i++){
        if(char[i] === "("){
            openP += 1
        } else if (char[i] === ")"){
            closeP +=1
        }
    }
    return openP === closeP
}

console.log(balanced (sample1))
console.log(balanced (sample2))
console.log(balanced (sample3))
console.log(balanced (sample4))