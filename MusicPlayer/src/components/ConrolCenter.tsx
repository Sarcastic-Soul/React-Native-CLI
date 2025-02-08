import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import TrackPlayer, { State, usePlaybackState } from "react-native-track-player";
import Icon from "react-native-vector-icons/MaterialIcons";

const ControlCenter = () => {
    const playBackState = usePlaybackState();
    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    }
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    }
    const togglePlayback = async (playBack: State) => {
        const currentTrack = await TrackPlayer.getActiveTrackIndex();
        if (playBack === State.Paused || playBack === State.Ready) {
            await TrackPlayer.play();
        } else {
            await TrackPlayer.pause();
        }
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon name="skip-previous" size={45} color="#000" />
            </Pressable>
            <Pressable onPress={() => togglePlayback(playBackState.state as State)}>
                <Icon name={playBackState.state === State.Playing ? "pause" : "play"} size={45} color="#000" />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon name="skip-next" size={45} color="#000" />
            </Pressable>

        </View>
    )
};

export default ControlCenter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: "#f5f5f5"
    },
})