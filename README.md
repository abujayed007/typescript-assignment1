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

**How does TypeScript help in improving code quality and project maintainability?**

As developers, we all want to write code that works well today, but also stays easy to maintain tomorrow. That’s not always easy with JavaScript. While it’s flexible and powerful, it doesn’t tell you when you make simple mistakes—until your app breaks.

That’s where TypeScript steps in.

TypeScript adds types to JavaScript, and that small change makes a big difference. Here’s how it helps you write better, cleaner, and more maintainable code.

**1. Types Act Like a Safety Net**
Ever passed the wrong kind of data to a function without realizing it? JavaScript won’t complain until it's too late. TypeScript catches those mistakes right away.

function greet(name: string) {
console.log("Hello, " + name);
}

greet(42); // ❌ Type error

**2. Clear Intentions with Type Declarations**
When you use TypeScript, you’re making your code self-explanatory. Anyone reading your code knows exactly what’s expected—no guessing involved.

type User = {
id: number;
name: string;
email: string;
};

function sendEmail(user: User) {
// clear and predictable
}

**3. Great for Teamwork**
On a team, people work on different parts of a project. If one person changes a function, others need to know. TypeScript will instantly show where things break, making collaboration easier and safer.

You don’t need to worry if someone else changed the shape of an object—TypeScript will tell you.

**4. Better Tools and Developer Experience**
With TypeScript, your code editor becomes a super tool. You get smart suggestions, better auto-completion, and warnings as you type.

It’s not just about catching errors—it’s about helping you code faster and with more confidence.

**5. Makes Big Projects Manageable**
As your app grows, it becomes harder to manage. With plain JavaScript, things can get messy. TypeScript keeps your code organized with interfaces, type aliases, enums, and more.

It helps you structure your app like a well-oiled machine.
