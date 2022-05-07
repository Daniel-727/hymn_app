import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function Header() {
    
    return(
        <View style={styles.header}>
            <Text style={styles.text}>Songs and Hymns of Life</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    },
    header: {
        backgroundColor: '#181818',
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default Header;