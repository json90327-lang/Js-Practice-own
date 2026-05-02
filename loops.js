let cars = [
{
    carname: "BMW",
    carprice: "12833689",
    model: "M8",
    color: "Black"
},
{
    carname: "Bukati",
    carprice: "12250000",
    model: "TYPE 13",
    color: "Orange"
}
];

let z = prompt("Enter the car price to get details");

for (let x of cars) {
    if (x.carname === z) {
        alert("carprice: " + x.carprice);
    }
}