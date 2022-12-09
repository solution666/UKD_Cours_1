const mas = [9, 2, 6, 1, 3];

function find(arr, el){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === el){
      return i;
    }
  }
  return -1;
}

console.log(`Found on index: ${find(mas, 1)}`);