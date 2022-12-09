class Phone {
    constructor (yearOfCreation, memory, price) {
        this.yearOfCreation = yearOfCreation;
        this.memory = memory;
        this.price = price;
    }
}

class Redmi extends Phone {
    constructor (yearOfCreation, memory, price, color = 'silver') {
        super (yearOfCreation, memory, price);
        this.color = color;
    }
}

class Poco extends Phone {
    constructor (yearOfCreation, memory, price, color = 'white') {
        super (yearOfCreation, memory, price);
        this.color = color;
    }
}

class Huawei extends Phone {
    constructor (yearOfCreation, memory, price, color = 'pink') {
        super (yearOfCreation, memory, price);
        this.color = color;
    }
}




const redmi = new Redmi(2013, 128, 9000);
const poco = new Poco(2018, 256, 14000);
const huawei = new Huawei(2010, 32, 5000);

console.log (redmi, poco, huawei);