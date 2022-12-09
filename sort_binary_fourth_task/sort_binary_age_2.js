const massOfObj = [
    { index: 11, userName: 'Nazar Talaievych', age: 17, occupation: 'programmer' },
    { index: 22, userName: 'Max Levchinko', age: 19, occupation: 'videomaker' },
    { index: 33, userName: 'Bohdan Solop', age: 18, occupation: 'footballer' },
];

function find(mas, num){
    let start = 0;
    let stop = mas.length;
    let target = num;

    for (let j = 0; j < mas.length; j++){
        for (let i = 0; i < mas.length - 1; i++){
            if (mas[i].age > mas[i + 1].age){
            const result = mas[i];
            mas[i] = mas[i + 1];
            mas[i + 1] = result;
            }
        }
    }

    for (let i = 0; i < mas.length; i++) {
        let index = Math.round((stop - start) / 2) + start;
        
        let diff = target - mas[index].age;
        if (diff === 0) {
            return (mas[index]);
        }

        if(start === stop || start > stop) {
            return (-1);
        }

        if (diff > 0) {
            start = index + 1;
        } else {
            stop = index - 1;
        }
    }
}

console.log(find(massOfObj, 17));