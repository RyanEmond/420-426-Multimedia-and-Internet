const url = "https://api.spacexdata.com/v3/"; // The root of the SpaceX API
const theNext = "https://api.spacexdata.com/v3/launches/next"
const rockets = "https://api.spacexdata.com/v3/rockets";
const thePast = "https://api.spacexdata.com/v3/launches/past?limit=3"
fetch(url)
    .then(response => response.json())
    .then(data => {
        doStuff(data)
    })
    .catch(function(error) {
        // If there is any error you will catch them here.
        console.log(error);
});
fetch(theNext)
    .then(response => response.json())
    .then(data => {
        doStuff(data)
    })
    .catch(function(error) {
        // If there is any error you will catch them here.
        console.log(error);
});
fetch(rockets)
    .then(response => response.json())
    .then(data => {
        doStuff(data)
    })
    .catch(function(error) {
        // If there is any error you will catch them here.
        console.log(error);
});
fetch(thePast)
    .then(response => response.json())
    .then(data => {
        doStuff(data)
    })
    .catch(function(error) {
        // If there is any error you will catch them here.
        console.log(error);
});
function doStuff(data) {
    // If the request was successful then data will have everything you asked for.
    console.log(data);
}