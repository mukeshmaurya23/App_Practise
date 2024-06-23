import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, {
    Circle,
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
    Rect,
} from "react-native-svg";
const FindHolisticSvg = (props) => (
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
            fill="url(#paint0_linear_492_734)"
            fillOpacity={0.05}
        />
        <G clipPath="url(#clip0_492_734)">
            <Path
                d="M34.8593 22.1094C30.9825 22.1094 27.8281 25.2638 27.8281 29.1406C27.8281 33.0174 30.9825 36.1719 34.8593 36.1719C38.7361 36.1719 41.8906 33.0174 41.8906 29.1406C41.8906 25.2638 38.7361 22.1094 34.8593 22.1094ZM28.3966 34.6098L26.6279 36.3779C26.3532 36.6525 26.3532 37.0975 26.6279 37.3722C26.9025 37.6468 27.3475 37.6468 27.6221 37.3722L29.3909 35.604C29.6655 35.3294 29.6655 34.8844 29.3909 34.6098C29.1163 34.3351 28.6713 34.3351 28.3966 34.6098Z"
                fill="url(#paint1_linear_492_734)"
            />
            <Path
                d="M34.8593 20C29.8249 20 25.7187 24.1062 25.7187 29.1406C25.7187 34.175 29.8249 38.2812 34.8593 38.2812C39.8938 38.2812 44 34.175 44 29.1406C44 24.1062 39.8938 20 34.8593 20ZM34.8593 35.4688C31.3719 35.4688 28.5312 32.6281 28.5312 29.1406C28.5312 25.6532 31.3719 22.8125 34.8593 22.8125C38.3468 22.8125 41.1875 25.6532 41.1875 29.1406C41.1875 32.6281 38.3468 35.4688 34.8593 35.4688ZM26.6279 35.3836C26.3532 35.109 25.9082 35.109 25.6336 35.3836L20.206 40.8112C19.9313 41.0859 19.9313 41.5309 20.206 41.8055L22.1945 43.794C22.4692 44.0687 22.9141 44.0687 23.1888 43.794L28.6164 38.3664C28.891 38.0918 28.891 37.6468 28.6164 37.3722L26.6279 35.3836Z"
                fill="url(#paint2_linear_492_734)"
            />
        </G>
        <Defs>
            <LinearGradient
                id="paint0_linear_492_734"
                x1={3.20066}
                y1={60.7993}
                x2={56.8469}
                y2={7.15301}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#5558FF" />
                <Stop offset={1} stopColor="#00C0FF" />
            </LinearGradient>
            <LinearGradient
                id="paint1_linear_492_734"
                x1={26.6279}
                y1={37.3722}
                x2={39.8287}
                y2={24.1712}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#ADDCFF" />
                <Stop offset={0.5028} stopColor="#EAF6FF" />
                <Stop offset={1} stopColor="#EAF6FF" />
            </LinearGradient>
            <LinearGradient
                id="paint2_linear_492_734"
                x1={21.2002}
                y1={42.7998}
                x2={41.3176}
                y2={22.6824}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#5558FF" />
                <Stop offset={1} stopColor="#00C0FF" />
            </LinearGradient>
            <ClipPath id="clip0_492_734">
                <Rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(20 20)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default FindHolisticSvg;
