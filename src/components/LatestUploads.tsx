import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useFetchLatestAudios} from '../hooks/query';
import AudioCard from '../ui/AudioCard';
import PulseAnimationContainer from '../ui/PulseAnimationContainer';
import colors from '../utils/colors';

interface Props {}

const dummyData = new Array(4).fill('');

export default function LatestUploads({}: Props) {
  const {data, isLoading} = useFetchLatestAudios();
  if (isLoading) {
    return (
      <PulseAnimationContainer>
        <View style={styles.container}>
          <View style={styles.dummyTitleView} />
          <View style={styles.dummyContainer}>
            {dummyData.map((_, index) => {
              return <View key={index} style={styles.dummyView} />;
            })}
          </View>
        </View>
      </PulseAnimationContainer>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest Uploads</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data?.map(item => {
          return (
            <AudioCard key={item.id} title={item.title} poster={item.poster} />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    color: colors.CONTRAST,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  dummyTitleView: {
    height: 20,
    width: 150,
    backgroundColor: colors.INACTIVE_CONTRAST,
    marginBottom: 15,
    borderRadius: 5,
  },
  dummyView: {
    height: 100,
    width: 100,
    backgroundColor: colors.INACTIVE_CONTRAST,
    marginRight: 15,
    borderRadius: 5,
  },
  dummyContainer: {
    flexDirection: 'row',
  },
});
