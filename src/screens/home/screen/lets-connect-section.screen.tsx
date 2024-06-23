import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { Colors, Images } from '../../../constants'
import { HeartGreenSvg } from '../../../../assets/svg'
import { commonStyles, fontStyles } from '../../../styles'
import FastImage from 'react-native-fast-image'
import { CustomButton, TakeSpace } from '../../../components'
import { SCREEN_WIDTH } from '../../../constants/responsive'
import LetsCOnnectSvg from '../../../../assets/svg/common/letsConnectSvg'
import { navigationHook } from '../../../hooks/navigation.hook'
//This is a basic screen component which is used to display the LetsConnectScreen in the Home screen.
const LetsConnectScreen = () => {
    const { navigateTo } = navigationHook()
    return (
        <View style={styles.mainContainer}>
            <View style={[commonStyles.flexRow, { columnGap: moderateScale(6) }]}>
                <HeartGreenSvg />
                <View style={{ width: "90%" }}>
                    <Text style={[fontStyles.notoSansSemiBold16]}>Let’s connect your practices</Text>
                    <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack50 }]}>Grow your reach and experience.Browse 15+ specialities of our fields</Text>
                </View>
            </View>
            {/* <FastImage
                source={Images.letsConnect}
                style={styles.imgStyle}
                resizeMode={FastImage.resizeMode.cover}
            /> */}
            <View style={{ alignSelf: "center", paddingVertical: moderateScale(6) }}>
                <LetsCOnnectSvg />
            </View>
            <TakeSpace space={moderateScale(10)} />
            <CustomButton
                label={'List your practice'}
                onPress={() => navigateTo("HomePageScreen", { screen: "ListYourPracticeDetailsPage" })}
                customTxtStyle={[fontStyles.notoSansBold14, { color: Colors.primaryColor }]}
                customBtnStyle={[{ alignSelf: 'center' }]}
                extraCusBtnStyle={[commonStyles.transparentBtn]}
                extraCusTxtStyle={[{ color: Colors.primaryColor, }]}
                btnWidth={"96%"}
            />
        </View>
    )
}

export default LetsConnectScreen

const styles = StyleSheet.create({
    mainContainer: {
        padding: moderateScale(16),
        backgroundColor: Colors.offWhite,
        marginTop: moderateScale(10)
    },
    imgStyle: {
        width: moderateScale(189),
        height: moderateScale(207),
        marginTop: moderateScale(20)
    }
})