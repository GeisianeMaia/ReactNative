import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Pie from 'react-native-pie';
import { PieChart } from 'react-native-svg-charts';
import { ProgressCircle } from 'react-native-svg-charts'


export default function Statistic() {

  // const data = [30, 25, 10, 17, 5];
  // const pieData = data.map((value, index) => ({
  //   value,
  //   key: `${index}-${value}`,
  //   svg: {
  //     fill:'#ff000'
  //   }
  // }));

  return (
    <View style={{flex:1}}>
      <Text style={{ fontSize:25, fontWeight: 'bold'}}>Statistic</Text>
      <ProgressCircle style={{ height: 200, width: 150, flex:1 }} progress={0.2} progressColor={'blue'} />
      <ProgressCircle style={{ height: 200, width: 150, flex:1 }} progress={0.6} progressColor={'blue'} />
      <Text>testando</Text>
    </View>

    // <View style={{flex:1, justifyContent:'center'}}>
    //   <Text>teste</Text>
    //   <PieChart style={{height: 200}} data={pieData}/>
    // </View>
     
  );
}

// const styles = StyleSheet.create({
  
// });