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
};


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