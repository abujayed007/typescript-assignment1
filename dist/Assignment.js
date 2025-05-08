"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const formatString = (params) => {
    const response = params.toUpper === false
        ? params.input.toLowerCase()
        : params.input.toUpperCase();
    return response;
};
const myInput = {
    input: "Shovon",
    toUpper: true,
};
formatString(myInput);
const filterByRating = (books) => {
    const topRatedBooks = books.filter((book) => book.rating >= 4);
    return topRatedBooks;
};
const books = [
    { title: "Lal Shalu", rating: 4 },
    { title: "Lilaboti", rating: 3 },
    { title: "Amar Ami", rating: 5 },
    { title: "Harry Potter", rating: 5 },
];
filterByRating(books);
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, currentValue) => acc.concat(currentValue), []);
}
concatenateArrays(["1", "2"], ["3", "5"], ["z"]);
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`Model : ${this.model}`);
    }
}
const myCar = new Car("Audi", 2024, "Audi4");
myCar.getInfo();
myCar.getModel();
const processValue = (value) => typeof value === "string" ? value.length : value * 2;
processValue("Banana");
processValue(20);
const getMostExpensiveProduct = (products) => {
    if (products.length === 0)
        return null;
    return products.reduce((max, item) => (item.price > max.price ? item : max));
};
const products = [
    { name: "Pen", price: 100 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
getMostExpensiveProduct(products);
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
const getDayType = (day) => {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
};
getDayType(Day.Sunday);
getDayType(Day.Monday);
getDayType(Day.Friday);
const squareAsync = (n) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            else {
                resolve(n * n);
            }
        }, 1000);
    });
});
squareAsync(8).then(console.log);
squareAsync(-1).catch(console.error);
