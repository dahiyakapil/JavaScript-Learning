console.log("The api is getting to be fetched");
async function fetchApiData() {
  try {
    console.log("Before fetching");
    const data = await fetch("https://api.restful-api.dev/objects"); // api is placed in another area it will be time taking process
    const json = await data.json();
    console.log("After fetching");
    console.log(
      "id -->",
      json[0].id + " " + "name -->",
      json[0].name,
      "data color-->",
      json[0].data.capacity,
      "data capacity-->",
      json[0].data.color
    );
  } catch (error) {
    console.log("Error in fetching the data");
  }
}
fetchApiData();

