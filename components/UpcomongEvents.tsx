import React from "react";
import { FlatList, Text, View } from "react-native";
import Event from "./elements/Event";
import { ScrollView } from "react-native-gesture-handler";

const UpcomongEvents = () => {
  const data = [
    {
      subject: "maths",
      date: 12,
      month: "jan",
    },
    {
      subject: "science",
      date: 13,
      month: "jan",
    },
    {
      subject: "maths",
      date: 12,
      month: "jan",
    },
    {
      subject: "science",
      date: 13,
      month: "jan",
    },
    {
      subject: "maths",
      date: 12,
      month: "jan",
    },
    {
      subject: "science",
      date: 13,
      month: "jan",
    },
    {
      subject: "maths",
      date: 12,
      month: "jan",
    },
    {
      subject: "science",
      date: 13,
      month: "jan",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Text>Upcoming Events ('no.s')</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => <Event item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UpcomongEvents;
