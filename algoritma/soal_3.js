const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const freqMap = {}
                
for (const word of INPUT) {
  freqMap[word] = (freqMap[word] || 0) + 1
}

const result = [];
const explanation = QUERY.map(word => {
  const count = freqMap[word] || 0
  result.push(count);
  return count == 0 ? `kata '${word}' tidak ada pada INPUT` : `kata '${word}' terdapat ${count} pada INPUT`
})

console.log(result, `karena ${explanation.join(', ')}.`)
