const url = "https://api.spacexdata.com/v3/"; // The root of the SpaceX API
const info = "https://api.spacexdata.com/v3/info"
const theNext = "https://api.spacexdata.com/v3/launches/next"
const rockets = "https://api.spacexdata.com/v3/rockets";
const thePast = "https://api.spacexdata.com/v3/launches/past?limit=3"
let countDownDate;
let tableCreated = false;

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
        countDownDate = new Date(data.launch_date_local).getTime();
        NextLaunchData(data);
    })
    .catch(function(error) {
        console.log(error);
});

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
    let rockets = document.getElementById("rocketSelector");
    let selected = rockets.options[rockets.selectedIndex].value;
    document.getElementById("desc").innerText = "\n"+(data[selected].description);
    document.getElementById("cost").innerText = "$"+(data[selected].cost_per_launch);
    if((data[selected].active) == true){
        document.getElementById("active").innerText = "Indeed it is!"
    }
    else{
        document.getElementById("active").innerText = "No.."
    }
    document.getElementById("mass").innerText = (data[selected].mass['kg'])+" kg";
    theImg = document.getElementById("theImage");
    theImg.src = data[selected].flickr_images[1];
    theImg.height = 200;
    theImg.width = 200;

    
}

function showPastRockets(){
    if(tableCreated){
        document.getElementById("theTable").remove();
    }

    let num = document.getElementById("numLaunches").value;
    let pastURL = "https://api.spacexdata.com/v3/launches/past?limit=" + num;

    let tble = document.createElement('table');
    tble.id = "theTable";
    let tbdy = document.createElement('tbody');

    
    fetch(pastURL)
    .then(response => response.json())
    .then(data => {
        let tr = document.createElement('tr');

        let th1 = document.createElement('th');
        th1.appendChild(document.createTextNode("Mission Name"));
        tr.appendChild(th1);

        let th2 = document.createElement('th');
        th2.appendChild(document.createTextNode("Launch Date"));
        tr.appendChild(th2);

        let th3 = document.createElement('th');
        th3.appendChild(document.createTextNode("Rocket Name"));
        tr.appendChild(th3);

        tbdy.appendChild(tr);
        for(let i = 0; i < num; i++){
            let tr = document.createElement('tr');

            let td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(data[i]['mission_name']));
            tr.appendChild(td1);
            
            let td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(data[i]['launch_date_utc']));
            tr.appendChild(td2);

            let td3 = document.createElement('td');
            td3.appendChild(document.createTextNode(data[i]['rocket']['rocket_name']));
            tr.appendChild(td3);

            tbdy.appendChild(tr);
        }
        document.getElementById("previous").appendChild(tble);
        document.getElementById("theTable").appendChild(tbdy);
        tableCreated = true;
    })
    .catch(function(error) {
        console.log(error);
});
    
        
    
    
}

//"countdown" code taken from: https://www.w3schools.com/howto/howto_js_countdown.asp
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);

  function NextLaunchData(data){
    let nextName = document.createElement("SPAN");
    document.getElementById("nextName").appendChild(nextName);
    nextName.innerHTML = data['rocket']['rocket_name'];

    let nextMission = document.createElement("SPAN");
    document.getElementById("nextMission").appendChild(nextMission);
    nextMission.innerHTML = data['mission_name'];

    let nextLocation = document.createElement("SPAN");
    document.getElementById("nextLocation").appendChild(nextLocation);
    nextLocation.innerHTML = data['launch_site']['site_name_long'];
  }
