import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

// const api = axios.create({
//   baseURL: 'seu url',
// });

export default function Message() {
  useEffect(() => {
    // api
    //   .get('dps do / do url')
    //   .then((response) => response.data)
    //   .then(console.log);
  }, []);

  return (
    <View>
      <Text>Entre em contato</Text>
    </View>
  );
}
