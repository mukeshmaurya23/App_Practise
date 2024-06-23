import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { HeartGreenSvg } from '../../../../assets/svg'
import { commonStyles, fontStyles } from '../../../styles'
import { Colors } from '../../../constants'
import FeverSvg from '../../../../assets/svg/home-screen/most-common-concern/fever-svg'
import HeadAcheSvg from '../../../../assets/svg/home-screen/most-common-concern/head-ache-svg'
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
//This component is used in the Home screen to display the MostCommonDiseaseScreen. and the most common diseases. in the health care.
const MostCommonDisease = () => {
    const { navigateTo } = navigationHook()
    const renderMostCommonDisease = React.useCallback(({ item }: { item: any }) => {
        return (
            <Pressable style={[commonStyles.centerJCAC, { padding: moderateScale(10) }]} onPress={() => navigateTo('BookAppointmentListing', { searchKey: item?.title })}>
                <View>
                    {item.icon}
                </View>
                <Text style={[fontStyles.notoSansMedium12, { color: Colors.offBlack, textAlign: "center" }]}>{item.title}</Text>
            </Pressable>
        )

    }, [mostCommonData])
    return (
        <>
            <View style={styles.mainContainer}>
                <View style={[commonStyles.flexRow, { columnGap: moderateScale(6) }]}>
                    <HeartGreenSvg />
                    <View style={{ width: "90%" }}>
                        <Text style={[fontStyles.notoSansSemiBold16]}>Most Common</Text>
                        <View style={[commonStyles.RowJSBAC, { paddingVertical: moderateScale(4) }]}>
                            <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack50 }]}>Browse by most common concern</Text>
                            <Pressable onPress={() => navigateTo("HomePageScreen", { screen: "CommonDiseaseDetailsPage" })}>
                                <Text style={[fontStyles.notoSansSemiBold12, { color: Colors.secondaryColor }]}>View All</Text>
                            </Pressable>
                        </View>
                    </View>


                </View>
                <FlatList
                    data={mostCommonData}
                    bounces={false}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderMostCommonDisease}
                />
            </View>
        </>
    )
}

export default MostCommonDisease

const styles = StyleSheet.create({
    mainContainer: { padding: moderateScale(16), backgroundColor: Colors.offWhite, marginTop: moderateScale(10) }
})