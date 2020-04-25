import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = (props) => {
  return (
    <View style={styles.navBar}>
      <Image source={require("../assets/youtube.png")} style={styles.img} />
      <View style={styles.rightNav}>
        <TouchableOpacity activeOpacity={0.4}>
          <Icon name="search" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4}>
          <Icon name="account-circle" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    elevation: 5,
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    height: 70,
    width: 140,
    marginTop: 20,
  },
  rightNav: {
    flexDirection: "row",
    marginTop: 20,
  },
  icon: {
    paddingHorizontal: 10,
  },
});

export default Header;
