import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './src/screens/login';
import planner from './src/screens/planner';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const Stack = createStackNavigator();
    return (
        <View className={'flex-1'}>
            <StatusBar hidden={true} style="auto" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Login'} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={login} />
                    <Stack.Screen name="Planner" component={planner} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
