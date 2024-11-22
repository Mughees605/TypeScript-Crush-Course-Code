type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Moheed",
        lastName: "Siddiqui"
    },
    name: "My Best Book"
}

console.log(`Book: ${myBook.author.firstName}`)