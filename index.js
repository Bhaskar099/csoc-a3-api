const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


// Define the project array before using it
const project = [
  {
    "id":1,
    "planet_name":"Sun",
    "mass":"1.989x10^30 Kg",
    "rotation_period":"27 days",
    "atmosphere":"H2,He",
    "description":"Aditya-L1 (Date:2 September 2023) is the first Indian observatory class mission to study the solar corona using a solar coronagraph and also chromosphere using near UV instrument. X-ray spectroscopic instruments will provide flare spectra while the in-situ payload observes the solar events."
  },


  {
    "id":2,
    "planet_name":"Mercury",
    "mass":"3.3x10^23 Kg",
    "confirmed_moons":0,
    "rotations_period":"58.65 days",
    "atmosphere":"minimal",
    "description":"Mercury is the smallest planet in our solar system. It's a little bigger than Earth's Moon. It is the closest planet to the Sun, but it's actually not the hottest. Venus is hotter. ISR0 is planning for its future missions on Mercury."
  },
  
  {
    "id":3,
    "planet_name":"Venus",
    "mass":"4.86x10^24 Kg",
    "confirmed_moons":0,
    "rotations_period":"243.02 days",
    "atmosphere":"CO2,N2",
    "description":"Venus is the second planet from the Sun and is Earth's closest planetary neighbor. The Indian Venus orbiter mission(Shukrayaan-1 , Date:December 2024) is a planned orbiter to Venus by ISRO to study the atmosphere of Venus."
  },
  
  
  {
    "id":4,
    "planet_name":"Earth",
    "mass":"5.97x10^24 Kg",
    "confirmed_moons":1,
    "rotations_period":"1.00 days",
    "atmosphere":"N2,O2,Ar",
    "description":"Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. Earth is the only planet in the Solar System whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic."
  },
  

  {
    "id":5,
    "planet_name":"Moon",
    "mass":"7.348x10^22 Kg",
    "rotation_period":"27.3 days",
    "atmosphere":"H2,Ne,Ar",
    "description":"Chandrayaan 1 as India's first lunar probe. It was launched by ISRO on 22 October 2008. Chandrayaan-2 was launched from the second launch pad at Satish Dhawan Space Centre on 22 July 2019.Chandrayaan-3 was launched from the Satish Dhawan Space Centre, Sriharikota on 14 July 2023"
  },

  
  {
    "id":6,
    "planet_name":"Mars",
    "mass":"6.41x10^23 Kg",
    "confirmed_moons":2,
    "rotations_period":"1.03 days",
    "atmosphere":"CO2,N2,Ar",
    "description":"Mars Orbiter Mission (MOM), also called Mangalyaan, is a spacecraft orbiting Mars since 24 September 2014. It was launched on 5 November 2013 by ISRO. It is India's first interplanetary spaceflight mission and ISRO has become the fourth space agency to reach Mars."
  },
  
  
  {
    "id":7,
    "planet_name":"Jupiter",
    "mass":"1.89x10^27 Kg",
    "confirmed_moons":95,
    "rotations_period":"0.41 days",
    "atmosphere":"H2,He",
    "description":"Jupiter is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn't have a solid surface, but it may have a solid inner core about the size of Earth."
  },
  
  
  {
    "id":8,
    "planet_name":"Saturn",
    "mass":"5.68x10^26 Kg",
    "confirmed_moons":146,
    "rotations_period":"0.44 days",
    "atmosphere":"H2,He",
    "description":"Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Saturn is a massive ball made mostly of hydrogen and helium. Saturn has many rings. Saturn also has dozens of moons."
  },
  
  {
    "id":9,
    "planet_name":"Uranus",
    "mass":"8.68x10^25 Kg",
    "confirmed_moons":27,
    "rotations_period":"0.72 days",
    "atmosphere":"H2,He,CH4",
    "description":"Uranus is one of two ice giants in the outer solar system (the other is Neptune). Most (80% or more) of the planet's mass is made up of a hot dense fluid of 'icy' materials : water, methane, and ammonia : above a small rocky core"
  },
  
  
  {
    "id":10,
    "planet_name":"Neptune",
    "mass":"1.024x10^26 Kg",
    "confirmed_moons":14,
    "rotations_period":"0.67 days",
    "atmosphere":"H2,He,CH4",
    "description":"Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the Sun as Earth is. Neptune is very similar to Uranus."
  }
];


// home page
app.get('/', (req, res) => {
  res.send('CSOC-A3');
});


//Get planet details
app.get('/planetdetails', (req, res) => {

  const pd = project;
  res.json(pd);
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
