import React from 'react';
import { Pressable, Text } from 'react-native';

export interface ICustomButton {
    text?: string;
    style?: any;
    onPress?: () => void;
    disabled?: boolean;
}

const CustomButton = ({ text, style, onPress, disabled }: ICustomButton) => {
    return (
        <Pressable
            disabled={disabled}
            className={`${style} ${disabled && 'bg-gray-200'} transition-all flex p-3 items-center justify-center`}
            onPress={onPress}
        >
            <Text>{text}</Text>
        </Pressable>
    );
};

export default CustomButton;
