import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { UserData } from "../interface/types";

import { Svg, Path } from "react-native-svg";

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
        <View style={{ gap: wp("2%") }}>
          <Text style={{ fontSize: wp("3.5%"), color: "white" }}>
            Attendance
          </Text>
          <Text style={{ fontSize: wp("5%"), color: "white" }}>
            {month} {year}
          </Text>
        </View>
        <View>
          <Svg
            width={hp("16%")}
            height={hp("16%")}
            viewBox="0 0 120 120"
            fill="none"
          >
            <Path
              d="M60 6C67.0914 6 74.1133 7.39675 80.6649 10.1105C87.2165 12.8243 93.1694 16.8019 98.1838 21.8162C103.198 26.8306 107.176 32.7835 109.889 39.3351C112.603 45.8867 114 52.9086 114 60C114 67.0914 112.603 74.1133 109.889 80.6649C107.176 87.2165 103.198 93.1694 98.1838 98.1838C93.1694 103.198 87.2165 107.176 80.6649 109.89C74.1133 112.603 67.0914 114 60 114C52.9086 114 45.8867 112.603 39.3351 109.889C32.7835 107.176 26.8306 103.198 21.8162 98.1838C16.8019 93.1694 12.8242 87.2165 10.1105 80.6649C7.39674 74.1133 6 67.0914 6 60C6 52.9086 7.39676 45.8866 10.1105 39.3351C12.8243 32.7835 16.8019 26.8306 21.8163 21.8162C26.8306 16.8019 32.7835 12.8242 39.3351 10.1105C45.8867 7.39674 52.9087 6 60 6L60 6Z"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M60 6C72.9091 6 85.3912 10.6246 95.1841 19.0356C104.977 27.4466 111.433 39.0876 113.381 51.8488C115.33 64.61 112.642 77.6471 105.806 88.5974C98.9695 99.5477 88.4365 107.687 76.1156 111.539C63.7947 115.392 50.5014 114.703 38.6446 109.598C26.7878 104.493 17.1522 95.3088 11.484 83.7107C5.81575 72.1125 4.48997 58.8675 7.7469 46.376C11.0038 33.8845 18.628 22.973 29.2376 15.619"
              stroke="#DCD9EF"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
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
    paddingVertical: hp("2%"),
    backgroundColor: "#978CD0",
    borderRadius: hp("2.5%"),
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
