
import React, { useCallback, useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Switch,
  Image,
  Text,
  KeyboardAvoidingView,
  LayoutAnimation, Platform,
  UIManager,
  StyleSheet
} from 'react-native';

import {
    TouchableOpacity,
} from 'react-native-gesture-handler';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

export const Accordion = ({title, style, children, initialShow = true, onChange = () => {}}) => {
    const [show, setShow] = useState(initialShow)
    const _onPress = useCallback(() => {
        LayoutAnimation.linear();
        setShow(show => {
            onChange(!show)
            return !show
        })
    }, [onChange, show])
    console.log(show)
    return (
        <View style={[style]}>
            <TouchableOpacity onPress={_onPress}>
                <View  style={[styles.titleContatiner, !show ? styles.bottomRaunded : {} ]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
            <View style={[styles.contentContainer, !show ? styles.hideContent : {}]}>{children}</View>
        </View>
    );

} 

const styles = StyleSheet.create({
    title: {
        color: 'white'
    },
    bottomRaunded: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5 
    },
    titleContatiner: {
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      backgroundColor: '#4361EE',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      minHeight: 50,
      width: '100%', 
    },
    hideContent: { height: 0, padding: 0, borderWidth:0,overflow: 'hidden'},
    contentContainer: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#4361EE',
        backgroundColor: "#FFF4E9",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden"
    }
  });
  