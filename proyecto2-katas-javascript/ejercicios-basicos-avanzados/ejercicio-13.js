const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nameToSearch) {
    let element = null;
    for (let i = 0; i < nameList.length; i++) {
        element = nameList[i];
        if (element === nameToSearch){
            let result = {
                found: true,
                name: element,
                index: i
            }
            return result;
        }
    }
    return null;
}

const resultFunction = nameFinder(names, 'Peggy');
console.log(resultFunction);