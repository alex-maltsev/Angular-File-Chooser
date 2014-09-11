angular.module('fileSystemModule', [])
    .factory('fileSystem', function() {
        var folders = []; // Array of folders

        // Create first folder, and add some files
        var folder = new Folder("Big ideas");
        folder.addItem(File.fromObject({ name: "image1", fileType: File.fileTypes.IMAGE,
            creator: 3333, timestamp: 1}));
        folder.addItem(File.fromObject({ name: "image2", fileType: File.fileTypes.IMAGE,
            creator: 2222, timestamp: 50}));
        folder.addItem(File.fromObject({ name: "description", fileType: File.fileTypes.DOC,
            creator: 1111, timestamp: 100}));
        folder.addItem(File.fromObject({ name: "business_model", fileType: File.fileTypes.EXCEL,
            creator: 2222, timestamp: 5}));

        folders.push(folder);

        // Create second folder, and add some files
        folder = new Folder("Legal");
        folder.addItem(File.fromObject({ name: "legal1", fileType: File.fileTypes.PDF,
            creator: 3333, timestamp: 10}));
        folder.addItem(File.fromObject({ name: "legal2", fileType: File.fileTypes.PDF,
            creator: 2222, timestamp: 5}));
        folder.addItem(File.fromObject({ name: "action_plan", fileType: File.fileTypes.DOC,
            creator: 1111, timestamp: 30}));

        folders.push(folder);

        // Create third folder, and add some files
        folder = new Folder("My notes");
        folder.addItem(File.fromObject({ name: "app_ideas", fileType: File.fileTypes.TEXT,
                                        creator: 2222, timestamp: 20}));
        folder.addItem(File.fromObject({ name: "shopping list", fileType: File.fileTypes.TEXT,
                                        creator: 2222, timestamp: 5}));
        folder.addItem(File.fromObject({ name: "Monday meeting", fileType: File.fileTypes.TEXT,
                                         creator: 1111, timestamp: 1}));
        folder.addItem(File.fromObject({ name: "Test", fileType: File.fileTypes.DOC,
                                        creator: 1111, timestamp: 10}));

        folders.push(folder);

        return {
            folders: folders
        };
    });
