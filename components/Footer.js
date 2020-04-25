import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Footer = (props) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="home" size={25} color="red" />
        <Text style={styles.tabTitle, {color: 'red'}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="whatshot" size={25} />
        <Text style={styles.tabTitle}>Trending</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="subscriptions" size={25} />
        <Text style={styles.tabTitle}>Subscriptions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="folder" size={25} />
        <Text style={styles.tabTitle}>Library</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderTopColor: "#e5e5e5",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabTitle: {
    color: "#3c3c3c",
    fontSize: 11,
    paddingTop: 3,
  },
});

export default Footer;
