import React from 'react';
import {Text, Alert, StyleSheet, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const apiKey = process.env.REACT_APP_WEATHER_KEY;

const weatherOptions = {
    Clear: {
        iconName:"weather-sunny",
    },
    Clouds: {
        iconName: "weather-cloudy",
    },
    Rain: {
        iconName: "Rainy",
    },

}

export default class Weather extends React.Component {

    state = {
        cond : "Clear"
    }

    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
        
            const location = await Location.getCurrentPositionAsync();
            console.log(location);
            console.log(location.coords.latitude, location.coords.longitude)

            this.getWeather(location.coords.latitude, location.coords.longitude);
        } catch(error) {
            Alert.alert("Error", {error})

        }
    }

    getWeather = async(latitude, longitude) => {
        const {data} = await Axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        console.log(data);
        console.log(data.main.temp);
        console.log(data.main.temp_max);
        console.log(data.main.temp_min);
        console.log(data.weather[0].main);
        console.log(data.weather[0].icon);
        this.setState({cond:data.weather[0].main, temp:data.main.temp, icon:data.weather[0].icon});
    }

    componentDidMount() {
        this.getLocation();
    }


    render() {
    
        const {cond, temp, icon} = this.state;
    
    
        return (
            <>
            <View style={styles.image}>
                <ImageBackground source={require('../assets/snow.gif')}  style={styles.image}>
                <View style={styles.container}>
                <Text style={styles.title}>
                    오늘 날씨 어때?
                </Text>
    
            </View>
    
            <View style={styles.container}>
                <View style={styles.halfcontainer}>
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={128} color="black" />
                    <Text style={styles.temptitile}>{temp}℃</Text>
                </View>
                
                <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={()=>alert('어쩔티비') }
                    >
                <Text style={styles.buttonText}>혹시 너무 춥다면 클릭!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                    <Image
                        source={require('../assets/weather.jpg')}
                        style={{height:100, width:300, paddingTop: 100}}
                    />
            </View>
    
    
                    
                </ImageBackground>
            </View>
    
            
    
    
            </>
            
        );
    
    }
    
    }
    
    const styles = StyleSheet.create({
        container: {
            flex : 1,
            alignItems: "center"
    
        },
        halfcontainer: {
            flex : 1,
            justifyContent: "center",
            alignItems: "center"
    
        },
        temptitle: {
            fontSize : 24
            
    
        },
        title: {
            color: '#212121',
            fontSize: 50,
            fontWeight: '600',
            
        },
        buttonContainer: {
            backgroundColor: 'blue',
            borderRadius: 5,
            padding:10,
            margin:20
        },
    
        buttonText: {
            fontSize:20,
            color:'#fff'
        },
        image : {
            width: '100%',
            height: '100%'
    
        }
        
    })
    