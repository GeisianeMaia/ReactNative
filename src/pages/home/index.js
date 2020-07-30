import React from 'react';
import { Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper'

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      // style={styles.search}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};


export default Home;

