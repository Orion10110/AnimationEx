import React, { useCallback, useState, useRef, useEffect } from 'react';
import {
  Text,
  Animated,
  StyleSheet,
} from 'react-native';

export const Header = ({style}) => <Animated.View  style={[styles.wrapper, styles.bottomLine, style]}>
    <Text style={styles.te}>Header Example</Text>
</Animated.View>

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        zIndex: 2,
        padding: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
    },
    te: {
        fontWeight: "600",
        zIndex: 2,

    },
    bottomLine: {
        borderBottomColor: '#aaa',
    },
});