import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, Image, NativeModules } from 'react-native';
import SongComponent from './components/SongComponent';
import Header from './components/Header';
import hymns from './shared/resources/metadata/shl.json';

const { StatusBarManager } = NativeModules; //destructuring StatusBarManager from NativeModules to get the StatusBar Height since SafeAreaView isn't working as intended

const allSongs = hymns['Songs and Hymns of Life'];

export default function App() {

  return (
    <View style={styles.container}>
        <ScrollView>
            <Header/>
            {allSongs.map((song, i) => {
                return(
                    <SongComponent key={song.songNumber} title={song.title} author={song.author}/>
                )
            })}
        </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        marginTop: StatusBarManager.HEIGHT,
        flex: 1,
        backgroundColor: '#181818',
        /* padding: 5, */
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
});
