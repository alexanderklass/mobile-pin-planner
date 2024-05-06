import React, { useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { globalStore } from '../store/global.store';
import { initLaneData, startTimeList } from '../init/initGridData';
import Icon from 'react-native-vector-icons/Feather';

const Grid = () => {
    const { gridData, setGridData, date, customerList, setOptionsData, setOptionsModal } = globalStore();
    const time = startTimeList;

    const fetchCustomerList = () => {
        const updatedLane = initLaneData(12);
        const filteredCustomerList = customerList.filter((item: any) => {
            return item.date === date;
        });
        filteredCustomerList.forEach((item: any) => {
            //const price = calcLanePrice(item);
            for (let i = item.startLane; i <= item.endLane; i++) {
                for (let j = item.startTime; j <= item.endTime; j++) {
                    updatedLane[i].time[j] = {
                        ...updatedLane[i].time[j],
                        uID: item.uID,
                        customerName: item.customerName,
                        customerNumber: item.customerNumber,
                        date: item.date,
                        customerNotes: item.customerNotes,
                        workerName: item.workerName,
                        startLane: item.startLane,
                        endLane: item.endLane,
                        startTime: item.startTime,
                        endTime: item.endTime,
                        customerColor: item.customerColor,
                        payedStatus: item.payedStatus,
                    };
                }
            }
        });
        setGridData(updatedLane);
    };

    const customerPressed = (laneIndex: number, timeIndex: number) => {
        setOptionsData(gridData[laneIndex].time[timeIndex]);
        setOptionsModal(true);
    };

    const LaneGrid = () => {
        return (
            <View className={'flex flex-row'}>
                <View className={'w-[40px] items-center border border-gray-600 bg-blue-200'}>
                    <Image
                        className={'rounded-full bg-blue-200 w-[35px] h-[30px]'}
                        source={require('../assets/grid-logo.png')}
                    />
                </View>
                {Array.from({ length: 12 }, (time, index) => {
                    return (
                        <Text
                            key={index}
                            className={`text-xl w-[27px] text-center border border-gray-600 bg-gray-200 ${index % 4 === 2 && 'bg-blue-200'} ${index % 4 === 3 && 'bg-blue-200'} `}
                        >
                            {index + 1}
                        </Text>
                    );
                })}
            </View>
        );
    };

    const TimeGrid = () => {
        return (
            <View className={'flex flex-col'}>
                {time.map((time, index) => {
                    return (
                        <Text
                            key={index}
                            className={`h-[25px] text-center w-[40px] border border-gray-600 bg-gray-200 ${index % 4 === 2 && 'bg-blue-200'} ${index % 4 === 3 && 'bg-blue-200'} `}
                        >
                            {time}
                        </Text>
                    );
                })}
            </View>
        );
    };

    const CustomerGrid = () => {
        return (
            <View className={'flex flex-row'}>
                {gridData.map((lane, laneIndex) => {
                    return (
                        <View key={laneIndex} className={'flex h-full flex-col'}>
                            {lane.time.map((time, timeIndex) => {
                                return (
                                    <View
                                        key={timeIndex}
                                        className={`${time.customerColor ? time.customerColor : 'bg-gray-200'} border border-black w-[27px] h-[25px]`}
                                    >
                                        {time.customerName && (
                                            <Pressable
                                                className={'w-full h-full relative'}
                                                onPress={() => customerPressed(laneIndex, timeIndex)}
                                            >
                                                {time.startLane === laneIndex && time.startTime === timeIndex && (
                                                    <Text className={'text-center'}>
                                                        {time.customerName.split('')[0]}
                                                    </Text>
                                                )}

                                                {time.payedStatus && (
                                                    <View className={'absolute top-0 right-0 rounded-md bg-black'}>
                                                        <Icon
                                                            className={'text-center'}
                                                            name={'dollar-sign'}
                                                            color={'white'}
                                                            size={10}
                                                        />
                                                    </View>
                                                )}
                                            </Pressable>
                                        )}
                                    </View>
                                );
                            })}
                        </View>
                    );
                })}
            </View>
        );
    };

    useEffect(() => {
        fetchCustomerList();
    }, [date, customerList]);

    return (
        <View className={'flex flex-col'}>
            <LaneGrid />
            <View className={'flex flex-row'}>
                <TimeGrid />
                <CustomerGrid />
            </View>
        </View>
    );
};

export default Grid;
