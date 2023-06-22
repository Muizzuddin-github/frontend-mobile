import { View,Text,TextInput } from "react-native";

const TextInputMenu = (props) => {
    return (
        <View>
            <View>
                <Text>{props.nama}</Text>
                <TextInput placeholder={props.InNama}/>
            </View>
        </View>
    );
}
 
export default TextInput;