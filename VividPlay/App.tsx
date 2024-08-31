import {SafeAreaView, StyleSheet} from 'react-native';
import MyList from './src/components/MyList';
import Animation from './src/Animation/Animation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Flag from './src/Screen/Flag';
import Test from './src/Screen/Test';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <SafeAreaView style={styles.container}>
        <Animation />
      </SafeAreaView> */}
      <Animation />
      {/* <Test /> */}
      {/* <Flag /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
  },
});
