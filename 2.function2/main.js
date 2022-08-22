function palindrome(message){
    return message.split("").reverse().join("")==message ? true : false
}
console.log(palindrome("hello"))
console.log(palindrome("abcba"))