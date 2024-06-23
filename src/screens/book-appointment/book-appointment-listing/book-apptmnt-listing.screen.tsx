import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles, fontStyles } from '../../../styles'
import { Colors } from '../../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { helpers } from '../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { DateInputField, Header, TakeSpace } from '../../../components'
import { BackArrowSvg, OrangeSvgFilter, SearchSvg } from '../../../../assets/svg'

import BookAppointmentCard from './components/book-appointment-card'
import { BookAppoinmentListingData } from '../../../utility/constant'
import BookAppointmentFilter from './components/Filter/book-appointment-filter'
import { useBookAppointmentList } from './book-appoinmt-list.hook'

/*
This screen is used to list the dr to book a appointment 
*/

const BookAppointmentListing = () => {
    const { isVisible, openModal, closeModal, searchKey} = useBookAppointmentList();
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.bgGreen)}>
                <Header
                    label='Book an appointment'
                    icon={BackArrowSvg}
                    rootStyle={{ height: moderateScale(60) }}
                />
                <View style={{ backgroundColor: Colors.offWhite }}>
                    <TakeSpace space={moderateScale(6)} />
                    <DateInputField
                        leftIcon={SearchSvg}
                        placeHolder='Serach here'
                        rightSideContent={<OrangeSvgFilter />}
                        placeholderTextColor={Colors.offBlack50}
                        rootStyle={{ width: '92%', alignSelf: 'center' }}
                        pressContStyle={[{ paddingHorizontal: moderateScale(10), borderColor: Colors.offBlack5 }]}
                        onPress={()=>openModal()}
                    />
                    <TakeSpace space={moderateScale(6)} />
                    <View style={styles.serchKey}>
                        <Text style={fontStyles.notoSansRegular12}> Search results based on {' '}
                            <Text style={{ fontStyle: 'italic' }}>{`“${searchKey ? searchKey : 'Fever'}”`} </Text>
                        </Text>
                    </View>
                </View>
                <FlatList
                    data={BookAppoinmentListingData}
                    contentContainerStyle={{ paddingVertical: moderateScale(10) }}
                    keyExtractor={(item, index) => item.id.toString() || index.toString()}
                    ItemSeparatorComponent={() => (<TakeSpace space={moderateScale(4)} />)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <BookAppointmentCard item={item} index={index} />
                        )
                    }}
                />
            </View>
            <BookAppointmentFilter
                closeModal={closeModal}
                isVisible={isVisible}
            />
        </>
    )
}

export default BookAppointmentListing

const styles = StyleSheet.create({
    serchKey: { backgroundColor: '#F2F9F9', paddingVertical: moderateScale(10), paddingHorizontal: moderateScale(16) }
})