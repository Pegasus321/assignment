import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Event: React.FC<{
  item: { date: number; subject: string; month: string };
}> = ({ item }) => {
  return (
    <View key={item.date} style={styles.main}>
      <Text style={{ fontSize: wp("3.5%"), fontWeight: "500" }}>
        {item.subject}
      </Text>
      <View>
        <Text style={{ fontSize: wp("3%") }}>{item.month}</Text>
        <Text style={{ fontSize: wp("5%"), fontWeight: "500" }}>
          {item.date}
        </Text>
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#DCD9EF",
    height: hp(7),
    paddingHorizontal: wp(2),
    paddingVertical: wp("6%"),
    marginVertical: hp(1),
    borderRadius: hp(1.5),
    alignItems: "center",
  },
});
