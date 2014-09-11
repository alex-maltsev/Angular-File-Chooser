
function isObjectInAssociativeArray(object, array) {
    var found = false;

    for (var key in array)
        if(array[key] === object) {
            found = true;
            break;
        }

    return found;
}