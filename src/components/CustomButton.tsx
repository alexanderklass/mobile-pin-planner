import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export interface ICustomButton {
    text?: string;
    style?: any;
    onPress?: () => void;
    disabled?: boolean;
}

const CustomButton = ({ text, style, onPress, disabled }: ICustomButton) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            className={`${style} ${disabled && 'bg-gray-200'} transition-all flex p-3 items-center justify-center`}
            onPress={onPress}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
