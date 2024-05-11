import React from 'react';
import { Image } from 'react-native';
const BackgroundImage = () => {
    return <Image className={'h-full absolute -z-20'} source={require('../assets/cheese-background.png')} />;
};

export default BackgroundImage;
