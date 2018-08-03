function addressMaker(address){

  const newAddress={
      city: address.city,
      state: address.state,
      country:"Cote D'Ivoire"
  };

  const {city, state} = address;
  console.log(newAddress);
}

addressMaker({city: "Dabou",state:'Lagunes'});
