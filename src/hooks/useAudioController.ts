import TrackPlayer, {
  Track,
  usePlaybackState,
  State,
} from 'react-native-track-player';
import {AudioData} from '../@types/audio';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPlayerState,
  updateOnGoingAudio,
  updateOnGoingList,
} from '../store/player';
import deepEqual from 'deep-equal';

const updateQueue = async (data: AudioData[]) => {
  const lists: Track[] = data.map(item => {
    return {
      id: item.id,
      title: item.title,
      url: item.file,
      artwork: item.poster || require('../assets/music.png'),
      artist: item.owner.name,
      genre: item.category,
      isLiveStream: true,
    };
  });
  await TrackPlayer.add([...lists]);
};

const useAudioController = () => {
  const playbackState = usePlaybackState();
  const {onGoingAudio, onGoingList} = useSelector(getPlayerState);
  const dispatch = useDispatch();
  console.log(playbackState);

  // const isPlayerReady = playbackState.state !== State.None;
  // const isPlayerReady = playbackState.state === State.Ready;

  const onAudioPress = async (item: AudioData, data: AudioData[]) => {
    // console.log(playbackState);
    // if (isPlayerReady) {
    if (!playbackState.state) {
      await updateQueue(data);
      const index = data.findIndex(audio => audio.id === item.id);
      await TrackPlayer.skip(index);
      await TrackPlayer.play();
      dispatch(updateOnGoingAudio(item));
      return dispatch(updateOnGoingList(data));
    }
    if (playbackState.state === State.Playing && onGoingAudio?.id === item.id) {
      // same audio is already playing, then pause it
      return await TrackPlayer.pause();
    }
    if (playbackState.state === State.Paused && onGoingAudio?.id === item.id) {
      return await TrackPlayer.play();
    }
    if (playbackState.state) {
      await updateQueue(data);
      const index = data.findIndex(audio => audio.id === item.id);
      await TrackPlayer.skip(index);
      await TrackPlayer.play();
      dispatch(updateOnGoingAudio(item));
      return dispatch(updateOnGoingList(data));
    }
    if (onGoingAudio?.id !== item.id) {
      const fromSameList = deepEqual(onGoingList, data);
      if (fromSameList) {
        // playing new audio from same list
      } else {
        // playing new audio from different list
      }
    }
  };

  return {onAudioPress};
};

export default useAudioController;