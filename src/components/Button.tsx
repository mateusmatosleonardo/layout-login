import React from "react";
import { 
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";

const Button = () => {
    return (
       <TouchableOpacity style={styles.buttonSend}>
           <Text
            style={{fontSize: 18, color: '#222'}}
           >
               Enviar
           </Text>
       </TouchableOpacity> 
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonSend: {
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    }
});