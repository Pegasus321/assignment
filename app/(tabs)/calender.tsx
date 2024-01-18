import { StyleSheet } from "react-native";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { Text, View } from "../../components/Themed";
import { useState } from "react";

const Calender: React.FC = () => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);

  const onDateChange: DateChangedCallback = (date: any) => {
    setSelectedStartDate(date);
  };
  const startDate = selectedStartDate ? selectedStartDate.toString() : "";

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.container}>
        <CalendarPicker onDateChange={onDateChange} />

        <View>
          <Text style={{ width: wp("80%") }}>SELECTED DATE : {startDate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: wp("20%"),
    width: wp("90%"),
  },
});

export default Calender;
