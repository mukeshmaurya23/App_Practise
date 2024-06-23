import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles, fontStyles } from '../../../styles'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../../constants'
import { BookAppointmentSvg, FindHolisticSvg, HeartGreenSvg, OfficeTelepathSvg } from '../../../../assets/svg'
import StepperSvg from '../../../../assets/svg/common/stepper-svg'
import { TakeSpace } from '../../../components'

//This component is used in the Home screen to display the OurProcessScreen. and the process of booking an appointment.
const OurProcessScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={[commonStyles.flexRow, { columnGap: moderateScale(6) }]}>
                <HeartGreenSvg />
                <View style={{ width: "90%" }}>
                    <Text style={[fontStyles.notoSansSemiBold16]}>Our process</Text>
                    <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack50 }]}>Browse 15+ specialities of our fields</Text>
                </View>
            </View>
            <TakeSpace space={moderateScale(10)} />
            <View style={{ position: "relative" }}>
                <View style={{ position: "absolute" }}>
                    <View style={[commonStyles.RowJSBAC, { top: moderateScale(24) }]}>
                        <View style={{ left: moderateScale(40) }}>
                            <FindHolisticSvg />
                        </View>
                        <View style={{ right: moderateScale(-120) }}>
                            <Text style={[fontStyles.notoSansSemiBold16, { textAlign: "center", width: moderateScale(140) }]}>Find Holistic Practitioners</Text>
                        </View>
                    </View>
                </View>
                <View style={{ position: "absolute" }}>
                    <View style={[commonStyles.RowJSBAC, { top: moderateScale(124) }]}>
                        <View style={{ left: moderateScale(0) }}>
                            <Text style={[fontStyles.notoSansSemiBold16, { textAlign: "center", width: moderateScale(140) }]}>Book appointment</Text>
                        </View>
                        <View style={{ right: moderateScale(-80) }}>
                            <BookAppointmentSvg />
                        </View>

                    </View>
                </View>
                <View style={{ position: "absolute" }}>
                    <View style={[commonStyles.RowJSBAC, { top: moderateScale(230) }]}>
                        <View style={{ left: moderateScale(40) }}>
                            <OfficeTelepathSvg />
                        </View>
                        <View style={{ right: moderateScale(-120) }}>
                            <Text style={[fontStyles.notoSansSemiBold16, { textAlign: "center", width: moderateScale(150) }]}>Office / Telehealth</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <StepperSvg />
                </View>
            </View>
            <TakeSpace space={moderateScale(10)} />
        </View>
    )
}

export default OurProcessScreen

const styles = StyleSheet.create({
    mainContainer: {
        padding: moderateScale(16),
        backgroundColor: Colors.offWhite,
        marginTop: moderateScale(10)
    },
})