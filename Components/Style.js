import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20,
        backgroundColor:'coral',
        marginHorizontal:30,
        borderWidth:2,
        borderRadius:20,
      },

      pokeContainer:{
        height:'auto',
        width:'auto',
        borderWidth: 2,
        margin:30,
        paddingHorizontal:30,
        paddingTop:10,
        backgroundColor:'white',
        borderRadius:50,
      },

      pokeDisplay:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        flexWrap:"wrap"
      },

      displayButtons:{
        padding:5,
        borderRadius:10,
        borderBlockColor:'black',
        borderWidth:2,
      },

      clearButton:{
        alignSelf:"center",
        marginBottom:20,
        marginHorizontal:80,
        padding:8,
        borderRadius:10,
        borderWidth:2,
        textTransform:"uppercase",

      },

      topButton:{
        position:'absolute',
        right:10,
        bottom:20,
        padding:20,
        borderWidth:2,
        borderRadius:20,
        backgroundColor:'orange'
      }
});