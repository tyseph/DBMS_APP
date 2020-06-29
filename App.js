/**
*Mei hu ek udta robot doraemon
mano ya na mano

 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React,{Component} from 'react'; //
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './Login/Login.js';
import SignUp from './Login/SignUp.js'
import FindFreeSlots from './TeacherTabs/FindFreeSlots.js';
import TeacherTimeTable from './TeacherTabs/TeacherTimeTable.js';
import LoginStudent from './Login/LoginStudent.js';
import AddCourses from './StudentTabs/AddCourses.js';
import MarkAttendance from './StudentTabs/MarkAttendance.js';
import CheckAttendance from './StudentTabs/CheckAttendance.js';
import CourseList from './StudentTabs/CourseList.js';


const Stack = createStackNavigator();
const Tabs = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
export default class App extends Component{
  createHomeStack = () =>{
    return(
    <Stack.Navigator>
      <Stack.Screen name="Auth" children={this.createDrawer} options = {{title:"Auth",headerShown:false}}/>
      <Stack.Screen name="Teacher" children={this.createTabs} options = {{headerShown:false}}/>
      <Stack.Screen name="Student" children={this.createStudentTabs} options={{headerShown:false}}/>
    </Stack.Navigator>
    );
  }

  createTabs = ()=>{
    return(
    <Tabs.Navigator>
      <Tabs.Screen name="FindFreeSlots" component={FindFreeSlots}/>
      <Tabs.Screen name="TeachertTimeTable" component={TeacherTimeTable}/>
    </Tabs.Navigator>
    );
  }
  createStudentTabs = () => {
    return(
      <Tabs.Navigator>
        <Tabs.Screen name="AddCourses" component={AddCourses}/>
        <Tabs.Screen name="MarkAttendance" component={MarkAttendance}/>
        <Tabs.Screen name="CheckAttendance" component={CheckAttendance}/>
        <Tabs.Screen name="CourseList" component ={CourseList}/>
      </Tabs.Navigator>
    );
  }
  createDrawer = () => {
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="SignUp" component={SignUp} options={{ title:"SignUp" }}/>
        <Drawer.Screen name="Login" component={Login} options={{title:"Faculty Login"}}/>
        <Drawer.Screen name="LoginStudent" component={LoginStudent} options={{title:"Student Login"}}/>
      </Drawer.Navigator>
    );
  }
render(){
  return(
    <NavigationContainer>
      {this.createHomeStack()}
    </NavigationContainer>
  );
}
}





/*const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
*/


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
