import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const Holistic1 = (props) => (
    <Svg
        width={moderateScale(80)}
        height={moderateScale(80)}
        viewBox="0 0 65 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Rect
            x={10}
            y={10}
            width={44.7805}
            height={48}
            fill="url(#pattern0_208_2468)"
        />
        <Defs>
            <Pattern
                id="pattern0_208_2468"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use
                    xlinkHref="#image0_208_2468"
                    transform="scale(0.00653595 0.00609756)"
                />
            </Pattern>
            <Image
                id="image0_208_2468"
                width={153}
                height={164}
                xlinkHref="data:image/png;base64,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"
            />
        </Defs>
    </Svg>
);
export default Holistic1;
