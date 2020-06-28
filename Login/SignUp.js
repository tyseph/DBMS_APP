import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    StatusBar,
    Button
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';

  
  export default class SignUp extends Component{
    render(){
        return(
            <View>
                <Text>SignUp</Text>
                <TouchableHighlight activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('SignUp')}} >
        <LinearGradient colors={['#36D6BD','#007E7B']} start={{ x:0, y:1}}>	
          <Text > LOGIN </Text>
        </LinearGradient>
        </TouchableHighlight>
            </View>
        )
    }
  }