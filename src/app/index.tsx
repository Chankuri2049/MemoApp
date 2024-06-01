import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Index = (): JSX.Element => {
  return(
    <View style={style.container}>

      <View style={style.header}>
        <View style={style.headerInner}>
          <Text style={style.headerTitle}>Memo App</Text>
          <Text style={style.headerRight}>ログアウト</Text>
        </View>
      </View>

      <View>

        <View style={style.memoListItem}>
          <View>
            <Text style={style.memoListItemTitle}>買い物リスト</Text>
            <Text style={style.memoListItemDate}>2023年10月1日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={style.memoListItem}>
          <View>
            <Text style={style.memoListItemTitle}>買い物リスト</Text>
            <Text style={style.memoListItemDate}>2023年10月1日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={style.memoListItem}>
          <View>
            <Text style={style.memoListItemTitle}>買い物リスト</Text>
            <Text style={style.memoListItemDate}>2023年10月1日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>
      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end',
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255,255,255,0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default Index