const aCar = {
    owner : "Joe Bloggs",
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc : 1.8
    },
    registration : {
        year : '2020', county : 'CA',number : '1717',
    },
    milage : '100',
    color : {   
        exterior: "red",
        interior: { texture: "leather", shade: "cream" }
    },
    previous_owners: [
        "Pat Smith - 1 Main Street",
        "Sheila Dwyer - 2 High Street"
      ],
    
      features : ['Parking assist', 'Alarm', 'Tow-bar'],
};

for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
}

for (let p in aCar.type)  {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}


console.log('First owner : ' + aCar.previous_owners[0] )
console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log(
    "Reg. = " +
      aCar.registration.year +
      "-" +
      aCar.registration.county +
      "-" +
      aCar.registration.number
  );

  console.log(
    "It is a " +
      aCar.color.exterior +
      " car, " +
      aCar.milage +
      " milage, with " +
      aCar.color.interior.texture +
      " interior."
  );