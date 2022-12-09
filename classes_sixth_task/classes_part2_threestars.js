class Staff {
    constructor (lastName){
        this.lastName = lastName;
    }
}

class RemoteStaff extends Staff {
    constructor(lastName, schedule) { 
        super(lastName);
        this.monday = schedule.monday;
        this.tuesday = schedule.tuesday;
        this.wednesday = schedule.wednesday;
        this.thursday = schedule.thursday;
        this.friday = schedule.friday;
        this.saturday = schedule.saturday;
        this.sunday = schedule.sunday;
    }
}

const remotemanag = new RemoteStaff('Jonson', { monday: "7:00 - 12:00", tuesday: "9:00 - 14:00", wednesday: "8:00 - 14:00", thursday: "10:00 - 19:00", friday: "12:00 - 18:00", saturday: "9:00 - 13:00", sunday: "rest time" })

console.log(remotemanag);