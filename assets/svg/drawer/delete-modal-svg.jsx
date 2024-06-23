import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Path } from "react-native-svg";
const DeleteModalSvg = (props) => (
    <Svg
        width={moderateScale(50)}
        height={moderateScale(50)}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect x={0.5} y={0.5} width={49} height={49} rx={24.5} fill="#FEF3F2" />
        <Rect x={0.5} y={0.5} width={49} height={49} rx={24.5} stroke="white" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.6667 14.7915C19.9283 14.7915 17.7083 17.0114 17.7083 19.7498C17.7083 22.4882 19.9283 24.7082 22.6667 24.7082C25.4051 24.7082 27.625 22.4882 27.625 19.7498C27.625 17.0114 25.4051 14.7915 22.6667 14.7915ZM19.4583 19.7498C19.4583 17.9779 20.8948 16.5415 22.6667 16.5415C24.4386 16.5415 25.875 17.9779 25.875 19.7498C25.875 21.5218 24.4386 22.9582 22.6667 22.9582C20.8948 22.9582 19.4583 21.5218 19.4583 19.7498Z"
            fill="#F04438"
        />
        <Path
            d="M15.375 30.8332C15.375 29.3834 16.5503 28.2082 18 28.2082H18.3977C18.4284 28.2082 18.459 28.213 18.4882 28.2226L19.498 28.5523C20.6605 28.9319 21.8742 29.0972 23.0813 29.0481C23.2423 29.0416 23.374 28.9215 23.408 28.764C23.4938 28.3673 23.6131 27.9831 23.763 27.6145C23.8337 27.4406 23.6902 27.2465 23.5033 27.2651C22.3422 27.3805 21.1629 27.255 20.0412 26.8887L19.0314 26.559C18.8268 26.4922 18.6129 26.4582 18.3977 26.4582H18C15.5838 26.4582 13.625 28.4169 13.625 30.8332V32.2195C13.625 33.0983 14.2619 33.8475 15.1292 33.9891C18.1569 34.4835 21.2212 34.678 24.2776 34.5727C24.4672 34.5661 24.5699 34.3461 24.463 34.1894C24.2368 33.8577 24.0383 33.5056 23.8709 33.1363C23.7904 32.9585 23.6143 32.8409 23.4192 32.8441C20.7422 32.8889 18.0621 32.6948 15.4111 32.262C15.3903 32.2586 15.375 32.2406 15.375 32.2195V30.8332Z"
            fill="#F04438"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 30.2498C25 31.3837 25.3594 32.4336 25.9706 33.2918C26.3111 33.77 26.7298 34.1887 27.208 34.5292C28.0662 35.1404 29.1161 35.4998 30.25 35.4998C33.1495 35.4998 35.5 33.1493 35.5 30.2498C35.5 29.116 35.1406 28.0661 34.5294 27.2079C34.1889 26.7297 33.7702 26.311 33.292 25.9704C32.4338 25.3593 31.3839 24.9998 30.25 24.9998C27.3505 24.9998 25 27.3503 25 30.2498ZM30.25 33.7498C29.6009 33.7498 28.9931 33.5732 28.472 33.2652L33.2654 28.4719C33.5733 28.9929 33.75 29.6008 33.75 30.2498C33.75 32.1828 32.183 33.7498 30.25 33.7498ZM27.2346 32.0278L32.028 27.2344C31.5069 26.9265 30.8991 26.7498 30.25 26.7498C28.317 26.7498 26.75 28.3168 26.75 30.2498C26.75 30.8989 26.9267 31.5067 27.2346 32.0278Z"
            fill="#F04438"
        />
    </Svg>
);
export default DeleteModalSvg;