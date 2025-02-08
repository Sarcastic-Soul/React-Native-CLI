import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player';
import { playListData } from '../constants.ts';
import { setRepeatMode } from 'react-native-track-player/lib/src/trackPlayer';

export async function setupPlayer() {
    let isSetup = false;
    try {
        await TrackPlayer.getActiveTrackIndex();
        isSetup = true;
    } catch (error) {
        console.log('Error in setupPlayer', error);
        await TrackPlayer.setupPlayer();
        isSetup = true;
    } finally {
        return isSetup;
    }
}

export async function addTracks() {
    try {
        await TrackPlayer.add(playListData);
        await setRepeatMode(RepeatMode.Queue);
    } catch (error) {
        console.log('Error in addTracks', error);
    }
}

export async function playBackService() {
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play();
    });
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    });
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext();
    });
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious();
    });
}
