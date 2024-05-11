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
        <TouchableOpacity
            onPress={onPress}
            className={`${color} shadow-2xl shadow-black px-4 mx-3 rounded-xl flex py-2 items-center flex-row my-1`}
        >
            <View className={'pr-5'}>
                <View className={'bg-white opacity-80 rounded-md'}>
                    <Icon color={'black'} size={40} name={'user'} />
                </View>
            </View>
            <View className={'space-y-0.5 flex'}>
                <Text className={'bg-white opacity-80 rounded-md p-1'}>{name}</Text>
                <Text className={'bg-white opacity-80 rounded-md p-1'}>{time}</Text>
                {notes && <Text className={'bg-white opacity-80 max-w-[250px] p-1 rounded-md'}>{notes}</Text>}
            </View>
        </TouchableOpacity>
    );
};

export default Customer;
