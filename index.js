const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


// Define the project array before using it
const project = [
  {
    "id":1,
    "planet_name":"Mercury",
    "mass":"3.3x10^23 Kg",
    "confirmed_moons":0,
    "rotations_period":"58.65 days",
    "atmosphere":"minimal",
    "description":"mercury data"
  },
  
  {
    "id":2,
    "planet_name":"Venus",
    "mass":"4.86x10^24 Kg",
    "confirmed_moons":0,
    "rotations_period":"243.02 days",
    "atmosphere":"CO2,N2",
    "description":"venus data"
  },
  
  
  {
    "id":3,
    "planet_name":"Earth",
    "mass":"5.97x10^24 Kg",
    "confirmed_moons":1,
    "rotations_period":"1.00 days",
    "atmosphere":"N2,O2,Ar",
    "description":"earth data"
  },
  
  
  {
    "id":4,
    "planet_name":"Mars",
    "mass":"6.41x10^23 Kg",
    "confirmed_moons":2,
    "rotations_period":"1.03 days",
    "atmosphere":"CO2,N2,Ar",
    "description":"mars data"
  },
  
  
  {
    "id":5,
    "planet_name":"Jupiter",
    "mass":"1.89x10^27 Kg",
    "confirmed_moons":95,
    "rotations_period":"0.41 days",
    "atmosphere":"H2,He",
    "description":"jupiter data"
  },
  
  
  {
    "id":6,
    "planet_name":"Saturn",
    "mass":"5.68x10^26 Kg",
    "confirmed_moons":146,
    "rotations_period":"0.44 days",
    "atmosphere":"H2,He",
    "description":"saturn data"
  },
  
  {
    "id":7,
    "planet_name":"Uranus",
    "mass":"8.68x10^25 Kg",
    "confirmed_moons":27,
    "rotations_period":"0.72 days",
    "atmosphere":"H2,He,CH4",
    "description":"uranus data"
  },
  
  
  {
    "id":8,
    "planet_name":"Neptune",
    "mass":"1.024x10^26 Kg",
    "confirmed_moons":14,
    "rotations_period":"0.67 days",
    "atmosphere":"H2,He,CH4",
    "description":"neptune data"
  },


  {
    "id":9,
    "planet_name":"Sun",
    "mass":"1.989x10^30 Kg",
    "rotation_period":"27 days",
    "atmosphere":"H2,He",
    "description":"sun data"
  },
  
  {
    "id":10,
    "planet_name":"Moon",
    "mass":"7.348x10^22 Kg",
    "rotation_period":"27.3 days",
    "atmosphere":"H2,Ne,Ar",
    "description":"moon data"
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
