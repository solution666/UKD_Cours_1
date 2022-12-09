const todayYear = new Date().getFullYear();

class COAXManag {
    constructor(firstName, lastName, phoneNumber, position, education, yearOfEmployment, yearOfDismissal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.education = education;
        this.yearOfEmployment = yearOfEmployment;
        this.yearOfDismissal = yearOfDismissal;
    }

    get position() {
        this._position;
    }
    set position(value) {
        if (['ITManag', 'SysAdmin', 'JavaScript Developer', 'DevOps'].includes(value)) this._position = value;
        else this._position = undefined;
    }

    get yearOfEmployment() {
        this._position;
    }
    set yearOfEmployment(value) {
        if (value > todayYear) this._yearOfEmployment = null;
        else this._yearOfEmployment = value;       
    }

    get yearOfDismissal() {
        this._yearOfDismissal;
    }
    set yearOfDismissal(value) {
        if (value < this._yearOfEmployment) this._yearOfDismissal = null;
        else this._yearOfDismissal = value;
    }
}

const coaxmanag = new COAXManag('Nazar', 'Talaievych', '+380996462584', 'JavaScript Developer', 'Software engineering', 2019, 2020); 

console.log(coaxmanag);