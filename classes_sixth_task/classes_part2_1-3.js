class COAXManag {
    constructor(firstName, lastName, phoneNumber, position, education, dateOfEmployment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.position = position;
        this.education = education;
        this.dateOfEmployment = dateOfEmployment;
    }

    get position() {
        this._position;
    }

    set position(value) {
        if (['ITManag', 'SysAdmin', 'JavaScript Developer', 'DevOps'].includes(value)) this._position = value;
        else this._position = undefined;
    }
}

const coaxmanag = new COAXManag('Nazar', 'Talaievych', '+380996462584', 'JavaScript Developer', 'Software engineering', 2021);

console.log(coaxmanag);