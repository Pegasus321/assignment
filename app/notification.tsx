import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useData } from "../context/DataContext";
import { RemindersData } from "../interface/types";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList } from "react-native-gesture-handler";

export default function ModalScreen() {
  const { notificationData } = useData();

  const notifData: RemindersData = notificationData?.[0] as RemindersData;

  if (notificationData.length === 0) {
    return (
      <View
        style={{
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator
          color="#978CD0"
          style={{
            position: "absolute",
          }}
        />
      </View>
    );
  }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <FlatList
          data={notifData.reminders}
          renderItem={({ item }) => (
            <Text style={styles.textStyle}>{item}</Text>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: wp("90%"),
  },
  textStyle: {
    backgroundColor: "#DCD9EF",
    padding: wp("4%"),
    borderRadius: wp("4%"),
    marginVertical: wp("1%"),
  },
});
