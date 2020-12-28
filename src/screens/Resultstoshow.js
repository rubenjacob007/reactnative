import React,{useState,useEffect}from 'react';
import {Text,View,StyleSheet,TextInput,ScrollView} from 'react-native';


const Resultstoshow =({route})=>{
        const { id } = route.params;
              return (

            <View> 
                  <Text> Resultstoshow{id}</Text>
            </View>
      	);
 
	}

const styles = StyleSheet.create({});

export default Resultstoshow;