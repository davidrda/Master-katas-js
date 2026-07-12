const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
    const element = foodSchedule[i];
    if (element.isVegan === false) {
        const fruit = fruits.shift();
        foodSchedule.splice(i, 1, {name: fruit, isVegan: true});
    }
}

console.log(foodSchedule);