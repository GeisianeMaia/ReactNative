import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";

// const api = axios.create({

//   baseURL: '  https://web-chat.global.assistant.watson.cloud.ibm.com',
// });

export default function Message() {
  // useEffect(() => {
  //    api
  //     .get('/preview.html?region=us-south&integrationID=3283dd58-2fe4-40a1-9b0c-c5ff65b3bc81&serviceInstanceID=70ab4d68-3960-441e-97e6-0fed00de96ec')
  //     .then((response) => response.data)
  //     .then(console.log);
  // }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* <Text>Entre em contato</Text> */}
      <WebView
        automaticallyAdjustContentInsets
        style={{ width: "100%", height: "100%" }}
        source={{
          uri:
            "https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=3283dd58-2fe4-40a1-9b0c-c5ff65b3bc81&serviceInstanceID=70ab4d68-3960-441e-97e6-0fed00de96ec",
        }}
      ></WebView>
    </View>
  );
}
