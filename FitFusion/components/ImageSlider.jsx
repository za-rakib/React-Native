import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { sliderImages } from "../constants/index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width: screenWidth } = Dimensions.get("window");

const ImageSlider = () => {
  const carouselRef = useRef(null);

  const renderItem = ({ item, index }) => {
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
      renderItem={renderItem}
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
    height: hp(26),
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
