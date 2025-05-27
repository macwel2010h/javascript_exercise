const library = [
  {
    title: "physics",
    author: "hibbler",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "biology",
    author: "ducket",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "chemistry",
    author: "musk",
    status: { own: true, reading: false, read: false },
  },
];
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
