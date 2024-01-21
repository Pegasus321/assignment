import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import * as DocumentPicker from "expo-document-picker";

interface CustomCopyOptions {
  from: string;
  to: string;
}

const PdfDownloadButton: React.FC = () => {
  const handleDownload = async () => {
    try {
      // Get the URI of the PDF file from the assets folder
      const asset = Asset.fromModule(require("../assets/ExampleMarksheet.pdf"));
      await asset.downloadAsync();

      const assetUri = asset.localUri || asset.uri;

      // Create a destination URI in the app's document directory
      const destinationUri = `${FileSystem.documentDirectory}Download/ExampleMarksheet.pdf`;

      // Specify the types for the options object
      const options: CustomCopyOptions = {
        from: assetUri.toString(),
        to: destinationUri.toString(),
      };

      // Copy the file from the assets folder to the destination directory
      await FileSystem.copyAsync(options);

      console.log("File downloaded to:", destinationUri);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleDownload}>
        <Text>Download PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PdfDownloadButton;
