import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import { ThemeProvider, Header } from "react-native-elements";
import ImageLogo from "./ImageLogo";

export default class Maintenance extends React.Component {
  state = {
    rooms: [
      {
        room: "HALLWAY",
        img: "https://icon-library.net/images/hallway-icon/hallway-icon-20.jpg"
      },
      {
        room: "LIVING ROOM",
        img: "https://static.thenounproject.com/png/81671-200.png"
      },
      {
        room: "KITCHEN",
        img:
          "https://www.shareicon.net/data/256x256/2016/07/31/804832_gas_512x512.png"
      },
      {
        room: "DINING ROOM",
        img: "https://image.flaticon.com/icons/png/512/66/66023.png"
      },
      {
        room: "MASTER BEDROOM",
        img: "https://icon-library.net/images/bed-icon-png/bed-icon-png-29.jpg"
      },
      {
        room: "ENSUITE",
        img:
          "https://icon-library.net/images/bathroom-icon/bathroom-icon-11.jpg"
      },
      {
        room: "BEDROOM 2",
        img: "https://icon-library.net/images/bed-icon-png/bed-icon-png-29.jpg"
      },
      {
        room: "BATHROOM",
        img:
          "https://icon-library.net/images/bathroom-icon/bathroom-icon-11.jpg"
      },
      {
        room: "STOREROOM",
        img: "https://static.thenounproject.com/png/636340-200.png"
      },
      {
        room: "WC",
        img: "https://static.thenounproject.com/png/26699-200.png"
      },
      {
        room: "OTHER",
        img: "http://tadalafilforsale.net/data/media/98/62442583.png"
      }
    ]
  };

  render() {
    const { rooms } = this.state;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<ImageLogo />}
          rightComponent={{
            icon: "home",
            color: "#4A306E",
            onPress: () => this.props.navigation.navigate("HOME")
          }}
          containerStyle={{
            backgroundColor: "#fff",
            justifyContent: "space-around"
          }}
        />

        <View style={styles.scrollList}>
          <Text style={styles.header}>SELECT YOUR ROOM</Text>

          <FlatList
            ItemSeparatorComponent={() => <View style={styles.list} />}
            data={rooms}
            keyExtractor={item => item.room}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10
                }}
                onPress={() => this.handleListTap(item)}
              >
                <Image style={styles.image} source={{ uri: item.img }} />
                <Text style={{ padding: 10, color: "white" }}>{item.room}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }

  handleListTap = item => {
    this.props.navigation.navigate("RoomIssue", { room: item.room });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollList: {
    flex: 1,
    // paddingTop: 10,

    backgroundColor: "#4A306E"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  // input: {
  //   height: 40,
  //   borderColor: "purple",
  //   width: 200,
  //   borderWidth: 1
  // },
  list: {
    height: 1,
    width: "100%",
    backgroundColor: "white"
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 20,
    backgroundColor: "#ED3192",
    color: "white",
    paddingTop: 20,
    paddingBottom: 20
  }
});
