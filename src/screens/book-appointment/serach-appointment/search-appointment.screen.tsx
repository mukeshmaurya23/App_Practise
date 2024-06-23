import React from 'react';
import moment from 'moment';
import { Colors } from '../../../constants';
import { helpers } from '../../../utility/helpers';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigationHook } from '../../../hooks/navigation.hook';
import { BackArrowSvg, CalendarDropdownSvg } from '../../../../assets/svg';
import { CommonDropdown, CustomButton, DateInputField, DatePicker, Header, TakeSpace, ToggleButton } from '../../../components';
/*
This screen is used to take the keys for filter the lsiting of schedule appointment listing 
*/
const SearchAppointment = () => {

    const { navigateTo } = navigationHook();

    const [Type, setType] = React.useState('In Person');
    const [visible, setVisible] = React.useState(false);
    const [selecDate, setSelctDate] = React.useState(moment(new Date()).format('YYYY-MM-DD'));


    const setOpen = () => setVisible(true);
    const setClose = () => setVisible(false);
    const setDate = (value: string) => setSelctDate(value);
    const handleToggle = (e: string) => { (e === Type) ? null : setType(e) };

    const HeadingTitle = React.memo(({ label }: { label: string }) => {
        return (
            <>
                <TakeSpace space={moderateScale(6)} />
                <Text style={fontStyles.notoSansSemiBold12}>{label}</Text>
                <TakeSpace space={moderateScale(6)} />
            </>
        );
    });

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.offWhite)}>
                <Header label={'Book an appointment'} icon={BackArrowSvg} />
                <View style={{ padding: moderateScale(16) }}>
                    <HeadingTitle label='City, Zip Code' />
                    <CommonDropdown placeHolder="Select your city, zip code" />
                    <HeadingTitle label='Doctor, specialty' />
                    <CommonDropdown placeHolder="Select a doctor, specialty, etc..." />
                    <HeadingTitle label='Date' />
                    <DateInputField
                        placeHolder='Select a preferred date'
                        placeholderTextColor={Colors.offBlack25}
                        pressContStyle={[{ backgroundColor: Colors.offBlack5, borderWidth: 0, paddingHorizontal: moderateScale(10) }]}
                        rightSideContent={(<CalendarDropdownSvg width={moderateScale(20)} height={moderateScale(20)} fillColor={Colors.secondaryColor} />)}
                        TxtStyle={[fontStyles.notoSansMedium12]}
                        onPress={setOpen}
                        value={moment(selecDate, 'YYYY-MM-DD').format('MM-DD-YYYY')}
                        editable={!selecDate}
                    />
                    <HeadingTitle label='Reason' />
                    <CommonDropdown placeHolder="Select a reason for visit" />
                    <HeadingTitle label='Type of visit' />
                    <ToggleButton
                        options={['In Person', 'Virtual']}
                        onToggle={handleToggle}
                        textStyle={fontStyles.notoSansMedium12}
                        containerStyle={{ height: moderateScale(50) }}
                    />
                </View>
            </View>
            <View style={styles.apptBtn}>
                <CustomButton
                    label='Search appointment'
                    btnWidth={'95%'}
                    extraCusBtnStyle={[{ alignSelf: 'center' }]}
                    onPress={() => navigateTo('BookAppointmentListing', { searchKey: 'Fever' })}
                />
            </View>
            <DatePicker
                isVisible={visible}
                closeModal={setClose}
                setDate={setDate}
            />
        </>
    );
}

export default SearchAppointment;

const styles = StyleSheet.create({
    apptBtn: {
        padding: moderateScale(10),
        backgroundColor: Colors.offWhite,
        borderTopWidth: moderateScale(1),
        borderTopColor: Colors.offBlack25
    },
});
