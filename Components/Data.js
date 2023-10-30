import { View, Text,Image, ScrollView  } from 'react-native'
import React from 'react'
import {styles} from './Style.js'

export default function Data({pokemon,value}) {

  const filteredPokemon = pokemon.filter(p=>p.name.includes(value.toLowerCase()))

  
  if(value.length === 0){
    return(
      <View style={{marginBottom:20}}>
      {pokemon.map( (p,index) =>(
        <View style={styles.pokeContainer} key={index}>
        <Text style={{textTransform:'uppercase', textAlign:'center',fontWeight:'bold'}} >
          {p.name}
        </Text>
              <Image
              style={{height:200, width:200}} 
              source={{
                uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png?fbclid=IwAR1-kDyiqPU_xi79YgzCJMDaBSMiSYTVIka6JNm0MIxlk6r3-w_QH9433uY`
              }}/>

      </View>
      )
      )}
  </View>
    )
  }
  else{
    return(
      <View style={{marginBottom:20}}>
      {filteredPokemon.map( (p,index) => 
        (
        <View style={styles.pokeContainer} key={index}>
        <Text style={{textTransform:'uppercase', textAlign:'center',fontWeight:'bold'}} >
          {p.name}
        </Text>
              <Image
              style={{height:200, width:200}} 
              source={{
                uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split('/').slice(-2, -1)[0]}.png?fbclid=IwAR1-kDyiqPU_xi79YgzCJMDaBSMiSYTVIka6JNm0MIxlk6r3-w_QH9433uY`
              }}/>

      </View>
      )
      )}
  </View>
    )
  }

}
