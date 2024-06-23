import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Path } from "react-native-svg";
const DrawerDeleteAccountSvg = (props) => (
    <Svg
        width={moderateScale(32)}
        height={moderateScale(32)}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect x={0.5} y={0.5} width={31} height={31} rx={15.5} stroke="#F04438" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.6667 10.1667C13.1019 10.1667 11.8333 11.4353 11.8333 13.0001C11.8333 14.5649 13.1019 15.8334 14.6667 15.8334C16.2315 15.8334 17.5 14.5649 17.5 13.0001C17.5 11.4353 16.2315 10.1667 14.6667 10.1667ZM12.8333 13.0001C12.8333 11.9876 13.6541 11.1667 14.6667 11.1667C15.6792 11.1667 16.5 11.9876 16.5 13.0001C16.5 14.0126 15.6792 14.8334 14.6667 14.8334C13.6541 14.8334 12.8333 14.0126 12.8333 13.0001Z"
            fill="#F04438"
        />
        <Path
            d="M10.5 19.3334C10.5 18.505 11.1716 17.8334 12 17.8334H12.2272C12.2448 17.8334 12.2623 17.8362 12.279 17.8416L12.856 18.0301C13.5203 18.247 14.2139 18.3414 14.9036 18.3134C14.9956 18.3096 15.0708 18.241 15.0903 18.151C15.1393 17.9243 15.2075 17.7048 15.2931 17.4942C15.3336 17.3948 15.2515 17.2839 15.1447 17.2945C14.4812 17.3604 13.8074 17.2888 13.1664 17.0795L12.5894 16.891C12.4725 16.8529 12.3502 16.8334 12.2272 16.8334H12C10.6193 16.8334 9.5 17.9527 9.5 19.3334V20.1256C9.5 20.6278 9.86392 21.0559 10.3595 21.1368C12.0897 21.4193 13.8407 21.5304 15.5872 21.4703C15.6955 21.4665 15.7542 21.3408 15.6931 21.2513C15.5639 21.0617 15.4505 20.8605 15.3548 20.6495C15.3088 20.5479 15.2082 20.4807 15.0967 20.4825C13.5669 20.5081 12.0355 20.3972 10.5206 20.1499C10.5087 20.1479 10.5 20.1377 10.5 20.1256V19.3334Z"
            fill="#F04438"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 19.0001C16 19.648 16.2054 20.2479 16.5546 20.7383C16.7492 21.0116 16.9885 21.2509 17.2617 21.4455C17.7521 21.7947 18.3521 22.0001 19 22.0001C20.6569 22.0001 22 20.6569 22 19.0001C22 18.3522 21.7946 17.7522 21.4454 17.2618C21.2508 16.9886 21.0115 16.7493 20.7383 16.5547C20.2479 16.2055 19.6479 16.0001 19 16.0001C17.3431 16.0001 16 17.3432 16 19.0001ZM19 21.0001C18.6291 21.0001 18.2818 20.8991 17.984 20.7232L20.7231 17.9841C20.899 18.2819 21 18.6292 21 19.0001C21 20.1047 20.1046 21.0001 19 21.0001ZM17.2769 20.0161L20.016 17.277C19.7182 17.101 19.3709 17.0001 19 17.0001C17.8954 17.0001 17 17.8955 17 19.0001C17 19.371 17.101 19.7183 17.2769 20.0161Z"
            fill="#F04438"
        />
    </Svg>
);
export default DrawerDeleteAccountSvg;
