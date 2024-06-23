/*
This is used to register the new user
*/ 
import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View, BackHandler, Pressable } from 'react-native';
import { commonStyles, fontStyles } from '../../../styles';
import { Colors, Images } from '../../../constants';
import AuthBody from '../components/auth-body';
import { moderateScale } from 'react-native-size-matters';
import { InputFieldBox, TakeSpace } from '../../../components';
import { useRegisterHook } from './register-hook';
import { CloseEye, FilledBar, OpenEye, OutlineCalender, UnFilledBar } from '../../../../assets/svg';
import { AccountSecurityProps, PersonalInfoProps } from '../../type';
import { Dropdown } from 'react-native-element-dropdown';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/responsive';
import { helpers } from '../../../utility/helpers';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-modern-datepicker';

const PersonalInfo = (props: PersonalInfoProps) => {
    const { genderData, open, setOpen } = props
    return (
        <View style={{ rowGap: moderateScale(15) }}>
            <View>
                <Text style={styles.fieldTxt}>Personal information</Text>
                <View style={commonStyles.RowJSBAC}>
                    <FilledBar />
                    <UnFilledBar />
                    <UnFilledBar />
                </View>
            </View>
            <View>
                <InputFieldBox
                    label="Name"
                    placeHolder="Enter your name"
                    keyBoardType="default"
                />
            </View>
            <View style={commonStyles.flexRow}>
                <View style={{ width: '50%' }}>
                    <Text style={styles.fieldTxt}>Gender</Text>
                    <Dropdown
                        style={[styles.dropdownTest]}
                        placeholderStyle={[styles.placeHolder, { color: Colors.offBlack25 }]}
                        selectedTextStyle={[styles.placeHolder]}
                        activeColor={Colors.offBlack25}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={genderData}
                        dropdownPosition='auto'
                        search={false}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={"select"}
                        value={'Male'}
                        onChange={item => { }}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false, }}
                        iconStyle={{ tintColor: Colors.secondaryColor }}
                    />
                </View>
                <View style={{ width: '50%' }}>
                    <Text style={styles.fieldTxt}>Birthdate</Text>
                    <InputFieldBox
                        label={''}
                        placeHolder={"MM/DD/YYYY"}
                        keyBoardType="default"
                        value={''}
                        rootStyle={{ height: helpers.isIos ? moderateScale(46) : moderateScale(50), paddingHorizontal: moderateScale(10) }}
                        labelStyle={fontStyles.notoSansRegular12}
                        onPress={() => { setOpen(true) }}
                        onChangeText={(value) => { }}
                        Icon={OutlineCalender}
                    />
                </View>
            </View>
        </View>
    )
};

const ContactInfo = () => (
    <View style={{ rowGap: moderateScale(15) }}>
        <View>
            <Text style={styles.fieldTxt}>Contact information</Text>
            <View style={commonStyles.RowJSBAC}>
                <FilledBar />
                <FilledBar />
                <UnFilledBar />
            </View>
        </View>
        <View>
            <InputFieldBox
                label="Phone"
                placeHolder="+1 XXX XXX XXXX"
                keyBoardType="number-pad"
                isPhoneNo
            />
        </View>
        <View>
            <InputFieldBox
                label="Email address"
                placeHolder="Enter your email"
                keyBoardType="default"
            />
        </View>
    </View>
);

const AccountSecurity = (props: AccountSecurityProps) => {
    const { showCnfPassword, showPassword, toggleCnfPassword, togglePassword } = props;
    return (
        <View style={{ rowGap: moderateScale(15) }}>
            <View>
                <Text style={styles.fieldTxt}>Account Security</Text>
                <View style={commonStyles.RowJSBAC}>
                    <FilledBar />
                    <FilledBar />
                    <FilledBar />
                </View>
            </View>
            <View>
                <InputFieldBox
                    label="Password"
                    value="102939423487"
                    placeHolder="Enter your password"
                    secureTextEntry={!showPassword}
                    Icon={showPassword ? OpenEye : CloseEye}
                    onPress={togglePassword}
                />
            </View>
            <View>
                <InputFieldBox
                    label="Confirm Password"
                    value="102939423487"
                    placeHolder="Enter your password"
                    secureTextEntry={!showCnfPassword}
                    Icon={showCnfPassword ? OpenEye : CloseEye}
                    onPress={toggleCnfPassword}
                />
            </View>
        </View>
    );
};

const RegisterScreen = () => {
    const {
        navigateBack,
        navigateTo,
        showCnfPassword,
        showPassword,
        toggleCnfPassword,
        togglePassword,
        selectedIndex,
        setSelectedIndex,
        genderData,
        open, setOpen
    } = useRegisterHook();

    const getBodyBasedOnIndex = useCallback((index: number) => {
        switch (index) {
            case 0:
                return {
                    body: (
                        <PersonalInfo
                            genderData={genderData}
                            open={open}
                            setOpen={setOpen}
                        />
                    ),
                    onPress: () => setSelectedIndex(1),
                    btnLabel: 'Proceed',
                };
            case 1:
                return {
                    body: <ContactInfo />,
                    onPress: () => setSelectedIndex(2),
                    btnLabel: 'Proceed',
                };
            case 2:
                return {
                    body: (
                        <AccountSecurity
                            showCnfPassword={showCnfPassword}
                            showPassword={showPassword}
                            toggleCnfPassword={toggleCnfPassword}
                            togglePassword={togglePassword}
                        />
                    ),
                    onPress: () => navigateTo('VerifyOtp', { isFormForgotPass: false }),
                    btnLabel: 'Submit',
                };
            default:
                return {};
        }
    }, [showCnfPassword, showPassword, toggleCnfPassword, togglePassword, setSelectedIndex]);

    const handleBackPress = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        } else {
            navigateBack();
        }
        return true;
    };

    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => backHandler.remove();
    }, [selectedIndex]);

    const renderRegister = ({ index }: { index: number }) => (
        <>
            <AuthBody
                banner={Images.signupbanner}
                subHeadTxt="Discover a world of top doctors Sign up"
                headTxt="Sign up"
                bodyTxt=""
                btnLabel={getBodyBasedOnIndex(selectedIndex)?.btnLabel!}
                bottmTxt="Already have an account?"
                bottmTxt2="Login"
                onPressBottTxt={() => navigateTo('Login')}
                children={getBodyBasedOnIndex(selectedIndex)?.body}
                onPress={getBodyBasedOnIndex(selectedIndex)?.onPress!}
                spacing={moderateScale(20)}
                OnPressBack={handleBackPress}
            />
            <TakeSpace space={moderateScale(5)} />
        </>
    );

    return (
        <View style={commonStyles._flexGrowBg(Colors.offWhite)}>
            <FlatList
                data={[1]}
                bounces={false}
                renderItem={renderRegister}
                showsVerticalScrollIndicator={false}
            />

            {open &&

                <Modal
                    isVisible={open}
                    animationIn={'slideInUp'}
                    animationInTiming={800}
                    animationOut={'slideOutDown'}
                    backdropOpacity={0.3}
                    onBackdropPress={() => setOpen(false)}
                >
                    <View style={{ height: SCREEN_HEIGHT * 0.45 }}>
                        <DatePicker
                            options={styles.datePicker}
                            current={''}
                            // isGregorian={false}
                            selectorStartingYear={1900}
                            selectorEndingYear={new Date().getFullYear()}
                            selected={''}
                            mode="calendar"
                            onSelectedChange={(item: any) => {
                            }}
                            onDateChange={(item: any) => setTimeout(() => { setOpen(false) }, 1000)}
                            minuteInterval={30}
                            style={{ borderRadius: moderateScale(10) }}
                        />
                    </View>
                </Modal>
            }
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    fieldTxt: {
        ...fontStyles.notoSansSemiBold12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(50),
        width: SCREEN_WIDTH * 0.40,
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(4), borderWidth: moderateScale(0.8),
        borderColor: Colors.offBlack5
    },
    placeHolder: { ...fontStyles.notoSansSemiBold12, marginLeft: moderateScale(6) },
    datePicker: {
        selectedTextColor: Colors.offWhite,
        mainColor: Colors.primaryColor,
        backgroundColor: Colors.offWhite,
        textHeaderColor: Colors.primaryColor,
        textHeaderFontSize: moderateScale(14),
        headerFont: "NotoSans-Medium",
        textFontSize: moderateScale(12),
        daysAnimationDistance: moderateScale(10),
        defaultFont: "NotoSans-Medium",
        textSecondaryColor: Colors.offBlack,
    }
});
