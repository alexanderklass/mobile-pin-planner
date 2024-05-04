import React from 'react';
import { View } from 'react-native';

export interface IModalLayout {
    toggleWindow: boolean;
    children: React.ReactNode;
}

const ModalLayout = ({ toggleWindow, children }: IModalLayout) => {
    return (
        <View className={'absolute'}>
            {toggleWindow && (
                <View className={'bg-blue-500 rounded-md w-[250px] flex border p-2'}>
                    <View className={'flex flex-col justify-center gap-2'}>{children}</View>
                </View>
            )}
        </View>
    );
};

export default ModalLayout;
