import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MAIN_ROUTES } from '../routes'

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Home Page</Text>
      <Button title="SPRITE SHEET" onPress={() => navigation.navigate(MAIN_ROUTES.SPRITE_SHEET)} />
      <Button title="LOTTIE" onPress={() => navigation.navigate(MAIN_ROUTES.LOTTIE)} />
      <Button title="ACCORDION" onPress={() => navigation.navigate(MAIN_ROUTES.ACCORDION)} />
      <Button title="LAYOUT" onPress={() => navigation.navigate(MAIN_ROUTES.LAYOUT)} />
      <Button title="ACTIVITY" onPress={() => navigation.navigate(MAIN_ROUTES.ACTIVITY)} />
      <Button title="FLAT_LIST" onPress={() => navigation.navigate(MAIN_ROUTES.FLAT_LIST)} />
      <Button title="SQUIRES" onPress={() => navigation.navigate(MAIN_ROUTES.SQUIRES)} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  info: { fontSize: 20 }
})
