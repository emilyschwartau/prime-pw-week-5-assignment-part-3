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
addToCollection("Fly", "The Chicks", 1999);
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

console.log("Test artist in collection - should add object to results array", findByArtist("Kesha"));
console.log("Test artist in collection more than once - should add both objects to results array", findByArtist("The Chicks"));
console.log("Test artist NOT in collection - should return empty array", findByArtist("The Weeknd"));

function search(title, artist, yearPublished) {
  //define new array for results
  let resultsArray = [];
  //make function to add objects to new array
  function addToResultsArray(title, artist, yearPublished) {
    let newObject = {
      title: title,
      artist: artist,
      yearPublished: yearPublished
    }//end newObject
    resultsArray.push(newObject);
    return(newObject);
  }//end addToResultsArray
  //loop through collection; if artist & year match collection array entries: add object to new array
  //if input does not match collection array entries: return empty array
  //if no input: return all objects in collection array
  for (i = 0; i < collection.length; i++) {
    if (artist === collection[i].artist) {
      addToResultsArray(collection[i].title, collection[i].artist, collection[i].yearPublished);
    }//end if
    else if (title === collection[i].title) {
      addToResultsArray(collection[i].title, collection[i].artist, collection[i].yearPublished);
    }//end else if
    else if (yearPublished === collection[i].yearPublished) {
      addToResultsArray(collection[i].title, collection[i].artist, collection[i].yearPublished);
    }//end else if
   else if (artist === undefined && yearPublished === undefined && title === undefined) {
      console.log(collection[i]);
    }//end else if
    else if (artist === "" && yearPublished === undefined && title === "") {
      console.log(collection[i]);
    }//end else if
  }//end for
  return resultsArray;
}//end search

console.log("Test - should return album details in results array", search("","The Chicks", undefined));
console.log("Test - should return an empty results array", search("", "Ray Charles", 1957));
console.log("Test - should return all objects in collection array, and return empty results Array", search());
