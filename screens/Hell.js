import React from "react";
import { Text, Button } from "react-native";


function Hell({navigation}) {
    return (
        <>
        <Text> 여긴 따뜻해요 </Text>
        <Text> 여긴 따뜻해요 </Text>
        <Text> 여긴 따뜻해요 </Text>
        <Text> 여긴 따뜻해요 </Text>
        <Text> 여긴 따뜻해요 </Text>

        <Button
            title="GO TO Home"
            onPress={()=>navigation.navigate('Home')}            
            />
        </>
    );
}

export default Hell;