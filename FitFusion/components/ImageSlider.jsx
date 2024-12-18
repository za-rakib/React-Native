import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width: screenWidth } = Dimensions.get("window");

const sliderImages = [
  require("../assets/images/slide1.png"),
  require("../assets/images/slide2.png"),
  require("../assets/images/slide3.png"),
  require("../assets/images/slide4.png"),
  require("../assets/images/slide5.png"),
];

const ImageSlider = () => {
  const carouselRef = useRef(null);

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={item} style={styles.image} resizeMode="cover" />
      </View>
    );
  };

  return (
    <Carousel
      ref={carouselRef}
      data={sliderImages}
      renderItem={_renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth * 0.9}
      autoplay={true}
      loop={true}
      autoplayDelay={1000}
      autoplayInterval={3000}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: screenWidth * 0.9,
    height: hp(25),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
});

export default ImageSlider;
