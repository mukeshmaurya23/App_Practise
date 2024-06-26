import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SuccessModalSvg = (props) => (
    <Svg
        width={moderateScale(130)}
        height={moderateScale(128)}
        viewBox="0 0 130 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            opacity={0.15}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.958 128C42.501 128 42.1201 127.772 41.8155 127.467L27.0391 111.174L8.37833 99.4498C7.92133 99.1453 7.69283 98.6885 7.69283 98.2317L6.85499 76.229L0.0761666 55.2161C-0.0761666 54.7593 0 54.2263 0.304666 53.8457L13.8623 36.411L22.1645 16.0071C22.393 15.5503 22.7738 15.2458 23.2308 15.0935L44.786 10.4494L64.2846 0.171301C64.7416 -0.0571004 65.2748 -0.0571004 65.7318 0.171301L85.2304 10.4494L106.709 15.0935C107.243 15.2458 107.623 15.5503 107.852 16.0071L116.154 36.411L129.636 53.8457C129.94 54.2263 130.093 54.7593 129.94 55.2161L123.161 76.1529L122.324 98.1555C122.324 98.6885 122.019 99.1453 121.638 99.4498L102.977 111.174L88.2009 127.467C87.8201 127.848 87.3631 128 86.8299 127.924L64.9701 124.955L42.958 128Z"
            fill="url(#paint0_linear_208_3031)"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.0404 113.238C47.6889 113.238 47.396 113.063 47.1617 112.828L35.7967 100.292L21.4441 91.27C21.0926 91.0356 20.9168 90.6841 20.9168 90.3326L20.2724 73.4024L15.0586 57.2336C14.9414 56.8822 15 56.4721 15.2343 56.1792L25.662 42.7638L32.0475 27.0638C32.2232 26.7123 32.5161 26.4779 32.8676 26.3608L49.4464 22.7872L64.4435 14.8786C64.795 14.7029 65.205 14.7029 65.5565 14.8786L80.5536 22.7872L97.0738 26.3608C97.4839 26.4779 97.7768 26.7123 97.9526 27.0638L104.338 42.7638L114.707 56.1792C114.941 56.4721 115.059 56.8822 114.941 57.2336L109.728 73.3438L109.083 90.2741C109.083 90.6841 108.849 91.0356 108.556 91.27L94.2033 100.292L82.8383 112.828C82.5454 113.121 82.1939 113.238 81.7838 113.18L64.9707 110.895L48.0404 113.238Z"
            fill="url(#paint1_linear_208_3031)"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.9707 99.8229C46.2829 99.8229 31.0515 84.6501 31.0515 65.9038C31.0515 47.216 46.2829 31.9846 64.9707 31.9846C83.717 31.9846 98.8898 47.216 98.8898 65.9038C98.8898 84.6501 83.717 99.8229 64.9707 99.8229Z"
            fill="url(#paint2_linear_208_3031)"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M59.1711 79.9049C58.8781 79.9049 58.5852 79.7877 58.3509 79.5534L45.4042 66.6653C41.5378 62.7403 47.4546 56.9992 51.2624 60.8071L59.1711 68.7743L78.7375 49.2664C82.5454 45.3999 88.345 51.2582 84.5372 55.066L59.9912 79.5534C59.8155 79.7877 59.5226 79.9049 59.1711 79.9049Z"
            fill="white"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_208_3031"
                x1={65}
                y1={0}
                x2={65}
                y2={128}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#02A39D" />
                <Stop offset={1} stopColor="#008282" />
            </LinearGradient>
            <LinearGradient
                id="paint1_linear_208_3031"
                x1={64.9937}
                y1={14.7468}
                x2={64.9937}
                y2={113.238}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#02A39D" />
                <Stop offset={1} stopColor="#008282" />
            </LinearGradient>
            <LinearGradient
                id="paint2_linear_208_3031"
                x1={64.9707}
                y1={31.9846}
                x2={64.9707}
                y2={99.8229}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#02A39D" />
                <Stop offset={1} stopColor="#008282" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default SuccessModalSvg;
