
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Layout from '../screens/Layout' ;
import Hell from '../screens/Hell';
import Weather from '../screens/Weather';


const Nav = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator
                initialRouteName='Home'
            >
                <Nav.Screen
                    name = "Home"
                    component={Home}
                    options={{title:'Home Screen'}}
                />
                <Nav.Screen
                    name = "Layout"
                    component={Layout}
                    options={{title:'layout Screen'}}
                />
                <Nav.Screen
                    name = "Hell"
                    component={Hell}
                    options={{title:'Welcome Hell'}}
                />
                <Nav.Screen
                    name = "Weather"
                    component={Weather}
                    options={{title:'Weather Screen'}}
                />

                
            </Nav.Navigator>
        </NavigationContainer>
    )


}

export default MainTabNavigator;