const massOfObj = [
  { index: 11, userName: 'Nazar Talaievych', age: 21, occupation: 'programmer' },
  { index: 21, userName: 'Max Levchinko', age: 20, occupation: 'videomaker' },
  { index: 33, userName: 'Bohdan Solop', age: 18, occupation: 'footballer' },
];

function find(arr, el){
  for (let i = 0; i < arr.length; i++){
    if (arr[i].index === el){
      console.log(arr[i]);
    }
  }
  return -1;
}

console.log(`Found by object index: ${find(massOfObj, 11)}`);