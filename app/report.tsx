import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import * as FileSystem from "expo-file-system";

const PdfDownloadButton: React.FC = () => {
  const date = new Date();

  // Assuming 'ExampleMarksheet.pdf' is in the 'assets' folder
  const assetUri = FileSystem.documentDirectory + "ExampleMarksheet.pdf";

  let options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path:
        FileSystem.documentDirectory +
        "/me_" +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        ".pdf",
      description: "Downloading PDF.",
    },
  };

  return (
    <View>
      <TouchableOpacity
        onPress={async () => {
          try {
            // Copy the file from the assets folder to the cache directory
            await FileSystem.copyAsync({
              from: assetUri,
              to: options.addAndroidDownloads.path,
            });

            // Now, you can use fetch to download the copied file
            const { uri } = await FileSystem.getInfoAsync(
              options.addAndroidDownloads.path
            );
            if (uri) {
              console.log("File copied successfully:", uri);

              // Use the fetched URI to perform further actions, if needed
              // For example, you can open the downloaded file
              // using Expo File System's openAsync function
              // await FileSystem.openAsync(uri);
            } else {
              console.error("Error getting copied file URI");
            }
          } catch (error) {
            console.error("Error copying file:", error);
          }
        }}
      >
        <Text>Download PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PdfDownloadButton;
