import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Attendance = () => {
  return (
    <View>
      <View style={styles.title}>
        <Text style={{ fontSize: wp("3.5%") }}>Welcome back </Text>
        <Text style={styles.name}>name_prop</Text>
      </View>
      <View style={styles.day}>
        <Text style={{ fontSize: wp("3.5%") }}>Attendance</Text>
        <Text style={{ fontSize: wp("3.5%") }}>current month and year</Text>
      </View>
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  title: {
    marginTop: hp("3%"),
    marginBottom: hp("2%"),
  },
  name: {
    fontSize: wp("8%"),
  },
  day: {
    height: hp("18%"),
    backgroundColor: "#978CD0",
    borderRadius: hp("2.5%"),
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
