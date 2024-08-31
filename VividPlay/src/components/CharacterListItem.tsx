/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Image, StyleSheet} from 'react-native';
import {Character} from '../types';
import {memo} from 'react';

type CharacterListItem = {
  character: Character;
};

const CharacterListItem = ({character}: CharacterListItem) => {
  //  r console.log({character: character.id});
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{character.name}</Text>
      <Image source={{uri: character.image}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkslategrey',
    alignSelf: 'center',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default memo(
  CharacterListItem,
  (prevProps, nextProps) => prevProps.character.id === nextProps.character.id,
);
