/**
 * Base resource class
 */

function Resource(type) {
    // In case that provided resource type is invalid
    // throw an exception
    if(!Resource.isValidType(type))
        throw "Invalid resource type!";

    this.name = ""; // Resource name
    this.type = type; // Resource type, as declared in 'types' below

    this.id = ""; // Unique ID, presumably needed
    this.creator = undefined; // ID of the creator of the resource
    this.timestamp = undefined; // Timestamp for when the resource was created (or edited?)
}

// An enum of valid resource types
Resource.types = {
    FILE: 0,
    COMMENT: 1,
    SMS: 2
};

// A "static" method that returns 'true' if the given resource type
// is among the valid resource types (Resource.types).
Resource.isValidType = function(type) {
    return isObjectInAssociativeArray(type, Resource.types);
}


// A method that initializes a resource with the content of the provided object.
// Can be useful for creating instances of resources based on JSON
// received from the API.
// The provided object is expected to have the following fields:
// id, name, creator, and timestamp.
Resource.prototype.initWithObject = function(obj) {
    this.name = obj.name;
    this.id = obj.id;
    this.creator = obj.creator;
    this.timestamp = obj.timestamp;
}