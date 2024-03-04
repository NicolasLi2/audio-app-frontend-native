import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../utils/colors';

interface Props {
  title: string;
  poster?: string;
  onPress?(): void;
}

export default function RecentlyPlayedCard({title, onPress, poster}: Props) {
  const source = poster ? {uri: poster} : require('../assets/music_small.png');
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={source} style={styles.poster} />
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.OVERLAY,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  poster: {
    width: 50,
    height: 50,
  },
  title: {
    color: colors.CONTRAST,
    fontWeight: '500',
  },
  titleContainer: {
    flex: 1,
    // paddingHorizontal: 5,
    padding: 5,
  },
});
