import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../../components'
import { BackArrowSvg } from '../../../../assets/svg'
import { Colors } from '../../../constants'
import { helpers } from '../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import FeverSvg from '../../../../assets/svg/home-screen/most-common-concern/fever-svg'
import HeadAcheSvg from '../../../../assets/svg/home-screen/most-common-concern/head-ache-svg'
import { commonStyles, fontStyles } from '../../../styles'
import { navigationHook } from '../../../hooks/navigation.hook'
const mostCommonData = [
    {
        id: 1,
        title: "Diabetes",
        icon: <HeadAcheSvg />
    },
    {
        id: 2,
        title: "Fever",
        icon: <FeverSvg />
    },
    {
        id: 3,
        title: "Headache",
        icon: <HeadAcheSvg />
    },
    {
        id: 4,
        title: "Hyper Tension",
        icon: <HeadAcheSvg />
    },
    {
        id: 5,
        title: "Heart Disease",
        icon: <FeverSvg />
    },
    {
        id: 6,
        title: "Headache",
        icon: <HeadAcheSvg />
    }
]
const CommonDiseaseDetailsPage = () => {
    const { navigateTo } = navigationHook();

    const renderMostCommonDisease = React.useCallback(({ item }: { item: any }) => {
        return (
            <Pressable style={[commonStyles.centerJCAC, { padding: moderateScale(16) }]} onPress={() => navigateTo('BookAppointmentListing', { searchKey: item?.title })}>
                <View>
                    {item.icon}
                </View>
                <Text style={[fontStyles.notoSansMedium12, { color: Colors.offBlack, textAlign: "center" }]}>{item.title}</Text>
            </Pressable>
        )
    }, [mostCommonData]);
    
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Most common symptoms'
                headText=''
                icon={BackArrowSvg}
            />
            <FlatList
                data={mostCommonData}
                bounces={false}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                showsHorizontalScrollIndicator={false}
                renderItem={renderMostCommonDisease}
            />
        </>
    )
}

export default CommonDiseaseDetailsPage

const styles = StyleSheet.create({})