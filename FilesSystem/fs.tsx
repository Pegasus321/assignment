import * as FileSystem from 'expo-file-system';
import { StorageAccessFramework } from 'expo-file-system';

const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
if (!permissions.granted) {
    return;
}

try {
    const assetFilePath = require('./assets/ExampleMarksheet.pdf');
    await StorageAccessFramework.createFileAsync(permissions.directoryUri,  , 'application/pdf')
    .then((r) => {
        console.log(r);
    })
    .catch((e) => {
        console.log(e);
    });
} catch((e) => {
    console.log(e);
});