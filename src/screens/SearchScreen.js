import React,{useState,useEffect}from 'react';
import {Text,View,StyleSheet,TextInput,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsScreen from '../components/ResultsScreen';
import yelp from '../api/yelp';

const SearchScreen =({navigation})=>{
const [term,SetTerm]	= useState('');
const [results,SetResults]	= useState([]);
const [errormessage,Seterrormessage]	= useState([]);


const Searchapi = async ()=>{
	try{
	const response = await yelp.get('/search',{params:{

		limt:50,
		location:'san jose',
		term
}
	});
	SetResults(response.data.businesses);
}catch(err){
     Seterrormessage('something went wrong');
}
}

useEffect(()=>{
	Searchapi('pasta');
},[]);

const filterresultbyprice = (price) =>{

	return results.filter(result=> {
		return result.price===price;
	});
}
return(<View style={{flex:1}}>
	<SearchBar term={term} onTermChanged={(newTerm)=>SetTerm(newTerm)} 
	onSubmitTerm={()=>Searchapi()} />
	<ScrollView>
	<ResultsScreen title ="Cost Effective" navigation={navigation} results={filterresultbyprice('$')}/>
    <ResultsScreen title ="Bit Higher" navigation={navigation} results={filterresultbyprice('$$')}/>

	<ResultsScreen title ="Costly" navigation={navigation} results={filterresultbyprice('$$')}/>
    </ScrollView>

	 <Text> {term} </Text>
	{errormessage ?<Text> {errormessage} </Text>:null } 

	 	<Text> we have found {results.length} </Text>
	</View>);
}

const styles = StyleSheet.create({
     
});

export default SearchScreen;