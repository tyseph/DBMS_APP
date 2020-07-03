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
       <SafeAreaView style = { styles.MainContainer }>
        <SafeAreaView style={styles.FormBox}>
          <Text style = { styles.textInput_Style }>Course Code :</Text>
          <TextInput placeholderTextColor="#fff" style = { styles.textInputdisplay_Style }/>
        </SafeAreaView>
        <SafeAreaView style={styles.FormBox}>
          <Text style = { styles.textInput_Style }>Day of the Week :</Text>
          <TextInput placeholderTextColor="#fff" style = { styles.textInputdisplay_Style }/>
        </SafeAreaView>
        <SafeAreaView style={styles.Button_align}>
        <TouchableHighlight style={styles.SubmitButtonStyle} activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('')}} >
        <LinearGradient colors={['#36D6BD','#007E7B']} start={{ x:0, y:1}} style={ styles.Linear_G }>
          <Text style={styles.TextStyle}>FIND</Text>
        </LinearGradient>
        </TouchableHighlight>
        <SafeAreaView style={styles.timing}>
          <Text style={styles.textOutput}>Timings</Text>
          <Text style={styles.textOutputdisplay}>{this.state.freeTimings}</Text>
        </SafeAreaView>

        </SafeAreaView>
       </SafeAreaView>
        )
    }

  }

  const styles = StyleSheet.create(
    {
      MainContainer:
      {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#102138',
      },

      FormBox:
      {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: -150,
      },

      textInput_Style:
      {
        borderWidth: 0,
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Roboto-Thin',
        paddingBottom: 0,
      },

      textInputdisplay_Style:
      {
        borderWidth: 0,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        fontSize: 20,
        color: '#fff',
        width: 175,
        textAlign: 'center',
        fontFamily: 'Roboto-Thin',
        paddingBottom: 0
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

      textOutputdisplay:
      {
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Roboto-Thin',
        paddingBottom: 0,
        borderColor: '#fff',
        borderWidth: 1,
        height: 150,
        width: 300
      },

      timing:
      {
        flex: 0,
        marginTop: 10
      },
      SubmitButtonStyle: {
        padding: 0,
        backgroundColor: '#36D6BD',
        borderRadius: 10,
        borderWidth: 0,
        width: 200
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
        borderRadius: 10,
      },

      Button_align:
      {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: -100
      },
      LogoutButtonStyle: {

        position: 'relative',
        flex: 0,
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
