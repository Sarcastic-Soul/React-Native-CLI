import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from 'react-native-track-player'
import { playListData } from '../constants';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ConrolCenter';
import SongInfo from '../components/SongInfo';

const { width } = Dimensions.get("window");

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>(null);

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
        if (event.type === Event.PlaybackTrackChanged && event.track !== undefined) {
            const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
            setTrack(playingTrack)
        }
    });

    const renderArtwork = () => {
        return (
            <View style={styles.artworkContainer}>
                <View style={styles.albumCoverContainer}>
                    {track?.artwork && (
                        <Image source={{ uri: track?.artwork?.toString() }} style={styles.albumCover} />
                    )}
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={playListData}
                renderItem={renderArtwork}
                keyExtractor={(song) => song.id.toString()}
            />
            <SongInfo track={track} />
            <SongSlider />
            <ControlCenter />
        </View>
    )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    artworkContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    albumCoverContainer: {
        width: width - 20,
        height: width - 20,
        borderRadius: 10,
        elevation: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    albumCover: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
})
