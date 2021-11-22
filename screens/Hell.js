import React from "react";
import { Text, Button } from "react-native";


function Hell({navigation}) {
    return (
        <>
        <Text> Welcome Hell </Text>
        <Text> Welcome Hell </Text>
        <Text> Welcome Hell </Text>
        <Text> Welcome Hell </Text>
        <Text> Welcome Hell </Text>

        <Button
            title="GO TO Home"
            onPress={()=>navigation.navigate('Home')}            
            />
        </>
    );
}

export default Hell;