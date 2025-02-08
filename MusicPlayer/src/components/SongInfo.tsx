import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Track } from 'react-native-track-player';

type SongInfoProps = PropsWithChildren<{
    track: Track | null | undefined;
}>


const SongInfo = ({ track }: SongInfoProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {track?.title}
            </Text>
            <Text style={styles.artist}>
                {track?.artist} - {track?.album}
            </Text>

        </View>
    )
}

export default SongInfo

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#f5f5f5"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    artist: {
        fontSize: 16,
        fontWeight: "normal"
    }
})