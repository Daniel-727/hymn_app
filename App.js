import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, Image, NativeModules, FlatList, TouchableHighlight } from 'react-native';
import SongComponent from './components/SongComponent';
import Header from './components/Header';
import hymns from './shared/resources/metadata/shl.json';

const { StatusBarManager } = NativeModules; //destructuring StatusBarManager from NativeModules to get the StatusBar Height since SafeAreaView isn't working as intended

const allSongs = hymns['Songs and Hymns of Life'];

const people = [
    {name: 'daniel', id: 1},
    {name: 'elizabeth', id: 2},
    {name: 'jerry', id: 3},
    {name: 'sam', id: 4},
    {name: 'joshua', id: 5},
    {name: 'dumpty', id: 6}
]

export default function App() {

  return (
    <View style={styles.container}>
        <Header/>
        <FlatList
            style={styles.list}
            keyExtractor={(item) => item.songNumber.toString()}
            data={allSongs}
            renderItem={({item}) => { return <SongComponent author={item.author} title={item.title}/>}
                
            }
        />
    </View>
  );
}



const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    container: {
        marginTop: StatusBarManager.HEIGHT,
        flex: 1,
        backgroundColor: '#181818',
        /* padding: 5, */
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
});
