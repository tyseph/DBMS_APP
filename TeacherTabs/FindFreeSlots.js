import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


  export default class FindFreeSlots extends Component{
    constructor(){
        super();
        this.state={
            Id:'',
            courseName:'',
            dayOfTheWeek:'',
            freeTimings:'',
            selectedCourse:'',
            courseName1:''
            
        }
    }
   
   
    render(){
       

            
        return(
       <View>
        <Text>Hey!Imma find your free slots and help profs harass you</Text>
        <Button title="take me back to login page" onPress={()=>{this.props.navigation.navigate('Login')}}/>
       </View>
        )
    }
    
  }
  