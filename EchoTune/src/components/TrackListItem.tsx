import { unknownArtistImageUri } from "@/constants/images";
import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import FastImage from "react-native-fast-image";

export type TrackListItemProps = {
  track: { title: string; image?: string };
};
export default function TrackListItem({ track }: TrackListItemProps) {
  return (
    <TouchableHighlight>
      <View>
        <FastImage
          source={{
            uri: track.image ?? unknownArtistImageUri,
            priority: FastImage.priority.normal,
          }}
          style={{
            ...styles.trackArtworkImage,
          }}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  trackArtworkImage: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
});
