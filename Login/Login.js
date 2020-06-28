 /*hello sparsh */ 
  import React,{Component} from 'react'
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





export default class Login extends Component{
	render(){
		
		return(
			<View style = { styles.MainContainer }>
				<View style = { styles.Login_box }>
					<View style = { styles.FormBox }>
					<View style={ styles.image }>
						<Image source={ require('../src/images/Final_logo.png') } style={ styles.Final_logo }/>
				    </View>
					<Text style={styles.TextStyle2}>Faculty Login</Text>
						<TextInput textContentType='emailAddress' placeholderTextColor="#fff" placeholder="E-mail"  style = { styles.textInput_Style }/>
						<TextInput textContentType='password' secureTextEntry={true} placeholderTextColor="#fff" placeholder="Password" style = { styles.textInput_Style }/>
					<TouchableHighlight style={styles.SubmitButtonStyle} activeOpacity = { 0.5 } onPress={()=>{this.props.navigation.navigate('Teacher')}} >
					<LinearGradient colors={['#36D6BD','#007E7B']} start={{ x:0, y:1}} style={ styles.Linear_G }>	
						<Text style={styles.TextStyle}> LOGIN </Text>
					</LinearGradient>
					</TouchableHighlight>
					</View>
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
				justifyContent: 'space-around',
				alignItems: 'center',
				backgroundColor: '#102138'
			},
			
			Login_box:
			{
				position: 'relative',
				marginTop: -110,
				flex: 1,
				justifyContent: 'space-around',
				alignItems: 'center'
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