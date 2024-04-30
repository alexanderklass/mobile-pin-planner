import Toast from 'react-native-toast-message';

export const emitToast = (type: string, msg: string) => {
    Toast.show({
        type: type,
        text1: msg,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
    });
};
