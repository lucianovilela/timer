import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import  { useState }  from 'react';

import  Feed  from '../components/Feed';
const FeedScreen=()=> {
 
  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
          <Feed userName="Barney"/>
      </ScrollView>
  );
}

FeedScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default FeedScreen;