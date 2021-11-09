import React from "react";
import {Image, Text, Button, ScrollView, View, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import {useState, randomHexColor} from 'react-native';


/*
TEST
*/

const App = () => {
    const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse' ];
    const justifyContents = [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
    ];

    const alignItemsArr = [
        'flex-start',
        'flex-end',
        'center',
        'stretch',
        'baseline',
      ];
    
    
    const directions = ['inherit', 'ltr', 'rtl'];
    const wraps = ['nowrap', 'wrap', 'wrap-reverse'];

    const [flexDirection, setFlexDirection] = useState(0);
    const [justifyContent, setJustifyContent] = useState(0);
    const [alignItems, setAlignItems] = useState(0);
    const [direction, setDirection] = useState(0);
    const [wrap, setWrap] = useState(0);

    const hookedStyles = {
        flexDirection: flexDirections[flexDirection],
        justifyContent: justifyContents[justifyContent], 
        alignItems: alignItemsArr[alignItems],
        direction: directions[direction],
        wrap: wraps[wrap],

    }
    const changeSetting = (value, options, setterfunction) => {
        if (value == options.length - 1) {
            setterfunction(0);
        } else {
            setterfunction(value + 1);
        };

        console.log(options[value]);
    }


    const Square = () => {
        const sqStyle = {
            width: 50,
            height: 50,
            backgroundColor: randomHexColor(),
        };
        return <View style={sqStyle} />;
        };

        const [squares, setSquares] = useState([Square(), Square(), Square()]);

    return (
        <>
            <View style={{ paddingTop: Constants.statusBarHeight}} />
            <View style={[styles.container, styles.playingSpace, hookedStyles]}>
            {squares.map(elem => elem)}
                <Text> Hello </Text>
                <Text> Hello </Text>
                <Text> Hello </Text>
                <Text> 대중음악 딴따라라 폄하, 대표적인 차별 문제
                    미국 밥딜런은 노벨상도..우리는 왜 차별하나?
                    대중문화도 문화예술, 시대에 맞게 포함시켜야
                    면제가 아니라 국위선양을 위한 대체복무방식
                    전문연구요원 병역특례처럼 공정기준 마련 可
                    정치권은 공론장 여는 역할, 국민여론에 따라.. 

                </Text>
                <Image style={styles.tinyLogo}
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
            </View>
            <ScrollView style={[styles.container]}>
                <View style={[styles.controlSpace]}>
                    <View style={styles.ButtonView}>
                        <Button title="CHANGE FLEX DIRECTION"
                            onPress={() => {
                                console.log("press CHANGE FLEX DIRECTION");
                                changeSetting(flexDirection, flexDirections, setFlexDirection);
                            }}
                        />
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="CHANGE JUSTIFY CONTENT"
                            onPress={() => {
                                console.log("press CHANGE JUSTIFY CONTENT");
                                    changeSetting(justifyContent, justifyContents, setJustifyContent);
                                }}
                        />
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="CHANGE ALIGN ITEMS"
                            onPress={() => {
                                console.log("press CHANGE ALIGN ITEMS")
                                    changeSetting(alignItems, alignItemsArr, setAlignItems);

                                }}
                        />
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="CHANGE DIRECTION"
                            onPress={() => {
                                console.log("press CHANGE DIRECTION")
                                    changeSetting(direction, directions, setDirection);

                                }}
                    />
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="CHANGE FLEX WRAP"
                            onPress={() => {
                                console.log("press CHANGE FLEX WRAP")
                                    changeSetting(wrap, wraps, setWrap);

                          }}
                  />
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="ADD SQUARE"
                            onPress={() =>
                                console.log("press ADD SQAURE")

                          }                        
                        />
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="DELTE SQAURE"
                            onPress={() =>
                                console.log("press DELTE SQAURE")
                          }                        
                        
                        />
                    </View>



</View>
            
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        height: '50%',
    },
    playingSpace: {
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 3,
    },
    controlSpace: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F5F5F5',
    },
    ButtonView: {
            width:'50%',
            padding: 10,

    },/*#f194ff*/
    tinyLogo: {
        width: 100,
        height: 100,
    }

})

//const randomHexColor = () -> 
export default App;