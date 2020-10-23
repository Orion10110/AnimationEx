
import React, { useCallback, useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,
  LayoutAnimation, Platform,
  UIManager,
  Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const windowWidth = Dimensions.get('window').width;

const CustomLayoutAnimation = {
    duration: 300,
    create: {
        property: LayoutAnimation.Properties.scaleXY,
        type: LayoutAnimation.Types.linear
    },
    update: {
        property: LayoutAnimation.Properties.scaleXY,
        type: LayoutAnimation.Types.linear
    },
    delete: {
        duration: 200,
        property: LayoutAnimation.Properties.scaleXY,
        type: LayoutAnimation.Types.linear
    }
}

const Button = ({ title, style, onPress = () => {}, second}) => <TouchableOpacity style={[btnStyle.container, second ? btnStyle.second: {}, style]} onPress={onPress}>
    <Text style={btnStyle.caption}>{title}</Text>
</TouchableOpacity>

const CustomText = ({ caption }) => <View style={{ marginBottom: 10 }}> 
    <Text style={{ fontSize: 20, color: "#fadde1"}}>{caption}</Text>
    <TextInput
    style={{ height: 40, borderColor: '#ff5d8f', borderBottomWidth: 1, color: "#ff87ab"  }}
    />
</View>

const FirstScreen = ({style}) => <View style={[{  justifyContent: 'center', overflow: 'hidden'  }, style]} >
    <View style={{ width: windowWidth - 60}}>
        <CustomText caption="Login:" />
        <CustomText caption="Password:" />
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
            <Button title="SIGN IN" style={{ width: 'auto', padding: 10, marginTop: 30 }}/>
        </View>
    </View> 
</View>

const SecondScreen = ({style}) => <View style={[{ justifyContent: 'center', overflow: 'hidden' }, style]} > 
    <View style={{ width: windowWidth - 60}}>
        <CustomText caption="Login:" />
        <CustomText caption="Password:" />
        <CustomText caption="Confirm password:" />
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
            <Button title="SIGN UP" style={{ width: 'auto', padding: 10, marginTop: 30 }}/>
        </View>
    </View>
</View>

export const LayoutScreens = () =>  {
    const [firstTabActive, setActive] = useState(true)
    const switchTab = useCallback(isFirstActive => {
        LayoutAnimation.spring();
        setActive(isFirstActive)
    }, setActive) 

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 20, backgroundColor: '#4d194d', flex:1}}>
                <View style={{ flexDirection: 'row',  justifyContent: 'center' }}>
                    <Button second={!firstTabActive} onPress={() => switchTab(true)} title="Login"/>
                    <Button second={firstTabActive} onPress={() => switchTab(false)} title="Logout"/>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <FirstScreen style={!firstTabActive ? { width: 0 } : { padding: 20, flex: 1 }}/>
                    <SecondScreen style={firstTabActive ? { width: 0 } : { padding: 20, flex: 1 }}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const btnStyle = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#ff87ab'
    },
    caption: {
        color: "#fadde1",
        textTransform: 'uppercase'
    },
    second: {
        backgroundColor: '#ffcad4'
    }
});