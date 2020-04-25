import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Video extends Component {
  render() {
    let video = this.props.videoItem;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: video.snippet.thumbnails.medium.url }}
          style={styles.img}
        />
        <View style={styles.descContainer}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
            style={styles.vidImg}
          />
          <View style={styles.statsContainer}>
            <Text numberOfLines={2} style={styles.vidTitle}>{video.snippet.title}</Text>
            <Text style={styles.subVidTitle}>{video.snippet.channelTitle + " · " + nFormatter(video.statistics.viewCount, 1) + " · 3 Months ago"}</Text>
          </View>
          <TouchableOpacity>
              <Icon name="more-vert" size={20} color="#888888"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function nFormatter(num, digits) {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' views';
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  img: {
    height: 200,
  },
  descContainer: {
    flexDirection: "row",
    paddingTop: 15,
  },
  vidImg: { width: 50, height: 50, borderRadius: 25 },
  statsContainer: {
    paddingHorizontal: 5,
    flex: 1
  },
  vidTitle: {
    fontSize: 15,
    color: "#3c3c3c",
    fontWeight: "bold"
  },
  subVidTitle: {
      fontSize: 14,
      paddingTop: 3
  }
});
