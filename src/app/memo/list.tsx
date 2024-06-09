import {View, StyleSheet} from 'react-native'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import React from 'react'
import { router } from 'expo-router'

const handlePress = () => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  return(
    <View style={style.container}>

      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name='plus' size={40} color='#ffffff'/>
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