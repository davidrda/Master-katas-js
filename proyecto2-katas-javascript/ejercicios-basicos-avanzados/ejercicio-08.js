const avengers = [
  "Hulk", // 4
  "Thor", // 4
  "Iron Man", // 8
  "Captain A.", // 10
  "Spider Man", // 10
  "Captain M.", // 10
];


function findLongestWord(stringList) {
    let mayor = null;
    for (let i = 0; i < stringList.length - 1; i++) {
        let x = stringList[i].length
        if (mayor === null || x > mayor.length) {
            mayor = stringList[i];
        }
    }
    return mayor;
}

let longestWord = findLongestWord(avengers);
console.log(longestWord);