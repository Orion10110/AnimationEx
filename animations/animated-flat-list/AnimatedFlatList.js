import React, { useState, useRef } from "react";
import { View, SafeAreaView, Animated, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DATA } from './mock'
import { Header } from './Header'
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

const headerHeight = 50

const Button = ({ style }) => {
    return <Animated.View style={[ styles.btn , style]}>
        <Text style={{ color: '#fff'}}> Button </Text>
    </Animated.View>
}

export const AnimatedFlatList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6c757d" : "#ced4da";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  const positionY = useRef(new Animated.Value(0)).current;
  const animation = positionY.interpolate({
    inputRange: [-300, 0, Number.MAX_SAFE_INTEGER],
    outputRange: [0, 0, Number.MAX_SAFE_INTEGER], 
  });

  const translateFilter = Animated.diffClamp(animation, 0, 100);

  const animatedDiffClampY = Animated.diffClamp(positionY, 0, headerHeight);

    const progress = useRef(
      animatedDiffClampY.interpolate({
          inputRange: [0, headerHeight],
          outputRange: [0, 1],
          extrapolate: 'clamp',
      }),
  ).current;
  const translateY = Animated.multiply(progress, headerHeight * -1);







  const onScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: positionY } } }],
      { useNativeDriver: true },
  );

  return (
      <>
    <Header style={{
        zIndex: 10,
        transform: [{ translateY }],
      }}/>
    <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
      <View style={{ flex:1 , zIndex: 2}}>
        <Animated.FlatList
             style={{ zIndex: 1}}
             onScroll={onScroll}
             data={DATA}
             contentContainerStyle={styles.contentContainer}
             renderItem={renderItem}
             crollIndicatorInsets={{ top: 50 }}
             keyExtractor={(item) => `${item.id}`}
             extraData={selectedId}
             />
        </View>
        </View>
    </SafeAreaView>
    <Button style={{ transform: [{ translateY: translateFilter }]}}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: { paddingTop: 50, zIndex: 1 },
  item: {
      zIndex: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  btn: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 16,
    zIndex: 9,
    padding: 20, backgroundColor: "#0077b6", borderRadius: 50
  } 
});

