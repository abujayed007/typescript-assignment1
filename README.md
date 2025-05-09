## What are some differences between interfaces and types in TypeScript?

Interface and types boths are define shape of object but some of case they play differnt roles.Let's today we wil see some differents about interface and type in typescript

**Declaration Merging :**
Interface allow us declaration merging thats mean we can decalre one or more interface with same name but we can't do that with type

**example** :

interface Book {
title: string;
}

interface Book {
author: string;
}

// Merged into one!
const b: Book = {
title: "Atomic Habits",
author: "James Clear",
};

type Book = {
title: string;
};

type Book = {
author: string; // ❌ Error: Duplicate
};

**Type can declare Union , Mix and Match and Tuples**
When we need to do union mix and match and tuples types support this but interface can't do that.

**Example**
type Status = "loading" | "success" | "error";

type Base = { id: number };
type Product = Base & { name: string };

type Point = [number, number];

**Both work with functions and classes**

type Greet = (name: string) => string;

interface Greeter {
(name: string): string;
}

interface Animal {
makeSound(): void;
}

class Dog implements Animal {
makeSound() {
console.log("Woof!");
}
}
