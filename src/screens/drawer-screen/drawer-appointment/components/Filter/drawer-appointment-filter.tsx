import React from "react";
import Modal from "react-native-modal";
import { Colors } from "../../../../../constants";
import { moderateScale } from "react-native-size-matters";
import { BackArrowSvg } from "../../../../../../assets/svg";
import { commonStyles, fontStyles } from "../../../../../styles";
import { SCREEN_HEIGHT } from "../../../../../constants/responsive";
import RadioButton from "../../../../../components/radio-button/radio-button";
import { FlatList, Pressable, StyleSheet, Text, View, Animated } from "react-native";
import { CustomButton, CustomCheckBox, Header, TakeSpace } from "../../../../../components";

interface DataProps {
    id: number;
    label: string;
}

interface DrawerAppointmentFilterProps {
    isVisible: boolean;
    closeModal: () => void;
}

const LeftData: DataProps[] = [
    { id: 1, label: "Time" },
    { id: 2, label: "Status" },
    { id: 3, label: "Doctor" }
];

const TimeData: DataProps[] = [
    { id: 1, label: "Last Week" },
    { id: 2, label: "Last Month" },
    { id: 3, label: "Last 6 Month" }
];

const StatusData: DataProps[] = [
    { id: 1, label: "Upcoming" },
    { id: 2, label: "Booked" },
    { id: 3, label: "Rescheduled" },
    { id: 4, label: "Cancelled" }
];

const DoctorData: DataProps[] = [
    { id: 1, label: "S.Dr.Mukesh Muarya" },
    { id: 2, label: "Deput.DR.Abhishekh Poojari" },
    { id: 3, label: "Mang.Gaurav Solanki" },
    { id: 4, label: "yikes.Dr.Aditya Patil" }
];

/*
This filter is used to filter the list of users appointment status ad schedul timeing and based on dr with appointment is schedueld
*/ 

const DrawerAppointmentFilter: React.FC<DrawerAppointmentFilterProps> = ({ isVisible, closeModal }) => {

    const handleClose = () => { closeModal(); setSelected({ left: 1, right: 1 }) };
    const handleCheckBox = (id: number) => setIsChecked(prevState => prevState.includes(id) ? prevState.filter(item => item !== id) : [...prevState, id]);
    
    const [selected, setSelected] = React.useState<{ left: number; right: number }>({ left: 1, right: 1 });
    const [isChecked, setIsChecked] = React.useState<number[]>([]);
    const borderWidthAnim = React.useRef<{ [key: number]: Animated.Value }>({});


    React.useEffect(() => {
        LeftData.forEach(item => {
            borderWidthAnim.current[item.id] = new Animated.Value(item.id === selected.left ? moderateScale(30) : moderateScale(10));
        });
    }, []);

    React.useEffect(() => {
        LeftData.forEach(item => {
            Animated.timing(borderWidthAnim.current[item.id], {
                toValue: item.id === selected.left ? moderateScale(30) : moderateScale(10),
                duration: 300,
                useNativeDriver: false
            }).start();
        });
    }, [selected.left]);

    const renderLeftSide = React.useCallback(({ item }: { item: DataProps }) => {
        const isSelected = selected.left === item.id;
        const borderWidth = borderWidthAnim.current[item.id];

        return (
            <Pressable onPress={() => setSelected(prev => ({ ...prev, left: item.id }))}>
                <Text style={[styles.txt, isSelected && styles.selectTxt]}>{item.label}</Text>
                <Animated.View style={[styles.bottBord, isSelected && styles.selctBottBord, { width: borderWidth }]} />
            </Pressable>
        );
    }, [selected.left]);

    const renderRightSide = React.useCallback(({ item }: { item: DataProps }) => {
        const isSelected = selected.right === item.id;
        const isDoctorSelected = selected.left === 3;

        return (
            <>
                {!isDoctorSelected ? (
                    <Pressable
                        style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}
                        onPress={() => setSelected(prev => ({ ...prev, right: item.id }))}
                    >
                        <RadioButton isSelected={isSelected} />
                        <Text style={fontStyles.notoSansMedium14}>{item.label}</Text>
                    </Pressable>
                ) : (
                    <Pressable
                        style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}
                        onPress={() => handleCheckBox(item.id)}
                    >
                        <CustomCheckBox selected={isChecked.includes(item.id)} selectedColor={Colors.primaryColor} />
                        <Text style={fontStyles.notoSansMedium14}>{item.label}</Text>
                    </Pressable>
                )}
            </>
        );
    }, [selected.right, selected.left, isChecked]);

    const getDataBasedOnSelection = React.useCallback((key: number) => {
        switch (key) {
            case 1: return TimeData;
            case 2: return StatusData;
            case 3: return DoctorData;
            default: return TimeData;
        }
    }, []);

    const renderFilter = () => (
        <View style={commonStyles.flexRow}>
            <FlatList
                data={LeftData}
                renderItem={renderLeftSide}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <TakeSpace space={moderateScale(10)} />}
                style={{ backgroundColor: Colors.offWhite, flexBasis: "25%" }}
            />
            <View style={styles.verticalLine} />
            <FlatList
                data={getDataBasedOnSelection(selected.left)}
                renderItem={renderRightSide}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <TakeSpace space={moderateScale(10)} />}
                style={{ backgroundColor: Colors.offWhite, flexBasis: "75%", paddingLeft: moderateScale(15), paddingTop: moderateScale(6) }}
            />
        </View>
    );

    return (
        <Modal
            useNativeDriver
            animationInTiming={500}
            style={{ margin: 0, padding: 0, backgroundColor: Colors.offWhite }}
            animationIn="slideInUp"
            isVisible={isVisible}
            onBackdropPress={handleClose}
            onBackButtonPress={handleClose}
        >
            <Header icon={BackArrowSvg} label="Filter" onPress={handleClose} />
            <View style={styles.container}>
                <FlatList data={[1]} renderItem={renderFilter} showsVerticalScrollIndicator={false} />
            </View>
            <View style={styles.sbtBtns}>
                <CustomButton
                    label="Reset"
                    extraCusBtnStyle={[{ width: "48%", backgroundColor: Colors.offBlack5 }]}
                    extraCusTxtStyle={[{ color: Colors.offBlack }]}
                    onPress={closeModal}
                />
                <CustomButton label="Apply" extraCusBtnStyle={[{ width: "48%" }]} onPress={closeModal} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    sbtBtns: { ...commonStyles.RowJSBAC, padding: moderateScale(14), backgroundColor: Colors.offWhite, borderTopWidth: moderateScale(1), borderTopColor: Colors.offBlack25 },
    container: { ...commonStyles._flexOneBg(Colors.offWhite), padding: moderateScale(16) },
    bottBord: { backgroundColor: Colors.offBlack50, height: moderateScale(1) },
    selctBottBord: { backgroundColor: Colors.primaryColor, height: moderateScale(2) },
    txt: { ...fontStyles.notoSansRegular16, opacity: 0.75 },
    selectTxt: { ...fontStyles.notoSansMedium16, opacity: 0.75 },
    verticalLine: { height: SCREEN_HEIGHT *0.8, borderRightColor: Colors.offBlack5, borderWidth: moderateScale(0.5), opacity: 0.1 }
});

export default DrawerAppointmentFilter;
