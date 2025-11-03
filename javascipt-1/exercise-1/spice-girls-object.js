/*
Exercise

From the spiceGirls object, how can we retrieve:

"Girl Power"
The object representing Ginger Spice
"Spiceworld"
"Victoria"
*/

const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];

const spiceGirls = {
    albums: ["Spice", "Spiceworld", "Forever"],
    motto: "Girl Power",
    members: spices
};

// 1. RETRIEVE GIRL POWER
console.log(spiceGirls.motto)

// 2. RETRIEVE OBJECT REPRESENTING GINGER SPICE
console.log(spiceGirls.members[1])

// 3. RETRIEVE SPICE WORLD
console.log(spiceGirls.albums[1])

// 4. RETRIEVE VICTORIA
console.log(spices[4].name)


let players = [
    {symbol: 'X', name: 'Iyzu'},
    {symbol: 'O', name: 'Ivy'}
]