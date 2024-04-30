import React from 'react';
import { Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export interface IBottomButton {
    onPress?: () => void;
    name?: string;
    size?: number;
}

const BottomButton = ({ onPress, name = 'plus', size = 30 }: IBottomButton) => {
    return (
        <Pressable className={'rounded-md flex h-fit w-fit items-center justify-center'} onPress={onPress}>
            <Icon color={'black'} name={name} size={size} />
        </Pressable>
    );
};

export default BottomButton;
