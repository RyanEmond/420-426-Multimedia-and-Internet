const url = "https://api.spacexdata.com/v3/"; // The root of the SpaceX API
const info = "https://api.spacexdata.com/v3/info"
const theNext = "https://api.spacexdata.com/v3/launches/next"
const rockets = "https://api.spacexdata.com/v3/rockets";
const thePast = "https://api.spacexdata.com/v3/launches/past?limit=3"
fetch(url)
    .then(response => response.json())
    .then(data => {
        doStuff(data)
    })
    .catch(function(error) {
        console.log(error);
});
fetch(info)
    .then(response => response.json())
    .then(data => {
        fillInfo(data)
    })
    .catch(function(error) {
        console.log(error);
});
fetch(theNext)
    .then(response => response.json())
    .then(data => {
        doStuff(data)
    })
    .catch(function(error) {
        console.log(error);
});

fetch(thePast)
    .then(response => response.json())
    .then(data => {
        doStuff(data)
    })
    .catch(function(error) {
        console.log(error);
});

function doStuff(data) {
    console.log(data);
}

function fillInfo(data){
    document.getElementById("foundedBy").innerText += (" " +data.founder);
    document.getElementById("est").innerText += (" " +data.founded);
    document.getElementById("ceo").innerText += (" " +data.ceo);
    document.getElementById("cto").innerText += (" " +data.cto);
    if(data.founder == data.ceo && data.cto == data.cto){
        document.getElementById("extraNote").innerText = "Yes, "+data.founder+" does a lot for this company.";
    }
    document.getElementById("emps").innerText += (" " +data.employees);
    document.getElementById("sites").innerText = ("There is "+data.test_sites+" test site and "+data.launch_sites+" launch sites.");

}

function rocketHasBeenChosen(){
    fetch(rockets)
    .then(response => response.json())
    .then(data => {
        fillWithRocket(data)
    })
    .catch(function(error) {
        console.log(error);
});
    

}
function fillWithRocket(data){
    console.log(data);
    let rockets = document.getElementById("rocketSelector");
    let selected = rockets.options[rockets.selectedIndex].value;
    document.getElementById("desc").innerText = "\n"+(data[selected].description);
    document.getElementById("cost").innerText = "$"+(data[selected].cost_per_launch);
    if((data[selected].active) == true){
        document.getElementById("active").innerText = "Indeed it is!"
    }
    else{
        document.getElementById("active").innerText = "Not anymore..."
    }

}