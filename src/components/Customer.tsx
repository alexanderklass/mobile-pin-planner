import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export interface ICustomer {
    name: string;
    time: string;
    notes: string;
    onPress?: () => void;
    color: string;
}

const Customer = ({ name, time, notes, onPress, color }: ICustomer) => {
    return (
        <TouchableOpacity onPress={onPress} className={`${color} w-[395px] px-4 flex items-center flex-row my-1`}>
            <View className={'pr-5'}>
                <View className={'bg-black rounded-md'}>
                    <Icon color={'white'} size={40} name={'user'} />
                </View>
            </View>
            <View>
                <Text>{name}</Text>
                <Text>{time}</Text>
                <Text>{notes}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Customer;
