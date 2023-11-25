
let location1LatInputElement = document.getElementById('lat1') as HTMLInputElement;
let location1LogInputElement = document.getElementById('lon1') as HTMLInputElement;
let location2LatInputElement = document.getElementById('lat2') as HTMLInputElement;
let location2LogInputElement = document.getElementById('log2') as HTMLInputElement;

let btn_element=document.getElementById('btn');

let result_element =document.getElementById('result');


function calcDistance(location1:{lon:number, lat:number},location2:{lon:number, lat:number}):number{
    let lon1 =location1.lon;
    let lat1 =location1.lat;
    let lon2 =location2.lon;
    let lat2 =location2.lat;

    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const R = 6371;

    let distance = R * c;

    return distance;
}

let location1 = {lon : 0.0 , lat : 0.0}
let location2 = {lon : 0.0 , lat : 0.0}
//
// let distance:number=calcDistance(location1,location2);
// console.log("Distance "+distance.toFixed(2));


btn_element.addEventListener('click',() =>{
        let lon1 = location1LogInputElement.value;
        let lat1 = location1LatInputElement.value;
        let lon2 = location2LogInputElement.value;
        let lat2 = location2LatInputElement.value;

        let location1 = {lon : +lon1 , lat : +lat1};
        let location2 = {lon : +lon2 , lat : +lat2};

       let distance = calcDistance(location1,location2);

        result_element.innerText =`${distance.toFixed(2)}`;
    }
)