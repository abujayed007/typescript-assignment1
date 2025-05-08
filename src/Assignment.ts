type TInput = {
  input: string;
  toUpper?: boolean;
};

const formatString = (params: TInput): string => {
  const response =
    params.toUpper === false
      ? params.input.toLowerCase()
      : params.input.toUpperCase();
  return response;
};

const myInput: TInput = {
  input: "Shovon",
  toUpper: true,
};

formatString(myInput);

type TBooks = { title: string; rating: number };

const filterByRating = (books: TBooks[]): TBooks[] => {
  const topRatedBooks = books.filter((book) => book.rating >= 4);
  return topRatedBooks;
};

const books: TBooks[] = [
  { title: "Lal Shalu", rating: 4 },
  { title: "Lilaboti", rating: 3 },
  { title: "Amar Ami", rating: 5 },
  { title: "Harry Potter", rating: 5 },
];

filterByRating(books);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce(
    (acc: T[], currentValue: T[]) => acc.concat(currentValue),
    []
  );
}

concatenateArrays(["1", "2"], ["3", "5"], ["z"]);

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
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

const processValue = (value: string | number): number =>
  typeof value === "string" ? value.length : value * 2;

processValue("Banana");
processValue(20);

interface Product {
  name: string;
  price: number;
}

const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (products.length === 0) return null;
  return products.reduce((max, item) => (item.price > max.price ? item : max));
};

const products = [
  { name: "Pen", price: 100 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

getMostExpensiveProduct(products);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const getDayType = (day: Day): string => {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
};

getDayType(Day.Sunday);
getDayType(Day.Monday);
getDayType(Day.Friday);

const squareAsync = async (n: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
};
squareAsync(8).then(console.log);
squareAsync(-1).catch(console.error);
