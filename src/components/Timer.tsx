import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

interface ITimer {
    textStyle: string;
}

const Timer = ({ textStyle }: ITimer) => {
    const [time, setTime] = useState<any>(0);

    const updateTime = () => {
        const timer = new Date();
        let hours = timer.getHours().toString();
        let minutes = timer.getMinutes().toString();
        let seconds = timer.getSeconds().toString();
        hours = hours.padStart(2, '0');
        minutes = minutes.padStart(2, '0');
        seconds = seconds.padStart(2, '0');
        let clockTime = `${hours}:${minutes}:${seconds} Uhr`;
        setTime(clockTime);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateTime();
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <Text className={textStyle}>{`${time}`}</Text>;
};

export default Timer;
