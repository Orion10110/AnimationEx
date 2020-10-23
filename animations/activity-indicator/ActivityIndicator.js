import React, { useRef, useEffect } from 'react';
import { Animated, View, Easing, StyleSheet } from 'react-native';
import SpinnerIcon from './spinner.svg';

const APO500 = "#aacc00"

const useInfiniteAnimation = duration => {
    const animation = useRef(new Animated.Value(0));

    useEffect(() => {
        animation.current.setValue(0);
        Animated.loop(
            Animated.timing(animation.current, {
                toValue: 1,
                duration,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ).start();
    }, []);

    return animation.current;
};

export const ActivityIndicator = ({ size, style, color = APO500, back }) => {
    const animation = useInfiniteAnimation(800);
    const rotate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    const sizeProps = size ? { width: size, height: size } : {};

    return (<View style={[styles.container, {backgroundColor: back}]}>
            <Animated.View
                style={[{ transform: [{ rotate }] }, style]}
                >
                <SpinnerIcon {...sizeProps} fill={color} />
            </Animated.View>
    </View>);
};


export const ActivityIndicatorExample = () => <View style={{ flex: 1, padding: 10, alignItems: 'center'}}>
    <ActivityIndicator />
    <ActivityIndicator back="#f4acb7" />
    <ActivityIndicator back="#b8f2e6" color="#ffe66d"/>
    <ActivityIndicator back="#b8f2e6" color="#00509d"/>
    <ActivityIndicator back="#89b0ae" color="#7b2cbf"/>
    <ActivityIndicator back="#00509d" color="#c44536"/>
</View>

const styles = StyleSheet.create({
    container: { 
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fbf4df',
        backgroundColor: '#faf3dd',
        justifyContent: 'center',
        alignItems: 'center',
    }
})