import { KeyboardType, Pressable, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from "react-native";
import React, { memo } from "react";
import { moderateScale } from "react-native-size-matters";
import { Colors } from "../../constants";
import { commonStyles, fontStyles } from "../../styles";
import { helpers } from "../../utility/helpers";

interface FiieldBoxProps {
  value?: any;
  Icon?: React.ElementType;
  leftIcon?: React.ElementType;
  onChangeText?: (value: any) => void;
  placeHolder?: string;
  keyBoardType?: KeyboardType;
  onBlur?: any;
  label?: string;
  errorMessage?: string;
  rootStyle?: ViewStyle;
  labelStyle?: (TextStyle[] | any);
  onPress?: () => void;
  maxLength?: number;
  isPhoneNo?: boolean;
  editable?: boolean;
  secureTextEntry?: boolean;
  mandatory?: boolean;
  placeholderTextColor?: string;
  isMultiLine?: boolean;
  inputValueStyle?: TextStyle;
}

const InputFieldBox = (props: FiieldBoxProps) => {
  const { placeholderTextColor, value, secureTextEntry, Icon, leftIcon, onChangeText, placeHolder, keyBoardType, onBlur, label, rootStyle, labelStyle, onPress, maxLength, isPhoneNo, editable = true, mandatory = false, isMultiLine = false, inputValueStyle, errorMessage } = props;
  return (
    <View style={{ ...rootStyle, }} >
      {label &&
        <Text style={[styles.fieldTxt, labelStyle]} >
          {label} {mandatory && <Text style={[fontStyles.notoSansMedium14, { color: Colors.errorColor }]}>*</Text>}
        </Text>
      }
      <Pressable onPress={() => { }} style={[styles.inputContainer]} >
        {leftIcon &&
          <Pressable onPress={()=>{}} style={{ width: '10%' }}>
            {React.createElement(leftIcon)}
          </Pressable>
        }
        <View style={[commonStyles.RowJFSAC, { width: '80%' }]}>
          {(isPhoneNo) && (<Text style={[fontStyles.notoSansSemiBold12, { paddingLeft: moderateScale(5) }]}>+1</Text>)}
          <TextInput
            style={[fontStyles.notoSansSemiBold12, inputValueStyle, { fontSize: moderateScale(12), width: "100%" }]}
            cursorColor={Colors.offBlack}
            placeholder={placeHolder}
            keyboardType={keyBoardType}
            placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.offBlack25}
            value={value}
            secureTextEntry={secureTextEntry ? secureTextEntry : false}
            editable={editable}
            onBlur={onBlur}
            onChangeText={onChangeText}
            maxLength={maxLength}
            multiline={isMultiLine}
          />
        </View>
        {
          Icon &&
          <Pressable onPress={onPress} style={{ width: '10%' }}>
            {React.createElement(Icon)}
          </Pressable>
        }
      </Pressable >
      {errorMessage &&
        <View style={{ padding: moderateScale(6) }}>
          <Text style={[fontStyles.notoSansMedium10, { color: Colors.cancelColor }]}>{errorMessage}</Text>
        </View>
      }
    </View >
  );
};

export default InputFieldBox;

const styles = StyleSheet.create({
  inputContainer: {
    ...commonStyles.RowJSBAC,
    width: '100%',
    borderRadius: moderateScale(5),
    backgroundColor: Colors.offBlack5,
    paddingHorizontal: moderateScale(10),
    paddingVertical: helpers.isTablet ? moderateScale(10) : 0
  },
  fieldTxt: { ...fontStyles.notoSansSemiBold12, paddingVertical: moderateScale(6), paddingLeft: moderateScale(4) },

});
