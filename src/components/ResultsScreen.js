import React from 'react';
import {Text,View,StyleSheet,TextInput,FlatList,TouchableOpacity} from 'react-native';

import ResultsDetails from '../components/ResultsDetails';



const ResultsScreen =({title,results,navigation})=>{

return(
	<View>
	<Text style={styles.textInputStyle}> {title}</Text>
   <FlatList 
     horizontal
     showsHorizontalScrollIndicator={false}
     data={results}
     KeyExtractor={(result)=>result.id}
     renderItem={({item})=>{

     	return (
              
              <TouchableOpacity onPress={() =>navigation.navigate('Resultstoshow',{id:item.id})}>
             <ResultsDetails result={item}/>
             </TouchableOpacity>
             
     		);
     }
 }
    />
	</View>
	);

}

const styles = StyleSheet.create({
   
   textInputStyle:{
   
    marginLeft:15,
   	fontSize:20,
   	color:'red',

   },

});

export default ResultsScreen;