/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import CharacterListItem from './CharacterListItem';
import {useCallback, useEffect, useState} from 'react';
const initialPage = 'https://rickandmortyapi.com/api/character';

const MyList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState('');
  const {height, width} = useWindowDimensions();

  const fetchPage = async url => {
    if (loading) {
      return;
    }
    setLoading(true);
    const response = await fetch(url);
    const responseJson = await response.json();
    setItems(existingItems => {
      return [...existingItems, ...responseJson.results];
    });
    setNextPage(responseJson.info.next);
    setLoading(false);
  };

  const onRefresh = () => {
    setItems([]);
    setNextPage(initialPage);
    console.log({Refreshing: nextPage});
    fetchPage(initialPage);
  };

  useEffect(() => {
    fetchPage(initialPage);
  }, []);

  const renderItem = useCallback(
    ({item}) => <CharacterListItem character={item} />,
    [],
  );

  if (items.length === 0) {
    //only for debug
    return null;
  }

  const itemHeight = 40 + width;
  // console.log({itemHeight});

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      contentContainerStyle={{gap: 10}}
      onEndReached={() => fetchPage(nextPage)}
      onEndReachedThreshold={3}
      ListFooterComponent={() => (
        <>{loading && <ActivityIndicator size="large" />}</>
      )}
      refreshing={loading}
      onRefresh={onRefresh}
      // removeClippedSubviews={true}
      initialNumToRender={3}
      // keyExtractor={(item, index) => `${item.name}-${index}`}
      debug
      getItemLayout={(items, index) => ({
        length: itemHeight,
        offset: (itemHeight + 5) * index,
        index,
      })}
    />
  );
};

export default MyList;
