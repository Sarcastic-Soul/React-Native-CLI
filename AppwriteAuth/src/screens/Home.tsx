import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FAB } from '@rneui/base'
import Snackbar from 'react-native-snackbar'
import { AppwriteContext } from '../appwrite/AppwriteContext'
import { SafeAreaView } from 'react-native-safe-area-context'

type UserObject = {
    name: string
    email: string
}

const Home = () => {
    const [user, setUser] = useState<UserObject | null>(null)
    const context = useContext(AppwriteContext)
    if (!context) {
        throw new Error("AppwriteContext must be used within an AppwriteProvider");
    }
    const { appwrite, setIsLoggedIn } = context
    const handleLogout = async () => {
        try {
            await appwrite.logout().then(() => {
                setIsLoggedIn(false)
            })
            Snackbar.show({
                text: 'Logout successful',
                duration: Snackbar.LENGTH_SHORT,
            })
        } catch (error) {
            console.error(error)
            Snackbar.show({
                text: 'Logout failed',
                duration: Snackbar.LENGTH_SHORT,
            })
        }
    }

    useEffect(() => {
        appwrite.getCurrentUser().then((response) => {
            if (response) {
                const userData: UserObject = {
                    name: response.name,
                    email: response.email
                }
                setUser(userData)
            }
        })
    }, [appwrite])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcomeContainer}>
                {user && (
                    <View style={styles.userContainer}>
                        <Text style={styles.userDetails}>Name: {user.name}</Text>
                        <Text style={styles.userDetails}>Email: {user.email}</Text>
                    </View>
                )}
            </View>
            <FAB
                placement="right"
                color="#f02e65"
                size="large"
                title="Logout"
                icon={{ name: 'logout', color: '#FFFFFF' }}
                onPress={handleLogout}
            />
        </SafeAreaView>
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0D32',
    },
    welcomeContainer: {
        padding: 12,

        flex: 1,
        alignItems: 'center',
    },
    message: {
        fontSize: 26,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    userContainer: {
        marginTop: 24,
    },
    userDetails: {
        fontSize: 20,
        color: '#FFFFFF',
    },
});
