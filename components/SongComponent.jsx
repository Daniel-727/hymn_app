import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

function SongComponent(props) {
    return(
        
            <Text style={styles.text}>{props.author} {props.title}</Text>
        
    )
}

const styles = StyleSheet.create({
    text:{
        color: '#fff'
    },
    song: {
        backgroundColor: 'tomato',

    }
})

export default SongComponent;