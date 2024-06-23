import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowSvg } from '../../../../assets/svg'
import { Colors } from '../../../constants'
import { helpers } from '../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../../components'
const ListYourPracticeDetailsPage = () => {
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Practice your list'
                headText=''
                icon={BackArrowSvg}
            />
        </>
    )
}

export default ListYourPracticeDetailsPage

const styles = StyleSheet.create({})