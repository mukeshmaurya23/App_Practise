import React from 'react'
import { Colors } from '../../../constants'
import { helpers } from '../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../styles'
import SlotAvailablity from '../components/slot-availablity'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useScheduleAppointment } from './schedule-appointment.hook'
import GoogleMaps from '../../../components/google-maps/google-maps'
import { BackArrowSvg, BackGroundLine } from '../../../../assets/svg'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { BorderBottom, CustomButton, DoctorInfoCard, Header, TakeSpace } from '../../../components'

/*
This screen is sued to seeteh availbality dr to schedule a appointment
*/
const ScheduleAppointment = () => {
    const { drImage, drName, jobLocation, spokenLang, selected, setDate, setSlot, showTxt, toggleShowTxt, navigateTo } = useScheduleAppointment();

    const aboutTxt = 'Alexander was raised in Atlanta Georgia. He graduated from the University of Texas where she earned her degree in human biology. Dr. Alexander completed his dental training at the Medical College of Georgia, followed by a general practice residency treating mainly special dentistry. Alexander was raised in Atlanta Georgia. He graduated from the University of Texas where he earned his degree in human biology. Dr. Alexander completed his dental training at the Medical College of Georgia, followed by a general practice residency treating mainly special dentistry.'


    const SectionHeader = React.memo(({ label }: { label: string }) => {
        return (
            <>
                <TakeSpace space={moderateScale(8)} />
                <Text style={fontStyles.notoSansSemiBold14}>{label}</Text>
            </>
        )
    });



    const renderScheduleApptment = () => {

        return (
            <>
                <View style={{ padding: moderateScale(16) }}>
                    <DoctorInfoCard drImage={drImage} drName={drName} jobLocation={jobLocation} spokenLang={spokenLang} />
                    <BorderBottom />
                    <SectionHeader label='Appointment availability' />
                    <Text style={[fontStyles.notoSansRegular10,{paddingTop:moderateScale(2)}]}>For next 7 days</Text>
                    <TakeSpace space={moderateScale(8)} />
                    <SlotAvailablity selected={selected} setDate={setDate} setSlot={setSlot} hideIcon disabled label={'Available'} />
                </View>
                <BackGroundLine />
                <View style={{ padding: moderateScale(16) }}>
                    <SectionHeader label='About' />
                    <TakeSpace space={moderateScale(0)} />
                    <Text style={fontStyles.notoSansRegular12}>
                        {aboutTxt.length > 40 && !showTxt
                            ? `${aboutTxt.substring(0, 300)}...`
                            : aboutTxt
                        }
                    </Text>
                    {aboutTxt.length > 40 && (
                        <Pressable style={{ alignSelf: 'flex-end' }} onPress={toggleShowTxt}>
                            <Text style={[fontStyles.notoSansSemiBold12, { textDecorationLine: 'underline', color: Colors.secondaryColor }]}>{showTxt ? 'View Less' : 'View More'}</Text>
                        </Pressable>
                    )}
                    <TakeSpace space={moderateScale(6)} />
                    <SectionHeader label='Insurance' />
                    <Text style={[styles.commTxt]}>UHC, Humana, Aetna</Text>
                    <SectionHeader label='Education' />
                    <Text style={[styles.commTxt]}>Medical School - St. George’s University School of Medicine, Doctor of Medicine</Text>
                </View>
                <BackGroundLine />
                <View style={{ padding: moderateScale(16) }}>
                    <SectionHeader label='Practice location' />
                    <Text style={[styles.commTxt]}>14 Street Medical P.C. 110 W 14th St New York, NY 10011</Text>
                </View>
                <View style={commonStyles.centerJCAC}>
                    <GoogleMaps />
                </View>
                <TakeSpace space={moderateScale(16)} />
            </>
        )
    }

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.offWhite)}>
                <Header
                    label={drName}
                    headText={jobLocation.split('|')?.[0]}
                    icon={BackArrowSvg}
                />
                <FlatList
                    data={[1]}
                    renderItem={renderScheduleApptment}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.apptBtn}>
                    <CustomButton
                        label='Schedule an appointment'
                        btnWidth={'95%'}
                        extraCusBtnStyle={[{ alignSelf: 'center' }]}
                        onPress={() => navigateTo('BookaAppointment', {
                            drImage, drName, jobLocation
                        })}
                    />
                </View>
            </View>
        </>
    )
}

export default ScheduleAppointment

const styles = StyleSheet.create({
    apptBtn: { padding: moderateScale(10), backgroundColor: Colors.offWhite, borderTopWidth: moderateScale(1), borderTopColor: Colors.offBlack25 },
    commTxt: { ...fontStyles.notoSansRegular12, opacity: 0.75 }
})