// JavaScript Object Notation (JSON) 

let company = `[
    {
        "name": "Google",
        "numberOfEmployee": 120000,
        "location": "USA",
        "ceo":"Sundar Pichai" 
    },

    {
        "name": "Microsfot",
        "numberOfEmployee": 20000,
        "location":"USA",
        "ceo": "Bill Gates"
    }
]`

// when we used back tick then it will return only a string but when we used JSON.parse it will convert it into a json object
console.log(JSON.parse(company))


// -----------------------------------------------

    const superHeroes = {
      "squadName" : "Super hero squad",
      "homeTown" : "Metro City",
      "formed" : 2016,
      "secretBase" : "Super tower",
      "active" : true,
      "members" : [
        {
          "name" : "Molecule Man",
          "age" : 29,
          "secretIdentity" : "Dan Jukes",
          "powers" : [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
          ]
        },
        {
          "name" : "Madame Uppercut",
          "age" : 39,
          "secretIdentity" : "Jane Wilson",
          "powers" : [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
          ]
        },
        {
          "name" : "Eternal Flame",
          "age" : 1000000,
          "secretIdentity" : "Unknown",
          "powers" : [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
          ]
        }
      ]
    }

    // console.log(superHeroes["members"][1]["powers"][2]);
    // console.log(superHeroes["members"][1]["age"])


    // accesing the json file using fetch 

    function fetcingData() {
        fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
        .then(async (response) => {
            const json = await response.json();
            console.log(json)
        })
    }

    fetcingData()





  //   async function name() {
  //     try {
  //         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //         const json = await response.json();
  //         console.log(json);
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //     }
  // }
  
  // name()

  async function fetchingData(){
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json)
    } catch (error) {
      console.log('Error while fetching the data', error)
    }
  }

  fetchingData();


  