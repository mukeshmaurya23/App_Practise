import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackNavigatorProps } from "../../../routes/type";
import { navigationHook } from "../../../hooks/navigation.hook";

type SelectedProps = { date: number; slot: number };

const useScheduleAppointment = () => {

    const { params: { drImage, drName, jobLocation, spokenLang } } = useRoute<RouteProp<MainStackNavigatorProps, 'ScheduleAppointment'>>();
    const [selected, setSelected] = React.useState<SelectedProps>({ date: 0, slot: 0 });
    const [showTxt, setShowTxt] = React.useState<boolean>(false);
    const { navigateTo } = navigationHook()

    const setDate = (item: number) => setSelected((prev) => { return { ...prev, date: item, } });
    const setSlot = (item: number) => setSelected((prev) => { return { ...prev, slot: item, } });
    const toggleShowTxt = () => setShowTxt(!showTxt);

    return {
        drImage, drName, jobLocation, spokenLang, selected, setDate, setSlot, showTxt,
        toggleShowTxt, navigateTo
    };
};

export { useScheduleAppointment };
