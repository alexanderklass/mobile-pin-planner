import React from 'react';
import { View, Text } from 'react-native';

export interface ICustomer {
    name: string;
    time: string;
    notes: string;
}

const Customer = ({ name, time, notes }: ICustomer) => {
    return (
        <View className={'bg-blue-500 max-w-[395px] w-[390px] flex items my-1'}>
            <Text>{name}</Text>
            <Text>{time}</Text>
            <Text>{notes}</Text>
        </View>
    );
};

export default Customer;
