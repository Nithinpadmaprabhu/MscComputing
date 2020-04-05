const aCar = {
    owner : "Joe Bloggs",
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc : 1.8
    },
    registration : {
        year : '2020', county : 'CA',number : '1717',
    }
    
};

console.log(aCar.registration.county);
console.log(aCar.owner + ' drives a ' + aCar.type.make);