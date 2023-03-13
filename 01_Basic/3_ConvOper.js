// Number(score)
// "33" => 33
// "33abc"/undefined => NaN
// true => 1; false => 0; null => 0

// Boolean(isLoggedIn)
// 1 => true
// "" => false
// "ahsdbf" => true

let a = null
let b = undefined
console.log(Number(a), Number(b))
console.log(Boolean(a), Boolean(b))
console.log(String(a), String(b))
