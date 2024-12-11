const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

// Get the default Expo Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Apply NativeWind configuration
const nativeWindConfig = withNativeWind(defaultConfig, {
  input: "./global.css",
});

// Wrap with Reanimated Metro configuration
const config = wrapWithReanimatedMetroConfig(nativeWindConfig);

module.exports = config;
