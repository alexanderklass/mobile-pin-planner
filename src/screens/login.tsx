import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { globalStore } from '../store/global.store';
import BackgroundImage from '../components/BackgroundImage';

const Login = ({ navigation }: any) => {
    const { loginData, setLoginData } = globalStore();
    const handleOnChangeLogin = (name: string, input: any) => {
        setLoginData({ ...loginData, [name]: input });
    };

    const submitLogin = () => {
        navigation.navigate('Planner');
    };

    return (
        <View className={'flex-1 relative items-center gap-4 justify-center'}>
            <BackgroundImage />
            <View className={'flex items-center gap-2 justify-center'}>
                <Image
                    className={'w-[200px] h-[200px] rounded-full bg-blue-200'}
                    source={require('../assets/grid-logo.png')}
                />
                <Text className={'text-2xl text-white'}>Pin-Planner</Text>
            </View>
            <View className={'flex gap-1 w-[250px]'}>
                <TextInput
                    placeholder={'Name'}
                    value={loginData.username}
                    className={'bg-blue-50 p-2 rounded-md'}
                    onChangeText={(input) => handleOnChangeLogin('username', input)}
                />
                <TextInput
                    secureTextEntry
                    value={loginData.password}
                    placeholder={'Password'}
                    className={'bg-blue-50 p-2 rounded-md'}
                    onChangeText={(input) => handleOnChangeLogin('password', input)}
                />
                <Pressable onPress={submitLogin} className={'bg-black border border-white items-center p-2 rounded'}>
                    <Text className={'text-white'}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;
