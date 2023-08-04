import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { COLORS, icons, images, SIZES } from "../constants";

const Home = () => {

  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}> 
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home