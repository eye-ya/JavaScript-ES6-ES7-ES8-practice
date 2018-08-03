function addressMaker(address){
  const {city, state} = address;

  const newAddress={
      city,
      state,
      country:"Cote D'Ivoire"
  };

  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city: "Dabou",state:'Lagunes'});
