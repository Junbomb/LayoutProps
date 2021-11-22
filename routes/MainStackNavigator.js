import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from '../screens/Layout';
import Home from '../screens/Home';
import Hell from '../screens/Hell';


const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Hell'
            >
                <Stack.Screen
                    name = "Home"
                    component={Home}
                    options={{title:'Home Screen'}}
                />
                <Stack.Screen
                    name = "Layout"
                    component={Layout}
                    options={{title:'layout Screen'}}
                />
                <Stack.Screen
                    name = "Hell"
                    component={Hell}
                    options={{title:'Hell Screen'}}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )


}

export default MainStackNavigator;