import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../../constants'
import { DatePicker, TakeSpace } from '../../../components'
import { CalendarDropdownSvg, LinearGradientSvg } from '../../../../assets/svg'
import { commonStyles, fontStyles } from '../../../styles'
import { DateList, TimeSlot } from '../../../utility/constant'

interface SlotAvailablityProps {
    selected: { slot: number, date: number },
    setDate: (value: number) => void;
    setSlot: (value: number) => void;
    hideIcon?: boolean;
    disabled?: boolean;
    label?: string;
};

const SlotAvailablity: React.FC<SlotAvailablityProps> = ({
    selected,
    setDate,
    setSlot,
    hideIcon = false,
    disabled = false,
    label = 'Select',
}) => {

    const setClose = () => setVisible(false);
    const setOpen = () => setVisible(true);
    const [visible, setVisible] = React.useState(false);


    const renderDate = React.useCallback(({ item, index }: { item: { id: number, date: string }, index: number }) => {
        const isSlected = selected.date == item.id
        return (
            <Pressable style={[styles.dateCont, isSlected && { backgroundColor: Colors.fadedSecondary }]} onPress={() => setDate(item?.id)} disabled={disabled}>
                <Text style={[fontStyles.notoSansMedium12, isSlected && { color: Colors.secondaryColor }]}>{item?.date}</Text>
            </Pressable>
        );
    }, [DateList, selected.date]);

    const renderTimeSlot = React.useCallback(({ item, index }: { item: { id: number, timeSlot: string }, index: number }) => {
        const { timeSlot, id } = item
        const isSlected = selected.slot == id;
        return (
            <Pressable style={[styles.dateCont, isSlected && { backgroundColor: Colors.fadedSecondary }]} onPress={() => setSlot(id)} disabled={disabled}>
                <Text style={[fontStyles.notoSansMedium12, isSlected && { color: Colors.secondaryColor }]}>{timeSlot}</Text>
            </Pressable>
        );
    }, [TimeSlot, selected.slot]);

    return (
        <>
            <View style={styles.ApptCont}>
                <View style={commonStyles.centerJCAC}>
                    <View style={{ position: 'relative' }}>
                        <LinearGradientSvg />
                    </View>
                    <View style={{ position: 'absolute' }}>
                        <Text style={[fontStyles.notoSansRegular12, { color: Colors.offWhite }]}>Next slot available -
                            <Text style={[fontStyles.notoSansMedium12, { color: Colors.offWhite }]}> Tomorrow 8:00 am</Text>
                        </Text>
                    </View>
                </View>
                <TakeSpace space={moderateScale(0)} />
                <View style={{ padding: moderateScale(10) }}>
                    <View style={[commonStyles.RowJSBAC]}>
                        <Text style={fontStyles.notoSansMedium12}>{label} Date</Text>
                        {!hideIcon &&
                            <Pressable onPress={setOpen}>
                                <CalendarDropdownSvg width={moderateScale(20)} height={moderateScale(20)} fillColor={Colors.secondaryColor} />
                            </Pressable>
                        }
                    </View>
                    <FlatList
                        data={DateList}
                        horizontal
                        renderItem={renderDate}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: moderateScale(14) }}
                    />
                    <View style={{ paddingTop: moderateScale(6) }}>
                        <Text style={fontStyles.notoSansMedium12}>{label} Time slot</Text>
                    </View>
                    <FlatList
                        data={TimeSlot}
                        horizontal
                        renderItem={renderTimeSlot}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingVertical: moderateScale(14) }}
                    />
                </View>
            </View>
            <DatePicker
                isVisible={visible}
                closeModal={setClose}
                setDate={setDate}
            />
        </>
    )
}

export default SlotAvailablity

const styles = StyleSheet.create({
    ApptCont: { borderWidth: moderateScale(1), borderColor: Colors.offBlack5 },
    dateCont: { padding: moderateScale(6), backgroundColor: Colors.offBlack5, marginRight: moderateScale(10), borderRadius: moderateScale(4) },
})