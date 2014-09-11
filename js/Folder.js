/**
 * Folder class. Inherits from Colection.
 */

function Folder(name) {
    // Call the parent constructor with type FILE
    Collection.call(this, name, Collection.types.FOLDER);
}


// A "static" method that creates a new Folder, initializes it
// with the content of the provided object, and returns it.
// Can be useful for creating instances of Folder based on JSON
// received from the API.
// The provided object is expected to have the following fields:
// id, name, creator, and timestamp.
Folder.fromObject = function(obj) {
    var folder = new Folder(obj.name);
    folder.initWithObject(obj);

    return folder;
}


Folder.prototype = Object.create(Collection.prototype);
Folder.prototype.constructor = Folder;


// Overload the Collection method
// Return true only if the item is of class File
Folder.prototype.isValidItem = function(item) {
    return item instanceof File;
};
