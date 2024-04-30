import React from 'react';
import { View, Text } from 'react-native';
import { globalStore } from '../store/global.store';
const DateHeader = () => {
    const { date, currentWeekDay } = globalStore();
    return (
        <View className={'flex items-center justify-center gap-3 w-full absolute top-0 p-2 flex-row bg-blue-200'}>
            <Text className={'text-xl'}>{currentWeekDay.toString()}</Text>
            <Text className={'text-xl'}>{date.toString()}</Text>
        </View>
    );
};

export default DateHeader;
