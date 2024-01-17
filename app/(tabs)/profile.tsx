import { ActivityIndicator, Image, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useData } from "../../context/DataContext";
import { UserData } from "../../interface/types";

export default function Profile() {
  const { userData } = useData();
  const firstUserData: UserData = userData?.[0] as UserData;

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
  console.log(firstUserData);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.name}>
          <Text style={{ fontSize: wp("6%") }}>{firstUserData.name}</Text>

          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ width: wp("18%"), height: wp("18%") }}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.innerInfoContainer}>
            <Text style={styles.text}>Student ID Number:</Text>
            <Text style={styles.text}>{firstUserData.name}</Text>
          </View>
          <View style={styles.innerInfoContainer}>
            <Text style={styles.text}>Class/Grade:</Text>
            <Text style={styles.text}>{firstUserData.classGrade}</Text>
          </View>
          <View style={styles.innerInfoContainer}>
            <Text style={styles.text}>Contact Number:</Text>
            <Text style={styles.text}>{firstUserData.contactNumber}</Text>
          </View>
          <View style={styles.innerInfoContainer}>
            <Text style={styles.text}>Email Address:</Text>
            <Text style={styles.text}>{firstUserData.emailAddress}</Text>
          </View>
          <View style={styles.innerInfoContainer}>
            <Text style={styles.text}>Parent/Guardian:</Text>
            <Text style={styles.text}>{firstUserData.parentGuardian}</Text>
          </View>
          <View style={styles.innerInfoContainer}>
            <Text style={styles.text}>Parent Contact:</Text>
            <Text style={styles.text}>{firstUserData.parentContact}</Text>
          </View>
          <View style={styles.innerInfoContainer}>
            <Text style={styles.text}>Address:</Text>
            <Text style={styles.text}>{firstUserData.address}</Text>
          </View>
        </View>
      </View>
    </View>
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
  name: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: wp("3%"),
    paddingVertical: wp("6%"),
    alignItems: "center",
  },
  infoContainer: {
    backgroundColor: "#DCD9EF",
    gap: wp("5%"),
    padding: wp("5%"),
    borderRadius: wp("5%"),
  },
  innerInfoContainer: {
    backgroundColor: "#DCD9EF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#666",
    fontSize: wp("3.5%"),
  },
});
