const newFolderName = function (folders) {
  const count = folders.length + 1
  console.log('New Folder (' + count + ')')
}

newFolderName(['New Folder', 'New Folder (2)', 'New folder (3)'])

// The console log comes out to "New Folder (4)"
