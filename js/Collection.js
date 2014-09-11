/**
 * Base collection class
 */

function Collection(name, type) {
    // In case that provided resource type is invalid
    // throw an exception
    if(!Collection.isValidType(type))
        throw "Invalid collection type!";

    this.name = name; // Collection name
    this.type = type; // Collection type, as declared in 'types' below

    this.id = ""; // Unique ID, presumably needed
    this.creator = undefined; // ID of the creator of the collection
    this.timestamp = undefined; // Timestamp for when the collection was created

    this.items = []; // Array of items within the collection
}


// An enum of valid collection types
Collection.types = {
    FOLDER: 0,
    TIMELINE: 1,
    PHOTO_GALLERY: 2
};


// A "static" method that returns 'true' if the given collection type
// is among the valid collection types (Collection.types).
Collection.isValidType = function(type) {
    return isObjectInAssociativeArray(type, Collection.types);
}


// Method that can be called to verify that the particular item
// is compatible with this collection.
// Meant to be overloaded by subclasses.
Collection.prototype.isValidItem = function(item) {
    return true;
}


// Add the given item to the collection,
// first making sure that it is compatible
Collection.prototype.addItem = function(item) {
    if(this.isValidItem(item))
        this.items.push(item);
    else
        throw "Resource type is not compatible with the collection type";
}


// Returns the number of items currently in the collection
Collection.prototype.getItemCount = function() {
    return this.items.length;
}


// A method that initializes a collection with the content of the provided object.
// Can be useful for creating instances of collections based on JSON
// received from the API.
// The provided object is expected to have the following fields:
// id, name, creator, and timestamp.
Collection.prototype.initWithObject = function(obj) {
    this.name = obj.name;
    this.id = obj.id;
    this.creator = obj.creator;
    this.timestamp = obj.timestamp;
}