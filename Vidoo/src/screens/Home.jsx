/* eslint-disable react/no-unstable-nested-components */
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
  View,
} from 'react-native';
import CharacterListItem from '../components/CharacterListItem';
import Header from '../components/Header';
import ChipsLayout from '../components/ChipsLayout';

const initialPage = 'https://rickandmortyapi.com/api/character';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(initialPage);
  const {width} = useWindowDimensions();

  // Fetches the next page of characters from the API
  const fetchPage = async url => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      setItems(prevItems => [...prevItems, ...responseJson.results]);
      setNextPage(responseJson.info.next);
    } catch (error) {
      console.error('Failed to fetch data: ', error);
    } finally {
      setLoading(false);
    }
  };

  // Refreshes the list by resetting state and fetching from the first page
  const onRefresh = () => {
    setItems([]);
    setNextPage(initialPage);
    fetchPage(initialPage);
  };

  useEffect(() => {
    fetchPage(initialPage);
  }, []);

  // Renders each character item using memoized callback for performance
  const renderItem = useCallback(
    ({item}) => <CharacterListItem character={item} />,
    [],
  );

  // Calculate item height dynamically based on screen width
  const itemHeight = 40 + width;

  if (items.length === 0 && !loading) {
    return null; // Avoid rendering empty UI if no items and not loading
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <ChipsLayout />

      <FlatList
        data={items}
        renderItem={renderItem}
        contentContainerStyle={{gap: 10}}
        onEndReached={() => fetchPage(nextPage)}
        onEndReachedThreshold={0.5} // Trigger loading more at 50% of the list
        ListFooterComponent={
          loading ? (
            <View style={{paddingVertical: 20}}>
              <ActivityIndicator size="large" />
            </View>
          ) : null
        }
        refreshing={loading}
        // Uncomment if pull-to-refresh is needed
        // onRefresh={onRefresh}
        removeClippedSubviews={true} // Performance optimization for large lists
        initialNumToRender={5} // Render a few items initially for performance
        getItemLayout={(data, index) => ({
          length: itemHeight,
          offset: (itemHeight + 5) * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

export default Home;
