/**
 * File class. Inherits from Resource.
 */

function File(name, fileType) {
    // Call the parent constructor with type FILE
    Resource.call(this, Resource.types.FILE);

    // In case that provided file type is invalid
    // throw an exception
    if(!File.isValidFileType(fileType))
        throw "Invalid file type!";

    this.name = name;
    this.fileType = fileType;
}


// An enum of valid file types
File.fileTypes = {
    TEXT: 0,
    IMAGE: 1,
    EXCEL: 2,
    DOC: 3,
    PDF: 4
};


// A "static" method that returns 'true' if the given file type
// is among the valid file types (File.fileTypes).
File.isValidFileType = function(type) {
    return isObjectInAssociativeArray(type, File.fileTypes);
}


// A "static" method that creates a new File, initializes it
// with the content of the provided object, and returns it.
// Can be useful for creating instances of File based on JSON
// received from the API.
// The provided object is expected to have the following fields:
// id, name, fileType, creator, and timestamp.
File.fromObject = function(obj) {
    var file = new File(obj.name, obj.fileType);
    file.initWithObject(obj);

    return file;
}


File.prototype = Object.create(Resource.prototype);
File.prototype.constructor = File;


// Returns the path to the icon image corresponding
// to the file type of this File object
File.prototype.iconSource = function() {
   switch(this.fileType) {
       case File.fileTypes.TEXT:
           return "img/txt_icon.png";
       case File.fileTypes.IMAGE:
           return "img/jpg_icon.png";
       case File.fileTypes.EXCEL:
           return "img/excel_icon.png";
       case File.fileTypes.DOC:
           return "img/doc_icon.png";
       case File.fileTypes.PDF:
           return "img/pdf_icon.png";
       default:
           return "";
   }
}