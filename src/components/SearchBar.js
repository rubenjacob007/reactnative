import React from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';


const SearchBar =({term,onTermChanged,onSubmitTerm})=>{

return(
	<View style={styles.backgroundStyle}>
	<Feather name="search" style={styles.IconStyle}/>
	<TextInput placeholder="Search" style={styles.textInputStyle}
	value={term}
	onChangeText={onTermChanged} 
	onEndEditing={onSubmitTerm} 
	/>
	</View>
	);

}

const styles = StyleSheet.create({
   backgroundStyle:{
   	marginTop:10,
   	backgroundColor:'#F0EEEE',
   	height:50,
   	borderRadius:5,
   	marginHorizontal:15,
   	flexDirection:'row',
      marginBottom:5
 
   },
   textInputStyle:{
   
   
   	flex:1,
   	fontSize:20,
   },
   IconStyle:{
   	fontSize:35,
   	marginHorizontal:15,
   	alignSelf:'center',


   }
});

export default SearchBar;