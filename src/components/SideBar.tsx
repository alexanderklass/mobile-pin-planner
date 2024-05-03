import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import CustomButton from './CustomButton';
import { globalStore } from '../store/global.store';
const SideBar = () => {
    const { toggleSidebar, setToggleSidebar, setSidebarIndex } = globalStore();

    const closeSidebar = () => {
        setToggleSidebar(false);
    };

    const handleSidebarButton = (index: number) => {
        setSidebarIndex(index);
        closeSidebar();
    };

    return (
        <View className={'absolute right-0 h-full w-full'}>
            {toggleSidebar && (
                <View className={'relative'}>
                    <View className={'bg-blue-500 justify-center p-3 flex items-center h-full'}>
                        <CustomButton
                            onPress={() => handleSidebarButton(0)}
                            style={'bg-green-300 w-full m-1 rounded-md'}
                            text={'Planner'}
                        />
                        <CustomButton
                            onPress={() => handleSidebarButton(1)}
                            style={'bg-purple-300 w-full m-1 rounded-md'}
                            text={'Kunden'}
                        />
                        <CustomButton
                            onPress={() => handleSidebarButton(2)}
                            style={'bg-yellow-300 w-full m-1 rounded-md'}
                            text={'Notizen'}
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

export default SideBar;
