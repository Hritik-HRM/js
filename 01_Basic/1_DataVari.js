"use strict" // use all js code as newer version

const accountId = 2342
let accoundEmail = "24245" // use it most of the time
var accountPassword = "21212122121" // do not use it, because of issue in block scope and functional scope
//accountCity = "Jaipur" // avoid it also// if use strict is there give error

// accountId = 1 // gives TypeError: Assignment to constant variable


let name = "app"
let age = 20
let isLoggedIn = false
let state

console.table([typeof name, typeof age, typeof isLoggedIn, typeof state])
console.log(typeof null, state) // object