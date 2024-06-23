import { Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { HomeStack } from './MainStack'
import DrawerComp from './components/drawer-comp'
import { Home } from '../screens'
import { SCREEN_WIDTH } from '../constants/responsive'
import { moderateScale } from 'react-native-size-matters'

const Drawer = createDrawerNavigator()

const DrawerStack = ({ navigation }: { navigation: any }) => {

    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerComp {...props} navigation={navigation} />}
            screenOptions={{
                drawerPosition: 'right',
                drawerType: 'slide',
                headerShown: false,
                drawerStyle: { width: SCREEN_WIDTH },
                swipeEdgeWidth: moderateScale(20)
            }}
        >
            <Drawer.Screen name='Home' component={Home} />
        </Drawer.Navigator>
    )
}

export default DrawerStack
