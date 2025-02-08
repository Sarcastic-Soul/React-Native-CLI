import React, { useState, useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppwriteContext } from '../appwrite/AppwriteContext'
import Loading from '../components/Loading'
import { AuthStack } from './AuthStack'
import { AppStack } from './AppStack'

export const Router = () => {
    const [loading, setLoading] = useState(true)
    const context = useContext(AppwriteContext)
    if (!context) {
        throw new Error("AppwriteContext must be used within an AppwriteProvider");
    }
    const { appwrite, setIsLoggedIn,isLoggedIn } = context

    useEffect(() => {
        appwrite
            .getCurrentUser()
            .then(response => {
                setLoading(false)
                if (response) {
                    setIsLoggedIn(true)
                }
            })
            .catch(error => {
                setLoading(false)
                setIsLoggedIn(false)
                console.error(error)
            })
    }, [appwrite, setIsLoggedIn])

    if (loading) {
        return <Loading />
    }

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}
