import { RouteProp, useRoute } from "@react-navigation/native"
import { MainStackNavigatorProps } from "../../../../routes/type"
import React from "react";
import { navigationHook } from "../../../../hooks/navigation.hook";

type SelectedProps = { date: number; slot: number };
const useRescheduleHook = () => {
    const { params: { drImage, drName, jobLocation, spokenLang } } = useRoute<RouteProp<MainStackNavigatorProps, 'ReshceduleScreen'>>()

    const [selected, setSelected] = React.useState<SelectedProps>({ date: 0, slot: 0 });
    const { navigateTo } = navigationHook()

    const setDate = (item: number) => setSelected((prev) => { return { ...prev, date: item, } });
    const setSlot = (item: number) => setSelected((prev) => { return { ...prev, slot: item, } });

    return { drImage, drName, jobLocation, spokenLang, setDate, setSlot, selected,navigateTo }
}
export { useRescheduleHook }