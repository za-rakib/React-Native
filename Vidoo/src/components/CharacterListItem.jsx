/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {memo} from 'react';
import {useDispatch} from 'react-redux';
import {setPlayerItem} from '../features/video/videoSlice';

const SIZES = Dimensions.get('window');
const BIG_IMAGE_SIZE = SIZES.height / 4;

const CharacterListItem = ({character}) => {
  const dispatch = useDispatch();
  // Status color logic
  const statusColor =
    character.status === 'Alive'
      ? 'green'
      : character.status === 'Dead'
      ? 'red'
      : 'gray';

  const handleVideoPressed = () => {
    dispatch(setPlayerItem(character));
    //  console.log('video');
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemWrapper}>
        <TouchableOpacity onPress={handleVideoPressed}>
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
                <Text style={[styles.status, {color: statusColor}]}>
                  {character.status}
                </Text>
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 4},
    elevation: 3,
    marginBottom: 20,
  },
  itemWrapper: {
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: BIG_IMAGE_SIZE,
    borderRadius: 12,
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: 12,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  characterName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
  },
  channelLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default memo(
  CharacterListItem,
  (prevProps, nextProps) => prevProps.character.id === nextProps.character.id,
);
