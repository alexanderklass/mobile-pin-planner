import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export interface ICustomButton {
    text?: string;
    style?: any;
    onPress?: () => void;
    disabled?: boolean;
    textStyle?: string;
    icon?: boolean;
    iconName?: string;
    iconColor?: string;
    iconSize?: number;
}

const CustomButton = ({
    text,
    style,
    onPress,
    disabled,
    textStyle,
    icon,
    iconName = '',
    iconSize,
    iconColor,
}: ICustomButton) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            className={`${style} ${disabled && 'bg-gray-200'} shadow-black shadow-2xl p-2 flex-row space-x-1 transition-all rounded-md flex items-center justify-center`}
            onPress={onPress}
        >
            {icon && <Icon name={iconName} size={iconSize} color={iconColor} />}
            {text && <Text className={textStyle}>{text}</Text>}
        </TouchableOpacity>
    );
};

export default CustomButton;
