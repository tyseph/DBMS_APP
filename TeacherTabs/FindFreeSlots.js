import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  Alert,
  Button,
  TouchableHighlight,
  TextInput
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';

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
       <View style = { styles.MainContainer }>
        <View style={styles.FormBox}>
          <TextInput placeholderTextColor="#fff" placeholder="Course Code"  style = { styles.textInput_Style }/>
          <TextInput placeholderTextColor="#fff" placeholder="Day of the week" style = { styles.textInput_Style }/>
        <TouchableHighlight style={styles.SubmitButtonStyle} activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('Student')}} >
        <LinearGradient colors={['#36D6BD','#007E7B']} start={{ x:0, y:1}} style={ styles.Linear_G }>	
          <Text style={styles.TextStyle}> LOGIN </Text>
        </LinearGradient>
        </TouchableHighlight>
        </View>
        <Button title="take me back to login page" onPress={()=>{this.props.navigation.navigate('Login')}}/>
       </View>
        )
    }
    
  }

  const styles = StyleSheet.create(
    {
      MainContainer:
      {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#102138'
      },
      
      Login_box:
      {
        position: 'relative',
        marginTop: -110,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
      },
      
      FormBox:
      {
        flex: 0,
        justifyContent: 'space-evenly'
      },
      
      textInput_Style:
      {
        borderWidth: 0,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        fontSize: 25,
        color: '#fff',
        width: 300,
        textAlign: 'justify',
        fontFamily: 'Roboto-Thin', 
        paddingBottom: 0,
        marginTop: 10
      },	
      
      SubmitButtonStyle: {
        
        marginTop: 75,
        padding: 0,
        backgroundColor: '#36D6BD',
        borderRadius: 10,
        borderWidth: 0,
        width: 300
      },
      
      TextStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize: 32,
        fontWeight: '100',
        fontFamily: 'Roboto-Light'
        
      },
  
      TextStyle2:{
        color:'#fff',
        textAlign:'center',
        fontSize: 32,
        fontWeight: '100',
        fontFamily: 'Roboto-Light'
        
      },
  
      Linear_G:
      {
        flex: 0,
        borderRadius: 10,
      },
  
      Final_logo:
      {
        height: 250,
        width: 250,
      },
  
      image:
      {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40,
      }
    });
  