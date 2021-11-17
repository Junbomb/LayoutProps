import React from "react";
import {Image, Text, Button, ScrollView, View, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import {useState} from 'react';


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
    const flexWraps = ['nowrap', 'wrap', 'wrap-reverse'];

    const [flexDirection, setFlexDirection] = useState(0);
    const [justifyContent, setJustifyContent] = useState(0);
    const [alignItems, setAlignItems] = useState(0);
    const [direction, setDirection] = useState(0);
    const [flexWraping, setFlexWrap] = useState(0);

    const hookedStyles = {
        flexDirection: flexDirections[flexDirection],
        justifyContent: justifyContents[justifyContent], 
        alignItems: alignItemsArr[alignItems],
        direction: directions[direction],
        flexWrap: flexWraps [flexWraping],

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

        const [squares, setSquares] = useState([Square(), Square(), Square(),Square(), Square(), Square()]);

    return (
        <>
            <View style={{ paddingTop: Constants.statusBarHeight}} />
            <View style={[styles.container, styles.playingSpace, hookedStyles]}>
            {squares.map(elem => elem)}

        
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
                                    changeSetting(flexWraping, flexWraps, setFlexWrap);

                          }}
                    />
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="ADD SQUARE"
                            onPress={() => {
                                console.log("press ADD SQAURE")
                                setSquares([...squares, Square()]);

                        }}                        
                        />
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="DELTE SQAURE"
                            onPress={() => {
                                console.log("press DELTE SQAURE");
                                setSquares(squares.filter((v,i) => i != squares.length -1));
                        }}
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


const randomHexColor = () => {
    return '#000000'.replace(/0/g, () => {
      return (~~(Math.random() * 16)).toString(16);
    });
  };
  
export default App;