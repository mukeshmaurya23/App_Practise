import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, SvgProps } from "react-native-svg";
const SearchSvg = (props: SvgProps) => (
    <Svg
        width={moderateScale(20)}
        height={moderateScale(20)}
        viewBox="0 0 20 20"
        fill="none"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9876 12.8712C9.77902 14.6401 6.54616 14.5009 4.49884 12.4536C2.30214 10.2569 2.30214 6.6953 4.49884 4.4986C6.69554 2.3019 10.2571 2.3019 12.4538 4.4986C14.5011 6.54592 14.6403 9.77877 12.8715 11.9873L17.1678 16.2837C17.4119 16.5278 17.4119 16.9235 17.1678 17.1676C16.9237 17.4117 16.528 17.4117 16.2839 17.1676L11.9876 12.8712ZM5.38273 11.5697C3.67418 9.86112 3.67418 7.09103 5.38273 5.38248C7.09127 3.67394 9.86137 3.67394 11.5699 5.38248C13.2772 7.08977 13.2785 9.85706 11.5737 11.5659C11.5724 11.5671 11.5711 11.5684 11.5699 11.5696C11.5686 11.5709 11.5674 11.5722 11.5662 11.5734C9.85731 13.2782 7.09002 13.277 5.38273 11.5697Z"
            fill="#1E1E1E"
        />
    </Svg>
);
export default SearchSvg;
