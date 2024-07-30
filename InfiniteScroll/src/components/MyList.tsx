/* eslint-disable react/react-in-jsx-scope */
import {ActivityIndicator, FlatList, Text} from 'react-native';
import character from '../data/character.json';
import CharacterListItem from './CharacterListItem';
import {useEffect, useState} from 'react';

const MyList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const responseJson = await response.json();
      setItems(responseJson.results);
      setLoading(false);
    };
    fetchItems();
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <FlatList
      data={items}
      renderItem={({item}) => <CharacterListItem character={item} />}
    />
  );
};

export default MyList;
