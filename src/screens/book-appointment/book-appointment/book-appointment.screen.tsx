// import React from 'react'
// import moment from 'moment'
// import { Colors } from '../../../constants'
// import { helpers } from '../../../utility/helpers'
// import { moderateScale } from 'react-native-size-matters'
// import { commonStyles, fontStyles } from '../../../styles'
// import { useBookAppointment } from './book-appointment.hook'
// import SlotAvailablity from '../components/slot-availablity'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { BackArrowSvg, CalendarDropdownSvg } from '../../../../assets/svg';
// import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
// import { CommonDropdown, CustomButton, CustomCheckBox, DateInputField, DatePicker, Header, TakeSpace, ToggleButton } from '../../../components'


// const BookaAppointment = () => {
//     const { drImage, drName, jobLocation, selected, setDate, setSlot, navigateTo, check, toggleCheck, setType, visible, setOpen, setClose, setCalDate, selecDate } = useBookAppointment();
//     const handleToggle = (selection: string) => console.log('Selected:', selection);

//     const HeadingTitle = React.memo(({ label }: { label: string }) => {
//         return (
//             <>
//                 <TakeSpace space={moderateScale(6)} />
//                 <Text style={fontStyles.notoSansSemiBold12}>{label}</Text>
//                 <TakeSpace space={moderateScale(6)} />
//             </>
//         )
//     });

//     return (
//         <>
//             <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
//             <View style={commonStyles._flexOneBg(Colors.offWhite)}>
//                 <Header
//                     label={drName}
//                     icon={BackArrowSvg}
//                     headText={jobLocation.split('|')?.[0]}
//                 />
//                 <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: moderateScale(16) }}>

//                     <HeadingTitle label='Insurance' />
//                     <CommonDropdown
//                         onChange={() => { }}
//                         errorMessg={''}
//                         placeHolder="Select your insurance"
//                     />

//                     <HeadingTitle label='Reason for your visit?' />
//                     <CommonDropdown
//                         onChange={() => { }}
//                         errorMessg={''}
//                         placeHolder="Select condition"
//                     />

//                     <HeadingTitle label='Date' />
//                     <DateInputField
//                         placeHolder='Select a preferred date'
//                         placeholderTextColor={Colors.offBlack25}
//                         pressContStyle={[{ backgroundColor: Colors.offBlack5, borderWidth: 0, paddingHorizontal: moderateScale(10) }]}
//                         rightSideContent={(<CalendarDropdownSvg width={moderateScale(20)} height={moderateScale(20)} fillColor={Colors.secondaryColor} />)}
//                         TxtStyle={[fontStyles.notoSansMedium12]}
//                         onPress={setOpen}
//                         value={moment(selecDate, 'YYYY-MM-DD').format('MM-DD-YYYY')}
//                         errorMessg=''
//                     />

//                     <HeadingTitle label='Reason' />
//                     <CommonDropdown
//                         onChange={() => { }}
//                         errorMessg={''}
//                         placeHolder="Select a reason for visit"
//                     />
//                     <HeadingTitle label='Have you visited before?' />
//                     <ToggleButton options={['Yes', 'No']} onToggle={(e) => setType('isVisited', e)} />
//                     <HeadingTitle label='Type of visit' />
//                     <ToggleButton options={['In person', 'Virtual']} onToggle={(e) => setType('visitType', e)} />
//                     <HeadingTitle label='Clinic address' />
//                     <CommonDropdown
//                         onChange={() => { }}
//                         errorMessg={''}
//                         placeHolder="Select address"
//                     />
//                     <TakeSpace space={moderateScale(8)} />
//                     <HeadingTitle label='Date & Time availability' />
//                     <SlotAvailablity selected={selected} setDate={setDate} setSlot={setSlot} />
//                     <TakeSpace space={moderateScale(8)} />
//                     <Pressable style={[styles.declareTxt]} onPress={toggleCheck}>
//                         <View style={{ paddingTop: moderateScale(3) }}>
//                             <CustomCheckBox onPress={toggleCheck} selected={check} />
//                         </View>
//                         <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack75, flexShrink: 1 }]} numberOfLines={2} ellipsizeMode='tail'>
//                             I Certify that the information provided by me is accurate for insurance and payment.
//                         </Text>
//                     </Pressable>
//                     <TakeSpace space={moderateScale(10)} />
//                     <DatePicker
//                         isVisible={visible}
//                         closeModal={setClose}
//                         setDate={setCalDate}
//                     />
//                 </ScrollView>
//                 <View style={styles.apptBtn}>
//                     <CustomButton
//                         label='Book appointment'
//                         btnWidth={'95%'}
//                         extraCusBtnStyle={[{ alignSelf: 'center' }]}
//                         onPress={() => navigateTo('SuccessModalScreen', {
//                             message: ''
//                         })}
//                     />
//                 </View>
//             </View>
//         </>
//     )
// }

// export default BookaAppointment

// const styles = StyleSheet.create({
//     apptBtn: { padding: moderateScale(10), backgroundColor: Colors.offWhite, borderTopWidth: moderateScale(1), borderTopColor: Colors.offBlack25 },
//     declareTxt: { ...commonStyles.flexRow, paddingHorizontal: moderateScale(8), columnGap: moderateScale(6), width: '90%' }
// })

import React from 'react';
import { Formik } from 'formik';
import { Colors } from '../../../constants';
import { helpers } from '../../../utility/helpers';
import { validate } from '../../../utility/validation';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../styles';
import { useBookAppointment } from './book-appointment.hook';
import SlotAvailablity from '../components/slot-availablity';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DropdownChangeHandler, FormSubmitHandler } from '../../type';
import { BackArrowSvg, CalendarDropdownSvg } from '../../../../assets/svg';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CommonDropdown, CustomButton, CustomCheckBox, DateInputField, DatePicker, ErrorHelper, Header, TakeSpace, ToggleButton } from '../../../components';



const BookaAppointment = () => {
    const {
        drName,
        jobLocation,
        selected,
        setDate,
        setSlot,
        navigateTo,
        visible,
        setOpen,
        setClose,
        initialValues,
        setCalDate
    } = useBookAppointment();

    const HeadingTitle = React.useCallback(({ label }: { label: string }) => (
        <>
            <TakeSpace space={moderateScale(6)} />
            <Text style={fontStyles.notoSansSemiBold12}>{label}</Text>
            <TakeSpace space={moderateScale(6)} />
        </>
    ), []);


    const handleDropdownChange: DropdownChangeHandler = React.useCallback((field, value, setFieldValue) => {
        setFieldValue(field, value.value);
    }, []);

    const handleFormSubmit: FormSubmitHandler = React.useCallback((values, { setSubmitting }) => {
        navigateTo('SuccessModalScreen', {
            message: '',
        });
        setSubmitting(false);
    }, [navigateTo]);


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validate.AppointmentSchema}
            onSubmit={handleFormSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched, isValid }) => (
                <>
                    <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
                    <View style={commonStyles._flexOneBg(Colors.offWhite)}>
                        <Header
                            label={drName}
                            icon={BackArrowSvg}
                            headText={jobLocation.split('|')?.[0]}
                        />
                        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: moderateScale(16) }}>
                            <HeadingTitle label='Insurance' />
                            <CommonDropdown
                                select={values.insurance}
                                onBlur={() => handleBlur('insurance')}
                                onChange={(value) => handleDropdownChange('insurance', value, setFieldValue)}
                                errorMessg={touched.insurance && errors.insurance ? errors.insurance : ''}
                                placeHolder="Select your insurance"
                            />

                            <HeadingTitle label='Reason for your visit?' />
                            <CommonDropdown
                                select={values.reasonForVisit}
                                onBlur={() => handleBlur('reasonForVisit')}
                                onChange={(value) => handleDropdownChange('reasonForVisit', value, setFieldValue)}
                                errorMessg={touched.reasonForVisit && errors.reasonForVisit ? errors.reasonForVisit : ''}
                                placeHolder="Select condition"
                            />

                            <HeadingTitle label='Date' />
                            <DateInputField
                                placeHolder='Select a preferred date'
                                placeholderTextColor={Colors.offBlack25}
                                pressContStyle={[{ backgroundColor: Colors.offBlack5, borderWidth: 0, paddingHorizontal: moderateScale(10) }]}
                                rightSideContent={(<CalendarDropdownSvg width={moderateScale(20)} height={moderateScale(20)} fillColor={Colors.secondaryColor} />)}
                                TxtStyle={[fontStyles.notoSansMedium12]}
                                onPress={setOpen}
                                value={values.date}
                                errorMessg={touched.date && errors.date ? errors.date : ''}
                            />

                            <HeadingTitle label='Reason' />
                            <CommonDropdown
                                select={values.reason}
                                onBlur={() => handleBlur('reason')}
                                onChange={(value) => handleDropdownChange('reason', value, setFieldValue)}
                                errorMessg={touched.reason && errors.reason ? errors.reason : ''}
                                placeHolder="Select a reason for visit"
                            />

                            <HeadingTitle label='Have you visited before?' />
                            <ToggleButton
                                options={['Yes', 'No']}
                                onToggle={(e) => setFieldValue('isVisited', e)}
                            />

                            <HeadingTitle label='Type of visit' />
                            <ToggleButton
                                options={['In person', 'Virtual']}
                                onToggle={(e) => setFieldValue('visitType', e)}
                            />

                            <HeadingTitle label='Clinic address' />
                            <CommonDropdown
                                select={values.address}
                                onBlur={() => handleBlur('address')}
                                onChange={(value) => handleDropdownChange('address', value, setFieldValue)}
                                errorMessg={touched.address && errors.address ? errors.address : ''}
                                placeHolder="Select address"
                            />

                            <TakeSpace space={moderateScale(8)} />
                            <HeadingTitle label='Date & Time availability' />
                            <SlotAvailablity selected={selected} setDate={setDate} setSlot={setSlot} />
                            <TakeSpace space={moderateScale(8)} />
                            <Pressable style={[styles.declareTxt]} onPress={() => setFieldValue('certify', !values.certify)}>
                                <View style={{ paddingTop: moderateScale(3) }}>
                                    <CustomCheckBox onPress={() => setFieldValue('certify', !values.certify)} selected={values.certify} />
                                </View>
                                <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack75, flexShrink: 1 }]} numberOfLines={2} ellipsizeMode='tail'>
                                    I certify that the information provided by me is accurate for insurance and payment.
                                </Text>
                            </Pressable>
                            {touched.certify && errors.certify ? (
                                <ErrorHelper errorMsg={'please accept declaration box'} rootStyle={[{ alignSelf: 'center' }]} />
                            ) : null}

                            <TakeSpace space={moderateScale(10)} />
                            <DatePicker
                                isVisible={visible}
                                closeModal={setClose}
                                setDate={setCalDate}
                            />
                        </ScrollView>
                        <View style={styles.apptBtn}>
                            <CustomButton
                                label='Book appointment'
                                btnWidth={'95%'}
                                extraCusBtnStyle={[{ alignSelf: 'center' }]}
                                onPress={handleSubmit}
                                disabled={!isValid}
                            />
                        </View>
                    </View>
                </>
            )}
        </Formik>
    );
}

export default BookaAppointment;

const styles = StyleSheet.create({
    apptBtn: { padding: moderateScale(10), backgroundColor: Colors.offWhite, borderTopWidth: moderateScale(1), borderTopColor: Colors.offBlack25, },
    declareTxt: { ...commonStyles.flexRow, paddingHorizontal: moderateScale(8), columnGap: moderateScale(6), width: '90%', },
});
