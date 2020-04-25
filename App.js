import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, FlatList} from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Video from "./components/Video";
import data from './constants/data.json';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <FlatList 
        data={data.items}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{height: 0.5, backgroundColor: '#e5e5e5', marginHorizontal: 8}}></View>}
        renderItem={(video) =>
          <Video videoItem={video.item}/>
        }
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  body: {
    flex: 1,
  },
});
