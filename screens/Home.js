import React from "react";
import { Text, Button } from "react-native";


function Home({navigation}) {
    return (
        <>
        <Text> Hello Home</Text>
        <Button
            title="GO TO LAYOUT"
            onPress={()=>navigation.navigate('Layout')}
            />
        </>
    );
}

export default Home;