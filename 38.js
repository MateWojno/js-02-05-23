const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        myFavoriteCats +=  `and ${cats[i]}.`;   
    } else if (i === cats.length - 2) {
        myFavoriteCats +=  `${cats[i]} `;
    } else {
        myFavoriteCats += `${cats[i]}, `;
    }
}
console.log(myFavoriteCats);