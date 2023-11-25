//Object handling

let student;
student={id :1, name:'isuru',age:22,college:'UoBolton'}
student="Isuru";


let studentObject: {
    id:number;
    name:string;
    age:number;
    college:string;
};
studentObject={id :1, name:'isuru',age:22,college:'UoBolton'}



//-------------------------------------Distance Calculator--------------------------------------------

function calcDistance(location1:{lon:number, lat:number},location2:{lon:number, lat:number}):number{
    let lon1 =location1.lon;
    let lat1 =location1.lat;
    let lon2 =location2.lon;
    let lat2 =location2.lat;

    // ---- calc distance  ----
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Radius of the Earth in kilometers (mean value)
    const R = 6371;

    // Calculate the distance
    let distance = R * c;
// ---- calc distance  ----

    return distance;
}

let location1 = {lon : 0.0 , lat : 0.0}
let location2 = {lon : 0.0 , lat : 0.0}

let distance:number=calcDistance(location1,location2);
console.log("Distance "+distance.toFixed(2));