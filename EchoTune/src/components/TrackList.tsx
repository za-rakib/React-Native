import library from "@/assets/data/library.json";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

export default function TrackList() {
  return <FlatList data={library} renderItem={() => null} />;
}

const styles = StyleSheet.create({});
