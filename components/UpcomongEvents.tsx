import React from "react";
import { FlatList, Text, View } from "react-native";
import Event from "./elements/Event";

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
    <View>
      <Text>Upcoming Events ('no.s')</Text>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Event item={item} />}
        />
      </View>
    </View>
  );
};

export default UpcomongEvents;
