import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { UserData } from "../interface/types";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useData } from "../context/DataContext";

const Attendance = () => {
  const { userData } = useData();
  const firstUserData: UserData = userData?.[0] as UserData;
  console.log(userData[0]);
  //  const firstUserData: UserData | undefined = userData?.[0] as UserData;

  const today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();

  return (
    <View>
      <View style={styles.title}>
        <Text style={{ fontSize: wp("3.5%") }}>Welcome back </Text>
        <Text style={styles.name}>{firstUserData.name}</Text>
      </View>
      <View style={styles.day}>
        <View>
          <Text style={{ fontSize: wp("3.5%"), color: "white" }}>
            Attendance
          </Text>
          <Text style={{ fontSize: wp("3.5%"), color: "white" }}>
            {month} {year}
          </Text>
        </View>
        <View>
          <Text style={{ color: "white" }}>round</Text>
        </View>
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
