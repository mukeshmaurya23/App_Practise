import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import FastImage from 'react-native-fast-image'
import { commonStyles, fontStyles } from '../../../../styles';
import { moderateScale } from 'react-native-size-matters';
import { BorderBottom, CustomButton, TakeSpace } from '../../../../components';
import { DrVisitTypeSvg, OutlineCalender, TranlsationSvg } from '../../../../../assets/svg';
import { Colors } from '../../../../constants';
import { navigationHook } from '../../../../hooks/navigation.hook';

interface BookAppointmentCardProps {
    id: number;
    name: string;
    VisitType: string;
    jobLocation: string;
    image: string;
    spokenLang: string[];
};




const BookAppointmentCard = ({ item, index }: { item: BookAppointmentCardProps, index: number }) => {
    const { navigateTo } = navigationHook();
    const { name, image, VisitType, spokenLang, id, jobLocation } = item

    const renderItem = useCallback(({ item, index }: { item: string, index: number }) => {
        return (<Text style={fontStyles.notoSansRegular12}>{item},</Text>)
    }, [spokenLang])


    return (
        <View style={styles.container}>
            <View style={[commonStyles.flexRow, { padding: moderateScale(4) }]}>
                <View style={{ width: '100%', ...commonStyles.RowJFSAC, columnGap: moderateScale(8), paddingTop: moderateScale(10) }}>
                    <View style={{ width: '30%' }}>
                        <FastImage
                            source={{ uri: image ? image : 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg' }}
                            style={styles.imgStyle}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    <View style={{ width: '70%', rowGap: moderateScale(8) }}>
                        <Text style={fontStyles.notoSansSemiBold16}>{name ? name : 'Rohit Sharma'}</Text>
                        <Text style={fontStyles.notoSansRegular12}>{jobLocation}</Text>
                        <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}>
                            <DrVisitTypeSvg />
                            <Text style={fontStyles.notoSansRegular12}>{VisitType}</Text>
                        </View>
                        <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}>
                            <TranlsationSvg />
                            <FlatList
                                style={{ flexDirection: 'row', columnGap: moderateScale(6) }}
                                data={spokenLang}
                                renderItem={renderItem}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <BorderBottom />
            <View style={[styles.schedulTxt]}>
                <OutlineCalender width={moderateScale(15)} height={moderateScale(15)} fillColor={Colors.offBlack75} />
                <Text style={fontStyles.notoSansRegular12}>Next slot available-</Text>
                <Text style={fontStyles.notoSansMedium12}>8:00 am | Tomorrow</Text>
            </View>
            <TakeSpace space={moderateScale(10)} />
            <View style={{}}>
                <CustomButton
                    label='Schedule an appointment'
                    btnWidth={'95%'}
                    paddingProp={moderateScale(8)}
                    onPress={() => navigateTo('ScheduleAppointment', {
                        drName: name ? name : 'Rohit sharma',
                        drImage: image ? image : 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
                        jobLocation,
                        spokenLang
                    })}
                    extraCusBtnStyle={[{ alignSelf: 'center', backgroundColor: Colors.primiary15 }]}
                    extraCusTxtStyle={[{ color: Colors.primaryColor }]}
                />
            </View>
            <TakeSpace space={moderateScale(2)} />
        </View>
    )
}

export default BookAppointmentCard

const styles = StyleSheet.create({
    imgStyle: { width: moderateScale(90), height: moderateScale(90), borderRadius: moderateScale(4), },
    container: { backgroundColor: Colors.offWhite, padding: moderateScale(10) },
    schedulTxt: { ...commonStyles.RowJFSAC, columnGap: moderateScale(6), paddingTop: moderateScale(10), paddingLeft: moderateScale(6) },
    statusCont: { padding: moderateScale(6), borderRadius: moderateScale(4), ...commonStyles.centerJCAC }
})