/* eslint-disable react/react-in-jsx-scope */
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import character from '../data/character.json';
import CharacterListItem from './CharacterListItem';
import {useEffect, useState} from 'react';

const MyList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const responseJson = await response.json();
      setItems(responseJson.results);
      setNextPage(responseJson.info.next);
      setLoading(false);
    };
    fetchItems();
  }, []);

  const loadMore = async () => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await fetch(nextPage);
      const responseJson = await response.json();
      setItems(exisingItems => {
        return [...exisingItems, ...responseJson.results];
      });
      setNextPage(responseJson.info.next);
      setLoading(false);
    };
    fetchItems();
  };
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <CharacterListItem character={item} />}
      contentContainerStyle={{gap: 10}}
      ListFooterComponent={() => (
        <View>
          {loading && <ActivityIndicator size="large" />}
          <Text
            onPress={loadMore}
            style={{alignSelf: 'center', fontSize: 18, color: 'blue'}}>
            Load More
          </Text>
        </View>
      )}
    />
  );
};

export default MyList;
