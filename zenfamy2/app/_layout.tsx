import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import "../global.css";
import { Provider } from 'react-redux';
import { colors } from '@/assets/lib';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ImageBackground, View } from 'react-native';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { store } from '@/redux/store';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Provider store={store}>
    <ThemeProvider value={DefaultTheme}>
      <AlertNotificationRoot>
        <View style={{ flex: 1, backgroundColor:colors.primaryBg }}>
          {/* value={colorScheme === 'dark' ? DarkTheme : DefaultTheme} */}
          <ImageBackground source={require('../assets/images/bg/greenshadow.png')} resizeMode="cover" style={{ flex: 1 }}>
            <Stack initialRouteName='index' screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
              
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="onboarding" options={{ headerShown: false }} />
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="quiz" options={{ headerShown: false }} />
              <Stack.Screen name="home" options={{ headerShown: false }} />
              <Stack.Screen name="tutorial" options={{ headerShown: false }} />
              <Stack.Screen name="family_profile" options={{ headerShown: false }} />
              <Stack.Screen name="child_create" options={{ headerShown: false }} />
              <Stack.Screen name="profile" options={{ headerShown: false }} />
              <Stack.Screen name="stories" options={{ headerShown: false }} />
              <Stack.Screen name="journal" options={{ headerShown: false }} />
              <Stack.Screen name="recommendation" options={{ headerShown: false }} />
              <Stack.Screen name="emotional" options={{ headerShown: false }} />
              <Stack.Screen name="signup" options={{ headerShown: false }} />
              <Stack.Screen name="subscription" options={{ headerShown: false }} />
              <Stack.Screen name="notification" options={{ headerShown: false }} />
              
              {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="dark" />
          </ImageBackground>
        </View>
      </AlertNotificationRoot>
    </ThemeProvider>
    </Provider>
  );
}
