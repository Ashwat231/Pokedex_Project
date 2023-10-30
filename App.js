import { View, Text, Image, ScrollView ,TouchableOpacity} from 'react-native';
import { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import {styles} from './Components/Style.js'
import Data from './Components/Data';
import { SearchBar } from '@rneui/themed';

export default function App() {


  const [pokemon,setPokemon] = useState([]);
  const [val,setVal] = useState('');
  const [showData,setShowData] = useState(true);
  const [clear,setClear] = useState(false);
  const [number,setNumber] = useState(0);
  const [showUp,setShowUp] = useState(false);

  const inputRef = useRef(null)

  function goTop(){
    inputRef.current.scrollTo({y:0});
  }

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
    .then(res =>{
      setPokemon(res.data.results)
    })
  },[number])

  function handleScroll(event){
    const scrollY = event.nativeEvent.contentOffset.y;
    const threshold = 500;
    setShowUp(scrollY > threshold);
  }

  return (
    <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
  <ScrollView onScroll={handleScroll} ref={inputRef}>
      <Image
      style={{height:110, width:300, alignSelf:'center',marginTop:50,marginBottom:20}}
      source={{
        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8PFXd17TgdO3_La6eK0NenQGFM9Ha6yXWEIdmQbu&s'
      }}
      />

      <Text style={{alignSelf:'center',marginBottom:10,fontSize:12,color:'red'}}>(Note: Contains The First Generation Pokemons Only)</Text>
      <Text style={{alignSelf:'center',fontSize:12,margin:20,color:'black',textTransform:'uppercase',fontWeight:'bold',display:clear? 'none':'flex'}}>Select An Option:</Text>

    <View style={[{marginHorizontal: 20,marginBottom:20, borderRadius: 10, overflow: 'hidden'},{display:clear?'flex':'none'}]}>
      <SearchBar
        style={{ color: 'black'}}
        placeholder='Search Pokemon....'
        placeholderTextColor='gray'
        lightTheme={true}
        value={val}
        onChangeText={(text) =>{ setVal(text)}}
      />
    </View>
    
    <TouchableOpacity onPress={ () => {
      setShowData(true);
      setClear(false);
      setVal('');
      }}>
      
      <Text style={[styles.clearButton,{display: clear? 'flex' : 'none'}]}>Clear</Text></TouchableOpacity>

    {
      showData ? <View style={styles.pokeDisplay}>
      <TouchableOpacity style={styles.displayButtons} onPress={()=>{setShowData(false); setClear(true);setNumber(9)}}>
        <Text>First 9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.displayButtons} onPress={()=>{setShowData(false); setClear(true);setNumber(50)}}>
        <Text>First 50</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.displayButtons} onPress={()=>{setShowData(false); setClear(true); setNumber(100)}}>
        <Text>First 100</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.displayButtons} onPress={()=>{setShowData(false); setClear(true); setNumber(151)}}>
        <Text>All 151</Text>
      </TouchableOpacity> 
    </View> :     

    <View style={styles.container}>
      < Data pokemon = {pokemon} value={val}/>
    </View>
    }
  </ScrollView>

  <View style={[styles.topButton,{display: showUp? 'flex' : 'none'}]}>
      <TouchableOpacity onPress={goTop} >
        <Text>Up</Text>
      </TouchableOpacity>
  </View>

  <View style={{margin:5}}>
        <Text style={{fontWeight:'bold'}}>Created Using React Native & PokeAPI</Text>
      </View>
  </View>
  );
}
