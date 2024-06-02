import {View, StyleSheet} from 'react-native'
import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'
import CircleButton from '../components/CircleButton'
import React from 'react'

const Index = (): JSX.Element => {
  return(
    <View style={style.container}>

      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>+</CircleButton>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
})

export default Index