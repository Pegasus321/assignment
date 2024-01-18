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
      id: 1,
    },
    {
      subject: "science",
      date: 13,
      month: "jan",
      id: 2,
    },
    {
      subject: "maths",
      date: 12,
      month: "jan",
      id: 3,
    },
    {
      subject: "science",
      date: 13,
      month: "jan",
      id: 4,
    },
    {
      subject: "maths",
      date: 12,
      month: "jan",
      id: 5,
    },
    {
      subject: "science",
      date: 13,
      month: "jan",
      id: 6,
    },
    {
      subject: "maths",
      date: 12,
      month: "jan",
      id: 7,
    },
    {
      subject: "science",
      date: 13,
      month: "jan",
      id: 8,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Text>Upcoming Events: 8</Text>

      {/* <FlatList
        data={data}
        renderItem={({ item }) => <Event item={item} />}
        showsVerticalScrollIndicator={false}
      /> */}
      {data.map((item) => (
        <Event item={item} key={item.id} />
      ))}
    </View>
  );
};

export default UpcomongEvents;
