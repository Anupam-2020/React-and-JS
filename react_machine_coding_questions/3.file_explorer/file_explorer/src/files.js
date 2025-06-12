export const explorer = [
    {
        id: 1,
        name: 'Root Folder 1',
        type: "folder",
        add: false,
        items: [
            {
                id: 2,
                name: 'File 1',
                type: 'file',
                items: null,
                add: false,
            },
            {
                id: 4,
                name: 'Folder 2',
                type: 'folder',
                add: false,
                items: [
                    {
                        id: 5,
                        name: 'Folder 3',
                        type: 'folder',
                        add: false,
                        items: [
                            {
                                id: 7,
                                name: 'File 4',
                                type: 'file',
                                items: null,
                                add: false,
                            }
                        ]
                    },
                    {
                        id: 6,
                        name: 'File 3',
                        type: 'file',
                        items: null,
                        add: false,
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'file 2',
        type: 'file',
        items: null,
        add: false,
    }
];