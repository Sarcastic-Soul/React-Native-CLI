import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Details from './Screens/Details';

export type RootStackParamList = {
    Home: undefined;
    Details: { product: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} options={{ title: "Trending IPhones🍎" }} />
                <Stack.Screen name="Details" component={Details} options={{title:"Product Details"}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
