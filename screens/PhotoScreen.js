import React, { Component } from "react";
import { View, Text } from "react-native";
import ImageView from "react-native-image-viewing";

class PhotoScreen extends Component {
  render() {
    return (
      <View
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        testID="photo"
        accessibilityLabel="photo"
      >
        <Text>Photo Screen</Text>
        <View style={{ width: 300, height: 300 }}>
          <ImageView
            images={[
              {
                uri:
                  "https://prelrik.files.wordpress.com/2016/06/appium.jpg?w=640",
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

export default PhotoScreen;
