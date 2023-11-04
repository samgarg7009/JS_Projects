// observer pattern
// in this we define one to many dependency relationships from one object(subjects) to many other objects(observers)

function Subject() {
    this.observers = [] //array of observer functions
}

Subject.prototype = {
    subscribe: function(funAdd) {
        this.observers.push(funAdd)
    },
    unsubscribe: function(funRem) {
        this.observers = this.observers.filter(funAdd => {
            if (funAdd != funRem) {
                return funAdd
            }
        })
    },
    fire: function() { // notify every observer, currently subscribed, to this subject
        this.observers.forEach(funAdd => {
            funAdd.call()
        })
    }
}

const subject = new Subject()

function obser1() {
    console.log("obser1 is firing")
}

function obser2() {
    console.log("obser2 is firing")
}

subject.subscribe(obser1)
subject.subscribe(obser2)

subject.fire()

subject.unsubscribe(obser2)
subject.fire()