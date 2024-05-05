import React from 'react';
import { View } from 'react-native';

export interface IModalLayout {
    toggleWindow: boolean;
    children: React.ReactNode;
    color?: string;
    width?: string;
}

const ModalLayout = ({ toggleWindow, children, color = 'bg-blue-500', width = 'w-[250px]' }: IModalLayout) => {
    return (
        <View className={'absolute'}>
            {toggleWindow && (
                <View className={`${color} rounded-md ${width} flex border-2 p-2`}>
                    <View className={'flex flex-col justify-center gap-2'}>{children}</View>
                </View>
            )}
        </View>
    );
};

export default ModalLayout;
