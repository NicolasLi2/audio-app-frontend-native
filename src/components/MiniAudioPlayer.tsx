import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../utils/colors';
import {useSelector} from 'react-redux';
import {getPlayerState} from '../store/player';

interface Props {}

export const MiniPlayerHeight = 60;

export default function MiniAudioPlayer({}: Props) {
  const {onGoingAudio} = useSelector(getPlayerState);
  const poster = onGoingAudio?.poster;
  const source = poster ? {uri: poster} : require('../assets/music.png');
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.poster} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{onGoingAudio?.title}</Text>
        <Text style={styles.name}>{onGoingAudio?.owner.name}</Text>
      </View>
      <Pressable style={{paddingHorizontal: 10}}>
        <AntDesign name="hearto" size={24} color={colors.CONTRAST} />
      </Pressable>
      <Pressable style={{paddingHorizontal: 10}}>
        <AntDesign name="caretright" size={24} color={colors.CONTRAST} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: MiniPlayerHeight,
    backgroundColor: colors.PRIMARY,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  poster: {
    height: MiniPlayerHeight - 10,
    width: MiniPlayerHeight - 10,
    // aspectRatio: 1,
    borderRadius: 5,
  },
  title: {
    color: colors.CONTRAST,
    fontWeight: '700',
    paddingHorizontal: 5,
  },
  contentContainer: {
    flex: 1,
    height: '100%',
    padding: 5,
  },
  name: {
    color: colors.SECONDARY,
    fontWeight: '700',
    paddingHorizontal: 5,
  },
});
