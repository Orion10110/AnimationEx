import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';

export const LottieExample = () => {
    // useEffect(() => {
    //     setInterval(() => {
    //         for (let i = 0; i < 5000; i++) {
    //           console.log('blocking thread');
    //         }
    //       }, 1000);
    // }, [])

    return <LottieView source={require('./businessmen-at-work.json')} autoPlay loop />

} 
