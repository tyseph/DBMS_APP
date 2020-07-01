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
      <View style={styles.maincontainer}>
        <View>
        <Text>Set Holidays</Text>
          <View style={styles.setholidays}>
            <TouchableHighlight style={styles.SubmitButtonStyle} activeOpacity = { 0.5 } onPress={this.showPicker} >
        <LinearGradient colors={['#36D6BD','#007E7B']} start={{ x:0, y:1}} style={ styles.Linear_G }>	
          <Text style={styles.TextStyle}>Select Date</Text>
        </LinearGradient>
        </TouchableHighlight>
            <Text>{this.state.chosenDate}</Text>
            <DateTimePickerModal
              isVisible={this.state.isVisible}
              mode="date"
              onConfirm={this.handlePicker}
              onCancel={this.hidePicker}
            />
          </View>
        </View>
        <View style={styles.logoutcontainer}>
        <TouchableHighlight style={styles.LogoutButtonStyle} activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('Login')}} >
        <LinearGradient colors={['#A23434','#7E1600']} start={{ x:0, y:2}} style={ styles.Linear_G }>	
          <Text style={styles.LogoutTextStyle}>LOGOUT</Text>
        </LinearGradient>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  maincontainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#102138'
  },

  setholidays:{
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  logoutcontainer:{
    flex: 1,

  },  

  LogoutButtonStyle: {

    position: 'relative',
    flex: 0,
    marginTop: 200,
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
  Linear_G:
  {
    borderRadius: 10,
  },
  SubmitButtonStyle: {
        
    marginTop: 0,
    padding: 0,
    backgroundColor: '#36D6BD',
    borderRadius: 10,
    borderWidth: 0,
    width: 130
  },
  
  TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
    fontWeight: '100',
    fontFamily: 'Roboto-Light'
    
  },
});