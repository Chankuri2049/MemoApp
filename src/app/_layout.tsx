import { Stack } from 'expo-router'
import React from 'react'

const Layout = () => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#467FD3'
    },
    headerTintColor: '#ffffff',
    headerTitle: 'Meomo App',
    headerBackTitle: 'back',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    }
  }} />
}

export default Layout