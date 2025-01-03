import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../assets/colors'

const MainContainer = ({children,style,scrollEnabled}) => {
  return (
    <ScrollView scrollEnabled={scrollEnabled} showsVerticalScrollIndicator={false} contentContainerStyle={[styles.container,style]}>
        {children}
    </ScrollView>
  )
}

export default MainContainer

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        backgroundColor: colors.secondary
    }
})
