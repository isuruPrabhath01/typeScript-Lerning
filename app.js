//Object handling
var student;
student = { id: 1, name: 'isuru', age: 22, college: 'UoBolton' };
student = "Isuru";
var studentObject;
studentObject = { id: 1, name: 'isuru', age: 22, college: 'UoBolton' };
//-------------------------------------Distance Calculator--------------------------------------------
function calcDistance(location1, location2) {
    var lon1 = location1.lon;
    var lat1 = location1.lat;
    var lon2 = location2.lon;
    var lat2 = location2.lat;
    return 123456.98234;
}
var location1 = { lon: 0.0, lat: 0.0 };
var location2 = { lon: 0.0, lat: 0.0 };
var distance = calcDistance(location1, location2);
console.log("Distance " + distance.toFixed(2));
