const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 22 },
  { name: "Jane", age: 23 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    // 1 ) obj = { name: 'Alice', age: 21 }
    // 2) obj = { name: 'Max', age: 22 }
    let key = obj[property]; // 1 ) key =21 2) key =22
    if (!acc[key]) {
      acc[key] = []; // 1) {21: []}
    }
    acc[key].push(obj);
    /*/ 1) {21: [{ name: 'Alice', age: 21 }]}
        2) {
            21: [{ name: 'Alice', age: 21 }],
            22: [{ name: 'Max', age: 22 }]
          }
    /*/
    return acc;
  }, {});
}

let groupedPeople = groupBy(people, "age");
console.log({ groupedPeople });
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

/*/
----------------Lodash keyBy----------------
 var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];
 
_.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
});
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 
_.keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

/*/
