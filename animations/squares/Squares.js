import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, View,Easing, Button } from 'react-native';

const APO500 = "#aacc00"

const Squire = ({ translateY }) => <Animated.View style={{ width: 50, height: 50, backgroundColor: 'red', transform: [{ translateY }] }} />

export const SquiresExample = () => {
    const tA = useRef(new Animated.Value(0)).current;
    const tB = useRef(new Animated.Value(0)).current;
    const tC = Animated.add(tA, tB);

    const onPress = () => {
        Animated.timing(tA, {
            toValue: 100,
            easing: Easing.back(),
            duration: 2000,
            useNativeDriver: true
        }).start();
    
        Animated.timing(tB, {
            toValue: 200,
            easing: Easing.back(),
            duration: 2000,
            useNativeDriver: true
        }).start();
    }


    return <View style={{ flex: 1}}>
        <View style={{  flex: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Squire translateY={tA}/>
            <Squire translateY={tB}/>
            <Squire translateY={tC}/>
        </View>
        <Button title="Run" onPress={onPress}/>
    </View>
}