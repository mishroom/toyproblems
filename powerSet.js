/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  let output = ['']

  function removeLetter(string) {
    output.push(string)
    let arr = string.split('')
    for (var i = 0; i < arr.length; i++) {
      let tempArr = arr.slice()
      tempArr.splice(i, 1)
      if (tempArr.length > 0) removeLetter(tempArr.join(''))
    }
  }
  removeLetter(str)

  let result = []
  let set = new Set(output)
  set.forEach(el => {
    result.push(el)
  })
  return result
}
