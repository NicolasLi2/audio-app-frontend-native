import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../utils/colors';

interface Props {
  source?: string;
}

const avatarSize = 70;

export default function AvatarField({source}: Props) {
  return (
    <View>
      {source ? (
        <Image source={{uri: source}} style={styles.avatarImage} />
      ) : (
        <View style={styles.avatarImage}>
          <Entypo name="mic" size={30} color={colors.PRIMARY} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatarImage: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    backgroundColor: colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: colors.CONTRAST,
  },
});
