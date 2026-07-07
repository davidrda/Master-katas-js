const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numberList[i];
    }

    const result = sum / numberList.length;
    return result;
}

const result = average(numbers);
console.log(result);