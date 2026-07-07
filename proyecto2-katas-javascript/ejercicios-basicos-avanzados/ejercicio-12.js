const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
    let word = null;
    let listDefinitive = [];
    for (let i = 0; i < list.length; i++) {
        word = list[i];
        if (!listDefinitive.includes(word)){
            listDefinitive.push(word);
        }
    }

    return listDefinitive;
}

console.log(removeDuplicates(duplicates));