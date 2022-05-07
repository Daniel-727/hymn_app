import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

function SongComponent(props) {
    return(
        <View style={styles.song}>
            <Text style={styles.text}>{props.author} {props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: '#fff'
    },
    song: {
        flex: 1,
        backgroundColor: 'tomato',

    }
})

export default SongComponent;