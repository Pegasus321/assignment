import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Quick_links = () => {
  return (
    <View style={styles.mainLinks}>
      <Text>Quick Links</Text>

      <View style={styles.links}>
        <Link href="/report" style={{ fontSize: wp("3.5%"), color: "#666666" }}>
          Report
        </Link>
        <Link href="/report" style={{ fontSize: wp("3.5%"), color: "#666666" }}>
          Syllabus
        </Link>
        <Link href="/report" style={{ fontSize: wp("3.5%"), color: "#666666" }}>
          Unit test
        </Link>
        <Link href="/report" style={{ fontSize: wp("3.5%"), color: "#666666" }}>
          Payment
        </Link>
      </View>
    </View>
  );
};

export default Quick_links;

const styles = StyleSheet.create({
  mainLinks: {
    marginVertical: hp("4%"),
  },
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#DCD9EF",
    height: hp("14%"),
    borderRadius: hp("2.5%"),
    alignItems: "center",
  },
});
