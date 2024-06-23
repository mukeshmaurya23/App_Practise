import React, { useEffect, useRef, useState } from "react";
import { FlatList, Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { SCREEN_WIDTH } from "../../constants/responsive";
import { commonStyles, fontStyles } from "../../styles";
import FastImage from "react-native-fast-image";
import { Colors } from "../../constants";
import TakeSpace from "../take-pace/take-space";

const CustomSlider = (props: any) => {
    const { bannerData } = props || {}
    const flatlistRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const getItemLayout = (data: any, index: any) => ({
        length: SCREEN_WIDTH,
        offset: SCREEN_WIDTH * index,
        index: index,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (bannerData?.length > 0) {
                if (activeIndex < bannerData?.length - 1) {
                    flatlistRef?.current?.scrollToIndex({
                        index: activeIndex + 1,
                        animated: true,
                    });
                } else {
                    flatlistRef?.current?.scrollToIndex({ index: 0, animated: true });
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [activeIndex]);
    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={[commonStyles.centerJCAC]}>
                <Pressable style={styles.BannerImg} onPress={() => item.targetLink ? Linking.openURL(item?.targetLink) : null}>
                    <FastImage
                        source={require("../../../assets/images/sliderImage.png")}
                        resizeMode={FastImage.resizeMode.contain}
                        style={{
                            width: moderateScale(100),
                            height: moderateScale(100),
                            borderRadius: moderateScale(50),
                        }}
                    />
                </Pressable>
                <View style={{ width: SCREEN_WIDTH * 0.8 }}>
                    <Text style={[fontStyles.notoSansRegular12, {}]}>
                        {item.description}
                    </Text>
                </View>
                <Text style={[fontStyles.notoSansSemiBold14, { color: Colors.darkBlue }]}>
                    {item.title}
                </Text>
                <Text style={[fontStyles.notoSansSemiBold12, { color: Colors.darkBlue, opacity: 0.75 }]}>
                    {item.roleAndLocation}
                </Text>
            </View>
        );
    };

    const handleScroll = (event: any) => {
        const index = Math.round(event?.nativeEvent?.contentOffset.x / SCREEN_WIDTH);
        setActiveIndex(index);
    };

    const renderDotIndicators = () => {
        return bannerData?.map((dot: any, index: any) => (
            <View
                key={index}
                style={{
                    backgroundColor: activeIndex === index ? Colors.secondaryColor : Colors.secondaryColor + "50",
                    height: moderateScale(8),
                    width: moderateScale(8),
                    borderRadius: moderateScale(10),
                    marginHorizontal: moderateScale(4),
                }}
            />
        ));
    };


    return (
        <View style={{}}>
            <FlatList
                data={bannerData}
                ref={flatlistRef}
                bounces={false}
                getItemLayout={getItemLayout}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
            />
            <TakeSpace space={moderateScale(10)} />
            <View style={[commonStyles.RowJCAC]}>
                {renderDotIndicators()}
            </View>
        </View>
    );
};

export default CustomSlider;
const styles = StyleSheet.create({
    BannerImg: { width: SCREEN_WIDTH, height: moderateScale(110), padding: moderateScale(8), borderRadius: moderateScale(8), ...commonStyles.centerJCAC }
})