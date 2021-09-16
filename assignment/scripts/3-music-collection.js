console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
  let object = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }//end object
  collection.push(object);
  return console.log("Object added to collection:", object);
}//end addToCollection

addToCollection("I and Love and You", "The Avett Brothers", 2009);
addToCollection("Wide Open Spaces", "The Chicks", 1998);
addToCollection("Rainbow", "Kesha", 2017);
addToCollection("Golden Hour", "Kacey Musgraves", 2018);
addToCollection("The Great Burrito Extorsion Case", "Bowling for Soup", 2006);
addToCollection("Dopamine", "B0RNS", 2015);

console.log("Collection:", collection);

function showCollection(array) {
  console.log("Number of items in array:", array.length);
  for (i = 0; i < array.length; i++) {
    console.log(array[i].title + " by " + array[i].artist + ", published in " + array[i].yearPublished);
  }//end for
}//end showCollection

showCollection(collection);

function findByArtist(artist) {
  let results = [];
  for (i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist) {
      results.push(collection[i]);
    }//end if
   }//end for
  return results;
}//end findByArtist

console.log(findByArtist("Kesha"));
