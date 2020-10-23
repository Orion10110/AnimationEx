
import React, { useCallback, useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Switch,
  Image,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import { Accordion } from './accordion'

export const AccordionExample = () =>  (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 20}}>
            <Accordion style={{margin: 10}} title="Accordion">
                <Text>Accordion with LayoutAnimation</Text>
            </Accordion>
            <Accordion initialShow={false} style={{margin: 10}} title="First">
                <Text>Use: UIManager</Text>
            </Accordion>
            <Accordion  initialShow={false} style={{margin: 10}} title="Second">
                <Text>Use: LayoutAnimation.spring();</Text>
            </Accordion>
        </View>
    </SafeAreaView>
);