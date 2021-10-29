import React from "react";
import {Image, Text, Button, ScrollView, View, StyleSheet } from "react-native";
import Constants from 'expo-constants';

/*
TEST
*/

const App = () => {
    return (
        <>
            <View style={{ paddingTop: Constants.statusBarHeight}}  />
            <View style={[styles.container, styles.playingSpace]}>
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
                        <Button title="CHANGE FLEX DIRECTION"/>
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="CHANGE JUSTIFY CONTENT"/>
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="CHANGE ALIGN ITEMS"/>
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="CHANGE DIRECTION"/>
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="CHANGE FLEX WRAP"/>
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="ADD SQUARE"/>
                    </View>
                    <View style={styles.ButtonView}>
                        <Button title="DELTE SQAURE"/>
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

export default App;