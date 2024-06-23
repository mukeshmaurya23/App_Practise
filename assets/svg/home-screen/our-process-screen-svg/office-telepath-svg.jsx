import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, {
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg";
const OfficeTelepathSvg = (props) => (
    <Svg
        width={moderateScale(64)}
        height={moderateScale(64)}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle
            cx={32}
            cy={32}
            r={32}
            fill="url(#paint0_linear_492_737)"
            fillOpacity={0.05}
        />
        <Path
            d="M32.0001 21C26.951 21 22.8594 25.1462 22.8594 30.1876C22.8594 32.8341 23.9903 35.2211 25.7938 36.8918L26.75 38.2283C28.2366 39.2753 30.0477 39.8908 32.0001 39.8908C33.9937 39.8908 35.8401 39.249 37.3439 38.1614L38.2064 36.8918C40.0099 35.2211 41.1408 32.8341 41.1408 30.1876C41.1408 25.1385 37.0421 21 32.0001 21Z"
            fill="url(#paint1_linear_492_737)"
        />
        <Path
            d="M40.4739 41.4691L38.2064 36.8918C36.5752 38.403 34.3938 39.3283 32.0001 39.3283C29.6064 39.3283 27.4251 38.403 25.7939 36.8918L23.5264 41.4691C23.4135 41.6972 23.4326 41.9685 23.5763 42.1784C23.7201 42.3884 23.9661 42.5043 24.2196 42.4815L27.0794 42.2239L28.5897 44.6666C28.7181 44.8744 28.9448 45 29.1876 45C29.1985 45 29.2095 44.9997 29.2205 44.9992C29.4756 44.9873 29.7042 44.838 29.8176 44.6092L31.9992 40.2098C32.6447 41.5146 33.6301 43.5044 34.1836 44.6113C34.2976 44.8393 34.5261 44.9877 34.7808 44.9993C35.0354 45.0106 35.2765 44.8835 35.4106 44.6666L36.9208 42.2239L39.7807 42.4815C40.0338 42.5043 40.2801 42.3885 40.424 42.1785C40.5678 41.9685 40.5868 41.6972 40.4739 41.4691ZM32.0001 36.5158C35.4895 36.5158 38.3283 33.6769 38.3283 30.1876C38.3283 26.697 35.4954 23.8125 32.0001 23.8125C28.5095 23.8125 25.6719 26.6919 25.6719 30.1876C25.6719 33.6769 28.5108 36.5158 32.0001 36.5158ZM28.6904 29.6904C28.965 29.4158 29.4102 29.4158 29.6848 29.6904L31.297 31.3026L34.3156 28.2841C34.5901 28.0095 35.0353 28.0095 35.3099 28.2841C35.5845 28.5587 35.5845 29.0039 35.3099 29.2785L31.7943 32.7941C31.5197 33.0687 31.0745 33.0687 30.7999 32.7941L28.6905 30.6847C28.4158 30.4102 28.4158 29.965 28.6904 29.6904Z"
            fill="url(#paint2_linear_492_737)"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_492_737"
                x1={32}
                y1={64}
                x2={32}
                y2={0}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#00B59C" />
                <Stop offset={1} stopColor="#9CFFAC" />
            </LinearGradient>
            <LinearGradient
                id="paint1_linear_492_737"
                x1={32.0001}
                y1={39.8908}
                x2={32.0001}
                y2={21}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#00B59C" />
                <Stop offset={1} stopColor="#9CFFAC" />
            </LinearGradient>
            <LinearGradient
                id="paint2_linear_492_737"
                x1={32.0001}
                y1={45}
                x2={32.0001}
                y2={23.8125}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#C3FFE8" />
                <Stop offset={0.9973} stopColor="#F0FFF4" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default OfficeTelepathSvg;
