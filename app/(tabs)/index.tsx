import { ActivityIndicator, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
import Attendance from "../../components/Attendance";

import { useData } from "../../context/DataContext";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Quick_links from "../../components/Quick_links";
import UpcomongEvents from "../../components/UpcomongEvents";
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from "../../firebase/firebaseConfig";

export default function Home() {
  const { userData } = useData();
  if (userData.length === 0) {
    // Data is still being fetched or is empty, you can render a loading state or return null
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.main}>
        <View style={styles.container}>
          <Attendance />
          <Quick_links />
          <UpcomongEvents />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    flex: 1,
  },
  container: {
    width: wp("90%"),
    flex: 1,
  },
});
