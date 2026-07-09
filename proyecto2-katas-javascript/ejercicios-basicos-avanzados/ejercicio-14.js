const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
    let counts = {};
    for (let i = 0; i < list.length; i++) {
        const word = list[i];
        if (counts[word]) {
            counts[word] += 1;
        } else {
            counts[word] = 1;
        }
    }
    return counts;
}

const result = repeatCounter(words);
console.log(result);