An example project using Angular.js
=====================

Demonstrates powers of Angular.js, such as dynamically altering sorting method for files and changing visibility of div's.

## Highlights 
Uses a hard-coded set of folders with, each containing a few files. Files can be assigned different types, which is reflected in the interface by different icons.

Files can be selected and deselected with a click. Selection is shown with a checkmark. Switching to a different folder doesn't destroy selection in the current folder. Changing the sorting method also preserves selection.

Clicking the 'Done' button shows an alert with the list of names of selected files and injects the selected files into $rootScope for use by any other interested controller.

Clicking 'Sorting by: ...' link makes the sorting method menu visible. Selecting an item in the menu changes the file sorting predicate, and causes files to immediately get sorted in the selected way.