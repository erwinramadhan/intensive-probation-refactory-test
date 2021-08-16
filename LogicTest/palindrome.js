const palindrome = (str) => {
  let re = /[^A-Za-z0–9]/g;
  let lowRegStr = str.toLowerCase().replace(re,'');
  let reverseStr = lowRegStr.split('').reverse().join('');
  return lowRegStr === reverseStr ? 'palindrome' : 'not palindrome'
}

console.log(palindrome('Radar'))
console.log(palindrome('Malam'))
console.log(palindrome('Kasur ini rusak'))
console.log(palindrome('Ibu Ratna antar ubi'))
console.log(palindrome('Malas'))
console.log(palindrome('Makan nasi goreng'))
console.log(palindrome('Balonku ada lima'))