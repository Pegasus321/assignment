import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
import Attendance from "../../components/Attendance";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Quick_links from "../../components/Quick_links";
import UpcomongEvents from "../../components/UpcomongEvents";

export default function TabOneScreen() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Attendance />
          <Quick_links />
          <UpcomongEvents />
        </ScrollView>
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
    width: wp("90%"),
    flex: 1,
  },
});
