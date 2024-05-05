import React from 'react';
import { View, Text } from 'react-native';
import { globalStore } from '../store/global.store';
const DateHeader = () => {
    const { date, currentWeekDay } = globalStore();
    return (
        <View className={'flex items-center justify-center w-full absolute top-0 p-2 bg-blue-500'}>
            <View className={'flex flex-row bg-blue-200 p-1 rounded-md gap-x-2 justify-center'}>
                <Text className={'text-xl'}>{currentWeekDay.toString()}</Text>
                <Text className={'text-xl'}>{date.toString()}</Text>
            </View>
        </View>
    );
};

export default DateHeader;
