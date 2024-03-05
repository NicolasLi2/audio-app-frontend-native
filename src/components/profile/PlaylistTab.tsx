import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useFetchPlaylist} from '../../hooks/query';
import PlaylistItem from '../../ui/PlaylistItem';
import EmptyRecords from '../../ui/EmptyRecords';

interface Props {}

export default function PlaylistTab({}: Props) {
  const {data} = useFetchPlaylist();
  return (
    <ScrollView style={styles.container}>
      {!data?.length ? <EmptyRecords title="There is no playlist." /> : null}
      {data?.map(playlist => {
        return <PlaylistItem key={playlist.id} playlist={playlist} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
