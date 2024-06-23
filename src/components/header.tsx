import { Pressable, StyleSheet, Text, TouchableOpacity, View, ViewStyle, } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import { navigationHook } from "../hooks/navigation.hook";
import { commonStyles, fontStyles } from "../styles";
import { Colors } from "../constants";

interface TopBarProps {
    label: string | undefined;
    headText?: string;
    navigation?: any;
    rootStyle?: ViewStyle;
    icon: React.ElementType;
    onPress?: () => void
}
const Header = (props: TopBarProps) => {
    const { label, headText, icon, rootStyle, onPress } = props;
    const { navigateBack } = navigationHook();
    return (
        <View style={[{ padding: moderateScale(16), backgroundColor: Colors.primaryColor, columnGap: moderateScale(16) }, rootStyle,]}>
            {/* <Pressable onPress={() => navigateBack()} style={{ padding: moderateScale(6) }} >
                <TouchableOpacity activeOpacity={0.9} >
                    {React.createElement(icon)}
                </TouchableOpacity>
            </Pressable> */}
            <Pressable style={[commonStyles.RowJFSAC, { columnGap: moderateScale(10) }]} onPress={() => onPress ? onPress?.() : navigateBack()}>
                <TouchableOpacity activeOpacity={0.9} >
                    {React.createElement(icon)}
                </TouchableOpacity>
                <Text style={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}>
                    {label}
                </Text>
            </Pressable>
            <View style={{ paddingLeft: moderateScale(23) }}>
                <Text style={[fontStyles.notoSansMedium12, { color: Colors.offWhite, opacity: 0.75 }]}>
                    {headText}
                </Text>
            </View>
        </View >
    );
};

export default Header;

