import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../utils/colors';

interface Props {
  progress: number;
}

export default function Progress({progress}: Props) {
  return (
    <>
      <Text style={styles.title}>{`${progress}%`}</Text>
      <View style={[styles.progressBar, {width: `${progress}%`}]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: colors.CONTRAST,
    paddingVertical: 2,
    alignSelf: 'flex-end',
  },
  progressBar: {
    height: 10,
    backgroundColor: colors.CONTRAST,
    borderRadius: 5,
  },
});
