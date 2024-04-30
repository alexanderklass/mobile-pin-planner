import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

export interface ISelect {
    data: any;
    onChange: (value: string | number) => void;
}

const Select = ({ data, onChange }: ISelect) => {
    return (
        <RNPickerSelect
            style={{
                inputAndroid: {
                    color: 'black',
                    backgroundColor: 'white',
                    width: 111,
                    marginHorizontal: 5,
                    textAlign: 'left',
                },
            }}
            useNativeAndroidPickerStyle={true}
            items={data}
            onValueChange={(value) => {
                onChange(value);
            }}
        />
    );
};

export default Select;
