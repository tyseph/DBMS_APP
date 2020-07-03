import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

export default class AdminControl extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      chosenDate: '',
    };
  }

  handlePicker = (date) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(date).format('YYYY-MM-DD'),
    });
  };

  showPicker = () => {
    this.setState({
      isVisible: true,
    });
  };

  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.maincontainer}>

      <SafeAreaView style={styles.containerText}>
    <Text style={styles.TextStyle}>Holidays</Text>
    </SafeAreaView>
        <SafeAreaView style={styles.datesContainerTop}>

          <SafeAreaView style={styles.leftContainer}>
          <SafeAreaView style={styles.setholidays}>
          <DatePicker date={this.state.dateHoliday} format="YYYY-MM-DD" onDateChange={(date) => {this.setState({dateHoliday: date})}}  mode="date" placeholder="select date" />
        <TouchableHighlight style={styles.SubmitButtonStyle} activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('Login')}}>
        <LinearGradient colors={['#36D6BD','#007E7B']} start={{ x:0, y:1}} style={ styles.Linear_G }>
          <Text style={styles.TextStyle}>Set Holiday</Text>
        </LinearGradient>
        </TouchableHighlight>
          </SafeAreaView>
          <SafeAreaView style={styles.setholidays}>
          <DatePicker date={this.state.dateHoliday} format="YYYY-MM-DD" onDateChange={(date) => {this.setState({dateHoliday: date})}}  mode="date" placeholder="select date" />

            <TouchableHighlight style={styles.SubmitButtonStyle} activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('Login')}}>
        <LinearGradient colors={['#36D6BD','#007E7B']} start={{ x:0, y:1}} style={ styles.Linear_G }>

          <Text style={styles.TextStyle}>Delete Holiday</Text>
        </LinearGradient>
        </TouchableHighlight>

          </SafeAreaView>
          </SafeAreaView>
          <SafeAreaView style={styles.rightContainer}>
          <Text style={styles.TextStyle}>Current Holidays</Text>

            <SafeAreaView style={styles.rightTextHolidays}>
            <Text style={styles.TextStyle}>Dates Here</Text>
            </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.containerText}>
      <Text style={styles.TextStyle}>Semester Details</Text>
      </SafeAreaView>
          <SafeAreaView style={styles.datesContainerBottom}>

            <SafeAreaView style={styles.leftContainer}>
            <SafeAreaView style={styles.setsem}>
              <Text style={styles.TextStyleSemDates}>Set Beginning</Text>
            <DatePicker date={this.state.dateHoliday} format="YYYY-MM-DD" onDateChange={(date) => {this.setState({dateHoliday: date})}}  mode="date" placeholder="select date" />

            </SafeAreaView>

            <SafeAreaView style={styles.setsem}>
              <Text style={styles.TextStyleSemDates}>Set Midsem</Text>
            <DatePicker date={this.state.dateHoliday} format="YYYY-MM-DD" onDateChange={(date) => {this.setState({dateHoliday: date})}}  mode="date" placeholder="select date" />

            </SafeAreaView>

            <SafeAreaView style={styles.setsem}>
              <Text style={styles.TextStyleSemDates}>Set Endsem</Text>
            <DatePicker date={this.state.dateHoliday} format="YYYY-MM-DD" onDateChange={(date) => {this.setState({dateHoliday: date})}}  mode="date" placeholder="select date" />

            </SafeAreaView>
            <TouchableHighlight style={styles.SetButtonStyle} activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('Login')}}>
            <LinearGradient colors={['#36D6BD','#007E7B']} start={{ x:0, y:1}} style={ styles.Linear_G }>
              <Text style={styles.TextStyle}>Set Dates</Text>
            </LinearGradient>
            </TouchableHighlight>
            </SafeAreaView>
            <SafeAreaView style={styles.rightContainer}>
            <Text style={styles.TextStyle}>Current Dates</Text>

              <SafeAreaView style={styles.rightTextSem}>
              <Text style={styles.TextStyle}>Dates Here</Text>
              </SafeAreaView>
              </SafeAreaView>
          </SafeAreaView>

        <SafeAreaView style={styles.logoutcontainer}>
        <TouchableHighlight style={styles.LogoutButtonStyle} activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('Login')}} >
        <LinearGradient colors={['#A23434','#7E1600']} start={{ x:0, y:2}} style={ styles.Linear_G }>
          <Text style={styles.LogoutTextStyle}>LOGOUT</Text>
        </LinearGradient>
        </TouchableHighlight>
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#102138'
  },

  setholidays:{
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'center',
    width: 200,
    marginTop: 50,
    flex: 1,
  },

  setsem:{
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'center',
    width: 200,
    height: 60,
    marginTop: 30,
    flex: 0,
  },

  containerText:{
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 10,
  },

  datesContainerTop:{
    flex: 1,
    marginTop: 10,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
  },

  datesContainerBottom:{
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
  },

  logoutcontainer:{
    flex: 1,

  },

  LogoutButtonStyle: {

    position: 'relative',
    flex: 0,
    marginTop: 150,
    padding: 0,
    backgroundColor: '#36D6BD',
    borderRadius: 10,
    borderWidth: 0,
    width: 150
  },

  rightTextHolidays: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    width: 150,
    height: 180,
    marginTop: 10,

  },

  rightTextSem: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    width: 150,
    height: 260,
    marginTop: 10,

  },

  LogoutTextStyle:{
    color:'#fff',
    textAlign:'center',
    fontSize: 15,
    fontWeight: '100',
    fontFamily: 'Roboto-Light'

  },
  Linear_G:
  {
    borderRadius: 10,
  },

  SetButtonStyle: {

    marginTop: 30,
    marginBottom: 0,
    padding: 0,
    marginLeft:0,
  //  backgroundColor: '#36D6BD',
    borderRadius: 2,
    borderWidth: 0,
    width: 150,
  },

  SubmitButtonStyle: {

    marginTop: 10,
    marginBottom: 0,
    padding: 0,
    marginLeft:0,
  //  backgroundColor: '#36D6BD',
    borderRadius: 2,
    borderWidth: 0,
    width: 150,
  },

  TextStyle:{
    color:'#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '100',
    fontFamily: 'Roboto-Light'

  },

  TextStyleSemDates:{
    color:'#fff',
  //  textAlign: 'center',
    fontSize: 20,
    fontWeight: '100',
    fontFamily: 'Roboto-Light',
    marginTop: 10,
    marginBottom: 10,
    padding: 0,
    marginLeft:0,
  //  backgroundColor: '#36D6BD',


  },

  TextStyledate:{
    color:'#fff',
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '100',
    fontFamily: 'Roboto-Light',
    paddingTop: 10
  },
});
