import { AsyncStorage, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {
  const [ text ,setText]= useState('')
  const [get,setGet] = useState([])
  const [clicked,setClicked] = useState(false)

const Add = async()=>{
 
  await AsyncStorage.setItem('note',get)
  

}
const Get = async()=>{
  
  const value = await AsyncStorage.getItem('note')
  if (value !== null ){
  setText(value)
  }else{
    alert('Empty ToDo')
  }

}


  return (
    <View style={styles.container}>
              <View style={styles.childContainer}>
                <Text style={styles.headerStyle}>ToDo list</Text>

                <View style={{flexDirection:'row',marginLeft:150}}>
                  <TouchableOpacity onPress={Add}>
                <Icon name='plus' color={'red'} size={24} style={styles.iconStyle}
                ></Icon></TouchableOpacity>
                <TouchableOpacity onPress={Get}>
                <Icon name={'save'} color={'red'} size={24} style={styles.iconStyle}></Icon></TouchableOpacity>
                <TouchableOpacity>
                <Icon name='trash'  color={'red'} size={24} style={styles.iconStyle}></Icon></TouchableOpacity>
                </View>

              </View>
      <View>
              <View>
                <TextInput style={styles.inputStyle}
                placeholder='Enter the text'
                onChangeText={get=>setGet(get)}
                value={get}>
                </TextInput>
        <View>
         
                  <Text style={{fontSize:24,color:'black',margin:30}}>{text}</Text>
              
        </View>


                
              </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    backgroundColor:'#eeeeee',
    flex:1
  },
  childContainer:{
    height:50,
    width:'100%',
    backgroundColor:'white',
    flexDirection:'row',

  },
  headerStyle:{
    color:'black',
    fontSize:24,
    marginTop:5,
    marginLeft:20,
    
    
  },
  iconStyle:{
    marginRight:40,
    marginTop:10,
  
  },
  inputStyle:{
    width:'90%',
    height:40,
    backgroundColor:'white',
    margin:30,
    borderRadius:8,
    fontSize:18
  }
})