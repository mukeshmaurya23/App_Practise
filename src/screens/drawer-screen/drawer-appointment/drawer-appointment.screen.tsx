import React from 'react';
import { commonStyles } from '../../../styles';
import { Colors } from '../../../constants';
import { helpers } from '../../../utility/helpers';
import { moderateScale } from 'react-native-size-matters';
import { FlatList, StyleSheet, View } from 'react-native';
import AppointmentCard from './components/appointment-card';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDrawerAppointment } from './drawer-appointment.hook';
import { AppoinmentListingData } from '../../../utility/constant';
import { BackArrowSvg, OrangeSvgFilter, SearchSvg } from '../../../../assets/svg';
import { CustomButton, DateInputField, Header, TakeSpace } from '../../../components';
import DrawerAppointmentFilter from './components/Filter/drawer-appointment-filter'

/*
This screen is used to to check the user appointment status
*/


const DrawerAppointment = () => {
    const { navigateTo, isVisible, closeModal, openModal } = useDrawerAppointment();
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.bgGreen)}>
                <Header
                    label='Appointments'
                    icon={BackArrowSvg}
                    rootStyle={{ height: moderateScale(60) }}
                />
                <View style={{ backgroundColor: Colors.offWhite }}>
                    <TakeSpace space={moderateScale(6)} />
                    <DateInputField
                        leftIcon={SearchSvg}
                        placeHolder='Serach here'
                        rightSideContent={<OrangeSvgFilter />}
                        rootStyle={{ width: '92%', alignSelf: 'center' }}
                        pressContStyle={[{ paddingHorizontal: moderateScale(10), borderColor: Colors.offBlack5 }]}
                        onPress={openModal}
                    />
                    <TakeSpace space={moderateScale(6)} />
                </View>
                <FlatList
                    data={AppoinmentListingData}
                    contentContainerStyle={{ paddingVertical: moderateScale(10) }}
                    keyExtractor={(item, index) => item.id.toString() || index.toString()}
                    ItemSeparatorComponent={() => (<TakeSpace space={moderateScale(4)} />)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <AppointmentCard item={item} index={index} />
                        )
                    }}
                />
            </View>
            <View style={styles.apptBtn}>
                <CustomButton
                    label='Book a new appointment'
                    btnWidth={'95%'}
                    extraCusBtnStyle={[commonStyles.transparentBtn, { alignSelf: 'center' }]}
                    extraCusTxtStyle={[{ color: Colors.primaryColor }]}
                    onPress={() => navigateTo('SearchAppointment')}
                />
            </View>
            <DrawerAppointmentFilter isVisible={isVisible} closeModal={closeModal} />
        </>
    )
}

export default DrawerAppointment

const styles = StyleSheet.create({
    apptBtn: { padding: moderateScale(10), backgroundColor: Colors.offWhite, borderTopWidth: moderateScale(1), borderTopColor: Colors.offBlack25 },
})