import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export interface IBottomButton {
    onPress?: () => void;
    name?: string;
    size?: number;
}

const BottomButton = ({ onPress, name = 'plus', size = 30 }: IBottomButton) => {
    return (
        <TouchableOpacity
            className={`rounded-md bg-blue-500 w-[60px] flex h-fit items-center justify-center`}
            onPress={onPress}
        >
            <Icon color={'white'} name={name} size={size} />
        </TouchableOpacity>
    );
};

export default BottomButton;
