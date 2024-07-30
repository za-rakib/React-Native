/* eslint-disable react/react-in-jsx-scope */
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import CharacterListItem from './CharacterListItem';
import {useEffect, useState} from 'react';

const MyList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(
    'https://rickandmortyapi.com/api/character',
  );

  const fetchNextPage = async () => {
    if (loading) {
      return;
    }
    console.log({nextPage});
    setLoading(true);
    const response = await fetch(nextPage);
    const responseJson = await response.json();
    setItems(exisingItems => {
      return [...exisingItems, ...responseJson.results];
    });
    setNextPage(responseJson.info.next);
    setLoading(false);
  };

  return (
    <FlatList
      data={items}
      renderItem={({item}) => <CharacterListItem character={item} />}
      contentContainerStyle={{gap: 10}}
      onEndReached={fetchNextPage}
      ListFooterComponent={() => (
        <View>
          {loading && <ActivityIndicator size="large" />}
          <Text
            onPress={fetchNextPage}
            style={{alignSelf: 'center', fontSize: 18, color: 'blue'}}>
            Load More
          </Text>
        </View>
      )}
    />
  );
};

export default MyList;
