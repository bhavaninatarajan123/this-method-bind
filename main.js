let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

let a=runner.run.bind(flyer,20)
console.log(a())



// Output:
// Flyer runs at 20 mph.

// use bind method"