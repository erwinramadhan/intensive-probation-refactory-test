const reverseWords = (str) => {
  let splitedWords = str.split(' ');
  const reverseSplitedWords = splitedWords.map(word => word.split('').reverse().join(""))
  const convertToString = reverseSplitedWords.join(' ').toString().replace('taerG', 'Taerg');

  return convertToString
}

console.log(reverseWords('I am A Great human'));