import { configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducers from './combineReducers/combineReducers';
import { PersistConfigProps } from './type';


const persistConfig: PersistConfig<PersistConfigProps> = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'startup'],
};

const persistAppReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
    reducer: persistAppReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        });
    },
});

export const persistAppStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

