import React from 'react';
import { View, Text } from 'react-native';
import { globalStore } from '../store/global.store';
import Timer from './Timer';
const DateHeader = () => {
    const { date, currentWeekDay } = globalStore();
    return (
        <View className={'flex items-center justify-center w-full absolute top-0 p-2 bg-blue-500'}>
            <View className={'flex flex-row'}>
                <Text className={'text-xl bg-blue-100 rounded-md p-0.5 mx-0.5'}>{currentWeekDay.toString()}</Text>
                <Text className={'text-xl bg-yellow-200 rounded-md p-0.5 mx-0.5'}>{date.toString()}</Text>
                <Timer textStyle={'text-xl bg-purple-200 rounded-md p-0.5 mx-0.5'} />
            </View>
        </View>
    );
};

export default DateHeader;
