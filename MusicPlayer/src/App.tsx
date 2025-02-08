import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { setupPlayer, addTracks } from './utils/musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

function App(): React.JSX.Element {
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    async function setup() {
        let isSetup = await setupPlayer();
        if (isSetup) {
            await addTracks();
        }
        setIsPlayerReady(isSetup);
    }

    useEffect(() => {
        setup();
    }, []);

    if (!isPlayerReady) {
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <MusicPlayer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
    },
});

export default App;
