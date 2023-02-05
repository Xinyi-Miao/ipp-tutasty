const dish1 = {
    id: 1,
    title: "Spaghetti with Tomato Sauce and Spinach",
    type: "vegetarian, bio",
    price: "0,80€/100g",
    averageRating: "4,5",
    numRatings: 221,
    date: new Date(Date.now()),
    counter: 1,
    url: "https://images.eatsmarter.de/sites/default/files/styles/max_size/public/nudeln-mit-tomaten-und-mozzarella-140757.jpg",
};
const dish2 = {
    id: 2,
    title: "German Pork Knuckle",
    type: "pork",
    price: "2€ + 0,80€/100g",
    averageRating: "3,3",
    numRatings: 33,
    date: new Date(Date.now()),
    //date: new Date('March 5, 2023 00:00:01'),
    counter: 2,
    url: "https://image.brigitte.de/10957566/t/0D/v3/w960/r1/-/schweinshaxe.jpg"
};
const dish3 = {
    id: 3,
    title: "Kaiserschmarn (",
    type: "vegetarian",
    price: "0,80€/100g",
    averageRating: "5,0",
    numRatings: 10,
    date: new Date('February 15, 2023 00:00:01'),
    counter: 3,
    url: "https://image.essen-und-trinken.de/13360654/t/Lg/v2/w1440/r1/-/kaiserschmarrn-adobestock-418222307.jpg",
};
const dish4 = {
    id: 4,
    title: "Green Thai Curry with Chicken",
    type: "chicken",
    price: "2€ + 0,80€/100g",
    averageRating: "4,3",
    numRatings: 56,
    date: new Date('February 15, 2023 00:00:01'),
    //date: new Date('March 5, 2023 00:00:01'),
    counter: 4,
    url: "https://cdn.asiastreetfood.com/uploads/Gruenes-curry-thai-rezept1.jpg?strip=all&lossy=1&quality=80&ssl=1"
};
const dish5 = {
    id: 5,
    title: "Indian Lentil Curry",
    type: "vegetarian",
    price: "0,80€/100g",
    averageRating: "3,8",
    numRatings: 80,
    date: new Date('February 15, 2023 00:00:01'),
    //date: new Date('March 5, 2023 00:00:01'),
    counter: 5,
    url: "https://www.recipetineats.com/wp-content/uploads/2020/04/Lentil-Curry_9-SQ.jpg"
};

function mockDishes () {
    return [dish1, dish2, dish3, dish4, dish5];
}

export default mockDishes