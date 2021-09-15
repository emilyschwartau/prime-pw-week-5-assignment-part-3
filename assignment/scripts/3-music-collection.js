console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
  let newObject = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }//end newObject
  collection.push(newObject);
  return console.log("Object added to collection:", newObject);
}//end addToCollection

addToCollection("I and Love and You", "The Avett Brothers", 2009);
addToCollection("Wide Open Spaces", "The Chicks", 1998);
addToCollection("Rainbow", "Kesha", 2017);
addToCollection("Golden Hour", "Kacey Musgraves", 2018);
addToCollection("The Great Burrito Extorsion Case", "Bowling for Soup", 2006);
addToCollection("Dopamine", "B0RNS", 2015);

console.log("Collection:", collection);

function showCollection(array[i]) {
  console.log("Number of items in array:", array.length);
}
