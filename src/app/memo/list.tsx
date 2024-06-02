import {View, StyleSheet} from 'react-native'
import Header from '../../components/Header'
import { Feather } from '@expo/vector-icons'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import React from 'react'

const List = (): JSX.Element => {
  return(
    <View style={style.container}>

      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>
      <Feather name='plus' size={40} />
      </CircleButton>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
})

export default List