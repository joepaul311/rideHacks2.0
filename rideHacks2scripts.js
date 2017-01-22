var dB = firebase.database();    // database used in FireBase
var markers; //keeps track of all markers currently on map


//loads the users events they are looking for/willing to drive.
//returns JSON with the data
function loadUserEvents() {
    var obj = getSnapshot()["usersList"];
    for(var i in obj) {
        if(i["userName"] == USERNAME GOES HERE !!!!) {
            return i;
        }
    }
}

//gets snapshot of the database
function getSnapshot() {
    return dB.ref("").once('value').then(function(snapshot)){
        return snapshot.val();   
    }
}


//loads all of the events that are available
//returns JSON with the data 
function loadAllEvents() {
    return getSnapshot()["newEvents"];
}

//loads all of the events with a given category
//returns JSON with the data of the whole category 
function loadEventsByCategory(category) {
    var obj = getSnapshot();

    //go through each organization, and look for a match
    for(var i in obj["organizations"]) {
        if(i["name"] == category) {
            return i;            
        }
    }
    return "ERROR: NO CATEGORY OF GIVEN NAME FOUND";
}

//gets the event with given name
//returns JSON with the data
function loadSingleEvent(name) {
    var obj = loadAllEvents();

    //go through each event and look for a match
    for(var i in obj) {
        if(i["Event"] == name) {
            return i;
        }
    }
}
