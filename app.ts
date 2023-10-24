// ZADANIE 1
// Klasa opisuj¹ca punkt (x, y), druga czêœæ zadania
export class Point {
    constructor(public x: number, public y: number) { } //kontruktor

    // Metoda move, zmieniaj¹ca pozycjê punktu na nowe wspó³rzêdne, na zasadzie mapowania
    move(newX: number, newY: number) {
        this.x = newX;
        this.y = newY;
    }
}

// Klasa opisuj¹ca prostok¹t, pierwsza czêœæ zadania
export class Rectangle {
    constructor(public topLeft: Point, public topRight: Point, public bottomLeft: Point, public bottomRight: Point) { }

    // Metoda move, zmieniaj¹ca pozycjê prostok¹ta na nowe wspó³rzêdne
    move(newTopLeftX: number, newTopLeftY: number) {
        const width = this.topRight.x - this.topLeft.x;
        const height = this.bottomLeft.y - this.topLeft.y;

        this.topLeft.move(newTopLeftX, newTopLeftY);
        this.topRight.move(newTopLeftX + width, newTopLeftY);
        this.bottomLeft.move(newTopLeftX, newTopLeftY + height);
        this.bottomRight.move(newTopLeftX + width, newTopLeftY + height);
    }

    // Metoda getArea, obliczaj¹ca pole prostok¹ta
    getArea() {
        const width = this.topRight.x - this.topLeft.x;
        const height = this.bottomLeft.y - this.topLeft.y;
        return width * height;
    }
}

// ZADANIE 2

// Interfejs Book
interface Book { title: string; author: string; publicationYear: number; }

// Funkcja zwracaj¹ca sumê lat publikacji wszystkich ksi¹¿ek
function sumPublicationYears(books: Book[]): number {
    // Wykorzystujemy metoda reduce do obliczenia sumy lat publikacji
    const totalYears = books.reduce((sum, book) => sum + book.publicationYear, 0);
    return totalYears;
}
const books: Book[] = [
    { title: "Book 1", author: "Author 1", publicationYear: 2000 },
    { title: "Book 2", author: "Author 2", publicationYear: 2010 },
    { title: "Book 3", author: "Author 3", publicationYear: 1995 },
];

// Wywo³anie funkcji i wyœwietlenie wyniku
const totalPublicationYears = sumPublicationYears(books);
console.log("Suma lat publikacji wszystkich ksi¹¿ek: " + totalPublicationYears);


// Zadanie 3
function mergeArrays<T>(array1: T[], array2: T[]): T[] {
    return [...array1, ...array2];
}

// Example of using the function
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];

const result: number[] = mergeArrays(array1, array2);
console.log(result); // Will display [1, 2, 3, 4, 5, 6]


// Zadanie 4
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Some generic animal sound";
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "Woof! Woof!";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow!";
    }
}

// Example usage:
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

console.log(`${dog.name} makes the sound: ${dog.makeSound()}`);
console.log(`${cat.name} makes the sound: ${cat.makeSound()}`);
