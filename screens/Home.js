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
        <Button
            title="GO TO HELL"
            onPress={()=>navigation.navigate('HELL')}            
            />
        <Button
            title="GO TO Heaven"
            onPress={()=>navigation.navigate('Heaven')}
            />            
        </>
    );
}

export default Home;