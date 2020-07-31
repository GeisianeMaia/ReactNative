import React, { Fragment } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Fragment>
      <Searchbar
        style={{ top: -50 }}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <Text style={styles.textInfo}>INFORMATION</Text>

      <View style={styles.info}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <TouchableOpacity style={styles.images}>
            <Image
              source={require('../home/img/info.jpg')}
              style={styles.card}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.images}>
            <Image
              source={require('../home/img/info2.jpg')}
              style={styles.card}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.images}>
            <Image
              source={require('../home/img/info3.jpg')}
              style={styles.card}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.images}>
            <Image
              source={require('../home/img/info4.jpg')}
              style={styles.card}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.images}>
            <Image
              source={require('../home/img/info5.jpg')}
              style={styles.card}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  textInfo: {
    top: -20,
    fontSize: 32,
    color: '#35AAFF',
  },
  info: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
    
  },
  images: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 390,
    width: 350,
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
  },
});