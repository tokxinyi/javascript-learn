# Objective
To generate a random colour in the background every time you hit the "Generate Color" button.

# Learning Notes
`Math.random.toString()` - by default is base 10.
If you specify `Math.random.toString(n)`, it will randomly generate numbers in base n.

`substring(2,8)` - will take the characters from the third position to 8th 

## Arrow Function vs Normal Function - Javascript

```js
// Arrow function
const name = () => {
    // whatever you want to do
}

```
Arrow function is a new feature that is a more consise syntax for writing function expressions.
Arrow function cannot be used as a constructor. Cannot use `new` keyword.
Cannot have duplicated name parameters, whether in strict or non-strict mode.
Arrow functions are anonymous = not named
- Makes it harder to debug (because you don't know where is the function called)
- No self-referencing (e.g. recursion)

```js
// Normal function
function name() {
    // whatever you want to do
}

```

Function statements performs an action.
Function expression produces a value.