import {SafeAreaView, StyleSheet} from 'react-native';
import MyList from './src/components/MyList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
});
