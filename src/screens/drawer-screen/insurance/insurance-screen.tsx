import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../../components'
import { BackArrowSvg } from '../../../../assets/svg'
import { Colors } from '../../../constants'
import { helpers } from '../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import NoInternetScreen from '../../../components/no-internet-connection/no-internet-connection'

const DrawerInsuranceScreen = () => {
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Insurance'
                headText=''
                icon={BackArrowSvg}
            />
            <NoInternetScreen />
        </>
    )
}

export default DrawerInsuranceScreen

const styles = StyleSheet.create({})