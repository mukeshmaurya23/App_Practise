import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowSvg } from '../../../../assets/svg'
import { Header } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { helpers } from '../../../utility/helpers'
import { Colors } from '../../../constants'
import { moderateScale } from 'react-native-size-matters'
import RenderHTML from 'react-native-render-html'
import { SCREEN_WIDTH } from '../../../constants/responsive'
const privacy_policy = `<h4>Privacy Policy</h4>`
const PrivacyPolicies = () => {
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Privacy Policy'
                headText=''
                icon={BackArrowSvg}
            />
            <View style={{ padding: moderateScale(16), flex: 1, backgroundColor: Colors.offWhite }}>
                <RenderHTML
                    baseStyle={{ color: Colors.offBlack50 }}
                    contentWidth={SCREEN_WIDTH}
                    source={{
                        html: privacy_policy
                    }}
                />
            </View>
        </>
    )
}

export default PrivacyPolicies

const styles = StyleSheet.create({})