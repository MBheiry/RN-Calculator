// Import Libraries for making a component
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// ---------------------------------------

// Create a new Tag name, for more organaized code
const CalcBtn = ({ num, onPress, style, textStyly }) => (
    <TouchableOpacity style={[css.CalcBtn, style]} onPress={ onPress }  >
        <Text style={[css.btnText , textStyly ]} >{ num } </Text>
    </TouchableOpacity> 
);
// ---------------------------------------


// Style here
const css = {

    CalcBtn:{
        borderWidth: 1,
        borderRadius: 2,
        // borderRadius: 30,
        
        borderColor: '#000',
        backgroundColor: 'gray',
        
        width: 60,
        height: 60,

        margin: 5,

        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2},
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        
        // elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop: 10,
    },
    btnText:{
        color: '#fff',
        fontSize: 20,
        padding: 0,
        margin: 0,
        // textAlign: 'center',
        
        // alignSelf: 'center',
    }

}
// ---------------------------------------

// Export Function Component
export { CalcBtn };