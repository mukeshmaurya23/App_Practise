import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { Colors } from '../../../../constants'
import { commonStyles, fontStyles } from '../../../../styles'
import FastImage from 'react-native-fast-image'
import { moderateScale } from 'react-native-size-matters'
import { OutlineCalender } from '../../../../../assets/svg'
import BorderBottom from '../../../../components/bottom-border/BorderBottom'
import { helpers } from '../../../../utility/helpers'
import { navigationHook } from '../../../../hooks/navigation.hook'

interface AppointmentCardProps {
    id: number;
    name: string;
    reason: string;
    image: string;
    status: string;
};




const AppointmentCard = ({ item, index }: { item: AppointmentCardProps, index: number }) => {
    const { navigateTo } = navigationHook();
    const { name, image, reason, status, id } = item;

    const getAppmntStaus = useCallback((status: string) => {
        return helpers.statusColors[status] || { textColor: Colors.offBlack, backColor: Colors.offBlack5 };
    }, [status]);

    return (
        <Pressable style={styles.container} onPress={() => navigateTo('AppointmentDetails', {
            drImage: image ? image : 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
            drName: 'Rohit Sharma',
            jobLocation: 'Dentist | New York, NY',
            rating: 4,
            status
        })}>
            <View style={[commonStyles.flexRow, { padding: moderateScale(4) }]}>
                <View style={{ width: '75%', ...commonStyles.RowJFSAC, columnGap: moderateScale(12), paddingTop: moderateScale(10) }}>
                    <View style={{ width: '26%' }}>
                        <FastImage
                            source={{ uri: image ? image : 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg' }}
                            style={styles.imgStyle}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    <View style={{ width: '74%', rowGap: moderateScale(6) }}>
                        <Text style={fontStyles.notoSansSemiBold16}>{name ? name : 'Rohit Sharma'}</Text>
                        <Text style={fontStyles.notoSansRegular12}>{reason ? reason : 'Reason - High blood pressure/ Hypertension '}</Text>
                    </View>
                </View>
                <View style={{ width: '25%' }}>
                    <View style={{ backgroundColor: getAppmntStaus(status)?.backColor, ...styles.statusCont }}>
                        <Text style={[fontStyles.notoSansRegular10, { color: getAppmntStaus(status)?.textColor }]}>{status ? status : 'Rescheduled'}</Text>

                    </View>
                </View>
            </View>
            <BorderBottom />
            <View style={[styles.schedulTxt]}>
                <OutlineCalender width={moderateScale(15)} height={moderateScale(15)} fillColor={Colors.offBlack75} />
                <Text style={fontStyles.notoSansRegular12}>Scheduled for -</Text>
                <Text style={fontStyles.notoSansMedium12}>8:00 am | May 30</Text>
            </View>
        </Pressable>
    )
}

export default AppointmentCard

const styles = StyleSheet.create({
    imgStyle: { width: moderateScale(70), height: moderateScale(70), borderRadius: moderateScale(4), },
    container: { backgroundColor: Colors.offWhite, padding: moderateScale(10) },
    schedulTxt: { ...commonStyles.RowJFSAC, columnGap: moderateScale(6), paddingTop: moderateScale(10) },
    statusCont: { padding: moderateScale(6), borderRadius: moderateScale(4), ...commonStyles.centerJCAC }
})