
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
import SpriteSheet from 'rn-sprite-sheet';
import {MummySprite} from '../../assets';
import { RectButton } from 'react-native-gesture-handler'

const  Button = ({onPress, title}) => <RectButton style={{ padding: 10, backgroundColor: '#3c6cdc', margin: 5}} onPress={onPress}>
<View accessible>
  <Text style={{ color: 'white' }}>{title}</Text>
</View>
</RectButton>

export const SpriteSheetExample = () => {
    const [loop, setLoop] = useState(false)
    const [resetAfterFinish, setResetAfterFinish] = useState(false)
    const [fps, setFps] = useState('16')
    const mummy = useRef(null);

    useEffect(() => {
        // setInterval(() => {
        //     for (let i = 0; i < 5000; i++) {
        //       console.log('blocking thread');
        //     }
        //   }, 1000);
    }, [])

    const play = useCallback((type) => mummy.current.play({
          type,
          fps: Number(fps),
          loop: loop,
          resetAfterFinish: resetAfterFinish,
    }), [mummy, fps, loop, resetAfterFinish])

    const stop = type = useCallback(() => mummy.current.stop());
  
    return (
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SpriteSheet
                ref={mummy}
                source={MummySprite}
                columns={9}
                rows={6}
                height={200} // set either, none, but not both
                imageStyle={{ marginTop: -1 }}
                animations={{
                    walk: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                    appear: Array.from({ length: 15 }, (v, i) => i + 18),
                    die: Array.from({ length: 21 }, (v, i) => i + 33),
                }}
                />
            </View>
            <View style={{ paddingVertical: 30, paddingHorizontal: 30 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button onPress={() => play('walk')} title="walk" />
                <Button onPress={() => play('appear')} title="appear" />
                <Button onPress={() => play('die')} title="die" />
                <Button onPress={stop} title="stop" />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, marginRight: 10 }}>FPS</Text>
                <TextInput
                  style={{ flex: 1, borderBottomWidth: 1, fontSize: 16 }}
                  value={fps}
                  keyboardType="number-pad"
                  onChangeText={setFps}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, marginRight: 10 }}>Loop</Text>
                <Switch value={loop} onValueChange={setLoop} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, marginRight: 10 }}>Reset After Finish</Text>
                <Switch
                  value={resetAfterFinish}
                  onValueChange={setResetAfterFinish}
                />
              </View>
            </View>
          </SafeAreaView>
      );

} 