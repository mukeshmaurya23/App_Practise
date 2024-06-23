import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Path } from "react-native-svg";
const DrawerListYourPractiseSvg = (props) => (
    <Svg
        width={moderateScale(32)}
        height={moderateScale(32)}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect x={0.5} y={0.5} width={31} height={31} rx={15.5} stroke="#CF8B15" />
        <Path
            d="M9.5 14.6865C9.5 12.8862 11.0794 11.5 12.9333 11.5C13.889 11.5 14.7299 11.9481 15.3333 12.5279C15.9368 11.9481 16.7777 11.5 17.7333 11.5C19.5872 11.5 21.1667 12.8862 21.1667 14.6865C21.1667 14.7948 21.1626 14.9019 21.1547 15.0078C21.1472 15.1091 21.0612 15.1852 20.9597 15.1852H20.3615C20.2391 15.1852 20.1459 15.0762 20.1558 14.9543C20.163 14.8656 20.1667 14.7764 20.1667 14.6865C20.1667 13.5194 19.1195 12.5 17.7333 12.5C16.9372 12.5 16.1939 12.9756 15.7297 13.5793C15.6351 13.7024 15.4886 13.7745 15.3333 13.7745C15.1781 13.7745 15.0316 13.7024 14.937 13.5793C14.4728 12.9756 13.7294 12.5 12.9333 12.5C11.5472 12.5 10.5 13.5194 10.5 14.6865C10.5 15.6222 10.8972 16.4933 11.5374 17.2988C12.1789 18.1059 13.0419 18.8179 13.9138 19.422C14.2437 19.6505 14.5545 19.845 14.8203 19.9804C15.1058 20.1258 15.2711 20.1667 15.3333 20.1667C15.3956 20.1667 15.5609 20.1258 15.8464 19.9804C16.1122 19.845 16.4229 19.6505 16.7528 19.422C17.0368 19.2252 17.3199 19.017 17.5946 18.7978C17.6917 18.7204 17.8355 18.7464 17.8971 18.8541L18.1982 19.3797C18.2471 19.4649 18.2269 19.5731 18.1497 19.6339C17.8751 19.8504 17.5969 20.0538 17.3223 20.244C16.9744 20.485 16.6223 20.7074 16.3002 20.8715C15.9977 21.0255 15.6498 21.1667 15.3333 21.1667C15.0168 21.1667 14.669 21.0255 14.3665 20.8715C14.0443 20.7074 13.6923 20.485 13.3444 20.244C12.4334 19.6129 11.4819 18.8362 10.7545 17.921C10.0259 17.0043 9.5 15.9198 9.5 14.6865Z"
            fill="#CF8B15"
        />
        <Path
            d="M17.8712 14.4583C17.7995 14.3018 17.6522 14.1932 17.4815 14.1709C17.3108 14.1486 17.1406 14.2157 17.031 14.3485L15.6532 16.0185H14.6667C14.3905 16.0185 14.1667 16.2424 14.1667 16.5185C14.1667 16.7947 14.3905 17.0185 14.6667 17.0185H15.8889C16.0381 17.0185 16.1796 16.9518 16.2746 16.8367L17.2946 15.6003L18.4899 18.2083C18.5617 18.3649 18.7089 18.4735 18.8796 18.4958C19.0504 18.5181 19.2206 18.451 19.3301 18.3182L20.4024 17.0185H22C22.2761 17.0185 22.5 16.7947 22.5 16.5185C22.5 16.2424 22.2761 16.0185 22 16.0185H20.1667C20.0174 16.0185 19.876 16.0852 19.781 16.2003L19.0665 17.0663L17.8712 14.4583Z"
            fill="#CF8B15"
        />
    </Svg>
);
export default DrawerListYourPractiseSvg;