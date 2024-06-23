import { StyleSheet, LogBox, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainStack from "./routes/MainStack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistAppStore, store } from "./redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

LogBox.ignoreLogs(['new NativeEventEmitter', 'new NativeEventEmitter()']);

const AppEntry = () => {
    return (
        <SafeAreaProvider style={[styles.rootStyle]}>
            <Provider store={store}>
                <PersistGate persistor={persistAppStore}>
                    <GestureHandlerRootView style={[styles.rootStyle]}>
                        <KeyboardAvoidingView style={[styles.rootStyle]}
                            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                            <MainStack />
                        </KeyboardAvoidingView>
                    </GestureHandlerRootView>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    rootStyle: { flex: 1 },
});

export default AppEntry;
