angular.module('what', ['fileSystemModule'])
    .controller('whatController', function(fileSystem, $scope, $rootScope) {
        // Set the folders array to the array supplied by the 'fileSystem' factory
        this.folders = fileSystem.folders;

        this.files = []; // Array of currently listed files
        this.selectedFiles = []; // Array of selected files

        // All available sorting types, each one including the name of the sort,
        // the file property name on which to sort (predicate)
        this.sortTypes = [
            { name: "Most recent", predicate: "-timestamp" },
            { name: "Title", predicate: "name" },
            { name: "File type", predicate: "fileType" },
            { name: "Date created", predicate: "timestamp" },
            { name: "Creator", predicate: "creator" }
        ];

        // Currently active sorting type
        $scope.curSort = this.sortTypes[1];

        // Variable used to show/hide the sorting type menu
        $scope.sorterVisible = false;


        // Fills the files array with the content of the given folder
        this.listFiles = function(folder) {
            // Clear the listed files array
            this.files = [];

            // Refill it with the files from the provided folder
            for(var i=0; i<folder.items.length; i++) {
                var file = folder.items[i];
                this.files.push(file);
            }
        };


        // Handle the file selection
        // Called when the user clicks a file icon
        this.selectFile = function(file) {
            // For ease of displaying checkmarks in the UI
            // I decorate the file objects with an additional
            // field 'selected'. When the file is not selected
            // that field is removed.

            if(!file.selected) {  // File is not currently selected
                // Mark file object as selected
                file.selected = true;
                // Add the file into the array of selected files,
                // provided it isn't already there
                if(this.selectedFiles.indexOf(file) == -1)
                    this.selectedFiles.push(file);
            }
             else {  // File is currently selected
                // Unmark file object as selected
                file.selected = undefined;
                // Remove the file object from the array of selected files
                // provided it is indeed there
                var index = this.selectedFiles.indexOf(file);
                if(index != -1)
                    this.selectedFiles.splice(index, 1);
            }
        };


        // Function called when the user presses the "Done" button.
        // Gives an alert with the list of names of the selected files,
        // injects the selected files into $rootScope.selectedFiles
        // to make the selection info available to other controllers,
        // cleans up the 'files' array, and removes 'selected' fields.
        this.selectionDone = function() {
            $rootScope.selectedFiles = [];
            var filesList = "";

            while(this.selectedFiles.length > 0) {
                var file = this.selectedFiles.shift();
                file.selected = undefined;
                filesList +=  "\n" + file.name;
                $rootScope.selectedFiles.push(file);
            }

            alert("Selected files:" + filesList);
        };


        // Function called when the user presses the "Cancel" button.
        // Cleans up the 'files' array, and removes 'selected' fields.
        this.selectionCancel = function() {
            while(this.selectedFiles.length > 0) {
                var file = this.selectedFiles.shift();
                file.selected = undefined;
            }
        };


        // Function called when a sort type is selected by the user.
        // Simply sets the current sort type to the provided type.
        this.selectSortType = function(sorter) {
            $scope.curSort = sorter;
            $scope.sorterVisible = false;
        }
    });
