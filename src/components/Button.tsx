import React from "react";
import { 
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";

const Button = () => {
    return (
       <TouchableOpacity>
           <Text
            style={{fontSize: 18, color: '#fafafa'}}
           >
               Enviar
           </Text>
       </TouchableOpacity> 
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonSend: {
        
    }
});