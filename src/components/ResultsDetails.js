import React from 'react';
import {Text,View,Image,StyleSheet,TextInput,FlatList} from 'react-native';



const ResultsDetails =({result})=>{
   return (
      <View style={styles.container}>
      <Image style={styles.imagess} source={{uri:result.image_url}}  />
      <Text style={styles.text}>{result.name} </Text>
      <Text>

         {result.rating} - Stars, {result.review_count} Reviews
      </Text>

      </View>
  
   	)
}

const styles = StyleSheet.create({

	imagess:{

		width:250,
		height:120,
		borderRadius:4,
		marginBottom:5

	},

	text:{
		fontSize:16,
		fontWeight:'bold',
	    marginBottom:5
	},
	container:{
		marginLeft:15
	}
});

export default ResultsDetails;