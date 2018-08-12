/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  let output = []
  let arr = string.split('')

  let anagram = ''

  function getNextLetter(arr) {
    for (var i = 0; i < arr.length; i++) {
      anagram += arr[i]
      if (anagram.length === string.length) output.push(anagram)
      let tempArr = arr.slice()
      tempArr.splice(i, 1)
      getNextLetter(tempArr)
      anagram = anagram.slice(0, anagram.length - 1)
    }
  }

  //start recurive function
  getNextLetter(arr)

  //remove repeated results
  let set = new Set(output)
  let result = []
  set.forEach(el => {
    result.push(el)
  })

  return result
}
