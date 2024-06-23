import React, { useCallback } from 'react';
import { View, Text, FlatList, Pressable, SectionList, StyleSheet, StatusBar } from 'react-native';
import { DrawerContentComponentProps, } from '@react-navigation/drawer';
import { commonStyles, fontStyles } from '../../styles';
import { Colors, Images } from '../../constants';
import FastImage from 'react-native-fast-image';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/responsive';
import { CrossIconSvg, DeleteAccountArrowSvg, DrawerAboutUsSvg, DrawerAppointmentSvg, DrawerChangePassword, DrawerContactUsSvg, DrawerDeleteAccountSvg, DrawerInsuranceSvg, DrawerListYourPractiseSvg, DrawerLogoutSvg, DrawerPencil, DrawerPoliciesSvg, DrawerPrescription, ForwardArrow } from '../../../assets/svg'
import { moderateScale } from 'react-native-size-matters';
import { TakeSpace, BorderBottom } from '../../components';
import { DrawerActions } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info'
import { helpers } from '../../utility/helpers'
import CustomModal from '../../components/custom-modal/custom-modal'
import DeleteModal from './delete-modal'
import LogoutModal from './logout-modal'
import { navigationHook } from '../../hooks/navigation.hook'
const Header = () => {
    const { navigateTo } = navigationHook()
    return (
        <View style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(10) }]}>
            <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(10) }]}>
                <View>
                    <FastImage
                        source={Images.profileImage}
                        style={{
                            width: moderateScale(64),
                            height: moderateScale(64),
                            borderRadius: moderateScale(20)
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </View>
                <View style={{ rowGap: moderateScale(10) }}>
                    <Text style={[fontStyles.notoSansSemiBold16, { color: Colors.offWhite }]}>Emily Wills</Text>
                    <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack75 }]}>+1 789955412</Text>
                </View>
            </View>
            <Pressable onPress={() => navigateTo('DrawerScreen', { screen: "MyProfile" })}>
                <DrawerPencil />
            </Pressable>
        </View>
    )
};
const DrawerComp = (props: DrawerContentComponentProps) => {

    const drawerData = [
        {
            title: "Main",
            data: [
                {
                    id: 1,
                    label: 'Appointments',
                    icon: DrawerAppointmentSvg,
                    onPress: () => handleDrawerPress({ screenName: 'DrawerAppointment' }),
                    isVisible: true
                },
                {
                    id: 2,
                    label: 'Insurance',
                    icon: DrawerInsuranceSvg,
                    onPress: () => handleDrawerPress({ screenName: 'DrawerInsuranceScreen' }),
                    isVisible: true
                },
                {
                    id: 3,
                    label: 'Prescription',
                    icon: DrawerPrescription,
                    onPress: () => handleDrawerPress({ screenName: 'DrawerPrescriptionScreen' }),
                    isVisible: true
                },
                {
                    id: 4,
                    label: 'List your practice',
                    icon: DrawerListYourPractiseSvg,
                    onPress: () => { },
                    isVisible: true
                },
            ]
        },
        {
            title: "Other",
            data: [
                {
                    id: 1,
                    label: 'About us',
                    icon: DrawerAboutUsSvg,
                    onPress: () => handleDrawerPress({ screenName: 'AboutUs' }),
                    isVisible: true
                },
                {
                    id: 2,
                    label: 'Policies',
                    icon: DrawerPoliciesSvg,
                    onPress: () => handleDrawerPress({ screenName: 'PoliciesScreen' }),
                    isVisible: true
                },
                {
                    id: 3,
                    label: 'Contact us',
                    icon: DrawerContactUsSvg,
                    onPress: () => handleDrawerPress({ screenName: 'ContactUs' }),
                    isVisible: true
                },
                {
                    id: 4,
                    label: 'Change password',
                    icon: DrawerChangePassword,
                    onPress: () => handleDrawerPress({ screenName: 'ChangePassword' }),
                    isVisible: true
                },
                {
                    id: 5,
                    label: 'Delete account',
                    icon: DrawerDeleteAccountSvg,
                    onPress: () => setModalVisible({ ...isModalVisible, delete: true }),
                    isVisible: true
                },
                {
                    id: 6,
                    label: 'Logout',
                    icon: DrawerLogoutSvg,
                    onPress: () => setModalVisible({ ...isModalVisible, logout: true }),
                    isVisible: true
                },
                // {
                //     id: 7,
                //     label: 'Login',
                //     icon: DrawerLogoutSvg,
                //     onPress: () => { },
                //     isVisible: true
                // },
            ]
        }
    ];

    const { navigation } = props;

    const [isModalVisible, setModalVisible] = React.useState({ delete: false, logout: false });
    const showStatusBarRef = React.useRef(false);

    const handleDrawerPress = React.useCallback(({ screenName }: { screenName: string }) => {
        navigation.navigate('DrawerScreen', { screen: screenName });
        // navigation.closeDrawer();
    }, [navigation]);

    const [imageHeight, setImageHeight] = React.useState(0);
    const [scrollY, setScrollY] = React.useState(0);

    const handleLayout = (event: any) => {
        const { height } = event.nativeEvent.layout;
        setImageHeight(height);
    };

    const handleScroll = React.useCallback((event: any) => {
        const y = event.nativeEvent.contentOffset.y;
        setScrollY(y);
        if (y > imageHeight) {
            showStatusBarRef.current = false;
        } else if (y <= imageHeight) {
            showStatusBarRef.current = true;
        }
    }, [setScrollY, showStatusBarRef, imageHeight]);


    const DrawerItem = useCallback(({ item }: { item: any }) => {
        const isLastItem = drawerData[drawerData?.length - 1]?.data[drawerData[drawerData?.length - 1].data?.length - 1]?.id === item?.id
        return (
            <>
                <Pressable style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(16) }]} onPress={item?.onPress}>
                    <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(15) }]}>
                        {React.createElement(item?.icon)}
                        <Text style={fontStyles.notoSansMedium14}>{item?.label}</Text>
                    </View>

                    {item?.label === "Delete account" ? <DeleteAccountArrowSvg /> : <ForwardArrow />}
                </Pressable>
                <View style={{ paddingHorizontal: moderateScale(16) }}>
                    {isLastItem ? null : <BorderBottom />}
                </View>
            </>
        )
    }, []);

    const renderDrawer = (navigation: any) => {
        return (
            <View style={commonStyles._flexOneBg(Colors.offWhite)}>
                <FastImage
                    source={Images.drawerBg}
                    style={{
                        width: SCREEN_WIDTH,
                        height: SCREEN_HEIGHT * 0.19,
                        justifyContent: 'flex-end',
                        paddingHorizontal: moderateScale(10)
                    }}
                    // onLayout={handleLayout}
                    resizeMode={FastImage.resizeMode.stretch}
                />
                <Pressable onPress={() => navigation.dispatch(DrawerActions.closeDrawer())} style={{ position: 'absolute', top: moderateScale(36), right: moderateScale(10) }}>
                    <CrossIconSvg />
                </Pressable>
                <View style={{ marginTop: moderateScale(-34) }}>
                    <Header />
                    <View style={{ paddingHorizontal: moderateScale(16), paddingTop: moderateScale(10) }}>
                        <BorderBottom />
                    </View>
                </View>
                <SectionList
                    sections={drawerData}
                    scrollEnabled={false}
                    contentContainerStyle={{ padding: moderateScale(10) }}
                    ItemSeparatorComponent={() => (<TakeSpace space={moderateScale(5)} />)}
                    renderSectionHeader={({ section: { title } }) => {
                        return (
                            <View style={{ padding: moderateScale(16), opacity: 0.75 }}>
                                <Text style={fontStyles.notoSansRegular12}>{title}</Text>
                            </View>
                        )
                    }}
                    renderItem={DrawerItem}
                />
                <TakeSpace space={moderateScale(5)} />
                <Text style={[fontStyles.notoSansRegular10, { position: 'absolute', left: 0, right: 0, marginLeft: "auto", marginRight: "auto", bottom: helpers.isIos ? moderateScale(80) : moderateScale(10), color: Colors.offBlack }, styles.appVersion]}>
                    {`App version ${DeviceInfo.getVersion()}`}
                </Text>
                <TakeSpace space={moderateScale(10)} />
            </View>
        )
    }
    return (
        <>
            {showStatusBarRef.current === true && scrollY >= 72 && <StatusBar barStyle="light-content" backgroundColor={Colors.primaryColor} />}
            <FlatList
                data={[1]}
                onScroll={handleScroll}
                keyExtractor={(item, index) => index.toString()}
                scrollEventThrottle={16}
                renderItem={({ item }) => renderDrawer(navigation)}
                showsVerticalScrollIndicator={false}
            />
            {isModalVisible.delete && (
                <CustomModal isVisible={isModalVisible.delete} closeModal={() => setModalVisible({ ...isModalVisible, delete: false })}>
                    <DeleteModal handleClose={() => setModalVisible({ ...isModalVisible, delete: false })} />
                </CustomModal>
            )}
            {isModalVisible.logout && (
                <CustomModal isVisible={isModalVisible.logout} closeModal={() => setModalVisible({ ...isModalVisible, logout: false })}>
                    <LogoutModal handleClose={() => setModalVisible({ ...isModalVisible, logout: false })} />
                </CustomModal>
            )}
        </>
    )
}

export default DrawerComp

const styles = StyleSheet.create({
    appVersion: {
        opacity: 0.5,
        zIndex: 2,
        textAlign: "center",
    },
})
