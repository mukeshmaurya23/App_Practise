import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../../constants'
import { helpers } from '../../../../utility/helpers'
import { useRescheduleHook } from './reschedule-hook'
import { BackArrowSvg } from '../../../../../assets/svg'
import { moderateScale } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../../styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BorderBottom, CustomButton, DoctorInfoCard, Header } from '../../../../components'
import SlotAvailablity from '../../../book-appointment/components/slot-availablity'

const ReshceduleScreen = () => {
    const { drImage, drName, jobLocation, spokenLang, setDate, setSlot, selected, navigateTo } = useRescheduleHook();
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.offWhite)}>
                <Header
                    label={drName}
                    headText={jobLocation.split('|')?.[0]}
                    icon={BackArrowSvg}
                />
                <View style={{ padding: moderateScale(16), rowGap: moderateScale(20) }}>
                    <Text style={fontStyles.notoSansSemiBold16}>Reschedule Appointment</Text>
                    <View style={{ rowGap: moderateScale(5) }}>
                        <DoctorInfoCard drImage={drImage} drName={drName} jobLocation={jobLocation} spokenLang={spokenLang} />
                        <BorderBottom />
                    </View>
                    <Text style={fontStyles.notoSansSemiBold12}>Date & Time availability</Text>
                    <SlotAvailablity selected={selected} setDate={setDate} setSlot={setSlot} />
                </View>
            </View>
            <View style={styles.BookBtnCont}>
                <CustomButton
                    label='Book again'
                    extraCusBtnStyle={[{ width: '95%', alignSelf: 'center' }]}
                    onPress={() => navigateTo('SuccessModalScreen', { message: '' })}
                />
            </View>
        </>
    )
}

export default ReshceduleScreen

const styles = StyleSheet.create({
    BookBtnCont: { padding: moderateScale(12), borderTopColor: Colors.offBlack25, borderTopWidth: moderateScale(1), backgroundColor: Colors.offWhite }
})