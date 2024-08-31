/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Character} from '../types';

const SIZES = Dimensions.get('window');
const BIG_IMAGE_SIZE = SIZES.height / 4;

type CharacterListItemProps = {
  character: Character;
};

const CharacterListItem = ({character}: CharacterListItemProps) => {
  //   console.log({characterId: character.status});

  return (
    <View style={styles.container}>
      {/* <Text>{character.id}</Text> */}
      <View style={styles.itemWrapper}>
        <TouchableOpacity>
          <View style={styles.playerContainer}>
            <Image style={styles.image} source={{uri: character.image}} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.rowCenter}>
              <Image
                style={styles.channelLogo}
                source={{uri: character.image}}
              />
              <View style={styles.textContainer}>
                <Text numberOfLines={2} style={styles.characterName}>
                  {character.name}
                </Text>
                <Text>{character.status}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  itemWrapper: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: BIG_IMAGE_SIZE,
    aspectRatio: 1,
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  characterName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  channelLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default memo(
  CharacterListItem,
  (prevProps, nextProps) => prevProps.character.id === nextProps.character.id,
);
