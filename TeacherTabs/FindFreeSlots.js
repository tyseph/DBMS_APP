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
        </View>
        <View style={styles.Button_align}>
        <TouchableHighlight style={styles.SubmitButtonStyle} activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('')}} >
        <LinearGradient colors={['#36D6BD','#007E7B']} start={{ x:0, y:1}} style={ styles.Linear_G }>	
          <Text style={styles.TextStyle}>FIND FREE SLOTS</Text>
        </LinearGradient>
        </TouchableHighlight>
        <View style={styles.timing}>
          <Text style={styles.textOutput}>Timings :</Text>
        <TextInput textContentType='addressCity' placeholderTextColor="#fff" style = { styles.textOutput_Style } />
        </View>
        <TouchableHighlight style={styles.LogoutButtonStyle} activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('Login')}} >
        <LinearGradient colors={['#A23434','#7E1600']} start={{ x:0, y:2}} style={ styles.Linear_G }>	
          <Text style={styles.LogoutTextStyle}>LOGOUT</Text>
        </LinearGradient>
        </TouchableHighlight>
        </View>
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
        backgroundColor: '#102138'
      },
            
      FormBox:
      {
        marginTop: 10,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      
      textInput_Style:
      {
        borderWidth: 0,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        fontSize: 20,
        color: '#fff',
        width: 175,
        textAlign: 'center',
        fontFamily: 'Roboto-Thin', 
        paddingBottom: 0,
        marginLeft: 10,
        marginRight: 10
      },	
      textOutput_Style:
      {
        borderWidth: 0,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        fontSize: 25,
        color: '#fff',
        width: 270,
        fontFamily: 'Roboto-Thin', 
        padding: 0
      },	
      textOutput:
      {
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Roboto-Thin', 
        paddingBottom: 0,
      },	
      timing:
      {
        marginTop: 50,
        flex: 0,
        flexDirection: 'row'
      },      
      SubmitButtonStyle: {
        
        marginTop: 50,
        padding: 0,
        backgroundColor: '#36D6BD',
        borderRadius: 10,
        borderWidth: 0,
        width: 250
      },
      
      TextStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize: 25,
        fontWeight: '100',
        fontFamily: 'Roboto-Light'
        
      },
    
      Linear_G:
      {
        flex: 0,
        borderRadius: 10,
      },
  
      Button_align:
      {
        alignItems: "center",
        justifyContent: 'space-evenly'
      },
      LogoutButtonStyle: {

        marginTop: 500,
        padding: 0,
        backgroundColor: '#36D6BD',
        borderRadius: 10,
        borderWidth: 0,
        width: 250
      },
      LogoutTextStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize: 30,
        fontWeight: '100',
        fontFamily: 'Roboto-Light'
        
      },
    });
  