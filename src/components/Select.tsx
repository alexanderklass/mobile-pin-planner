import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { startTimeList, endTimeList } from '../init/initGridData';

export interface ISelect {
    data?: any;
    onChange: (value: string | number) => void;
    value?: number;
    selectType?: string;
    timeType?: string;
}

const Select = ({ data, onChange, value, selectType, timeType }: ISelect) => {
    const selectTimeData = () => {
        const startList = Array.from(startTimeList).map((item: string, index: number) => {
            return { label: item, value: index, key: index };
        });
        const endList = Array.from(endTimeList).map((item: string, index: number) => {
            return { label: item, value: index, key: index };
        });

        switch (timeType) {
            case 'startTime':
                return startList;
            case 'endTime':
                return endList;
            default:
                return [];
        }
    };

    const selectLaneData = () => {
        return Array.from({ length: 12 }).map((item: any, index: number) => {
            return { label: `${index + 1}`, value: index, key: index };
        });
    };

    const handleData = () => {
        switch (selectType) {
            case 'lane':
                return selectLaneData();
            case 'time':
                return selectTimeData();
            default:
                return [];
        }
    };

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
            value={value}
            items={handleData()}
            onValueChange={(value) => {
                onChange(value);
            }}
        />
    );
};

export default Select;
