import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import db from "./config";

function WeeklyC() {
  return (
   <ImageBackground source = {require("./Assets/Fondo2.jpg")} style ={styles.image}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Weekly Calendar</Text>
      </View>
   </ImageBackground>
  );
}

function MonthlyC() {
  return (
    <ImageBackground source = {require("./Assets/Fondo1.jpg")} style ={styles.image}>
      <SafeAreaView style={styles.container}>
        <Calendar />
      </SafeAreaView>
    </ImageBackground>
  );
}

const defaultList = [""];

function ToDo() {
  const [text,onChangeText] = React.useState(null);

  return (
   <ImageBackground source = {require("./Assets/Fondo3.jpg")} style ={styles.image}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pendings of the day</Text>
      </View>

      <View>
        <TextInput
          style = {styles.todoinput}
          placeholder = "  Name:   ">
          onChangeText = {Nombre =>{
            this.setState({Nombre : Nombre})
          }}
          value = {text}
        </TextInput>
      </View>
   </ImageBackground>
  );
}

function Dates() {
  return (
   <ImageBackground source = {require("./Assets/Fondo4.jpg")} style ={styles.image}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>¿Do we have a date today?</Text>
      </View>
   </ImageBackground>
  );
}

function Birthdays() {
  function handleOnPress(){
    setOpen(!open)
  }
  return (

   <ImageBackground source = {require("./Assets/Fondo5.jpg")} style ={styles.image}>
      <View>
        <TextInput
        style = {styles.bdaytext}
        placeholder = "  Name:   ">
          
        </TextInput>
        <TouchableOpacity style ={styles.bdayselectdate} onPress = {handleOnPress}>
          <Text> Selecciona la fecha del cumpleaños</Text>
        </TouchableOpacity>
      </View>
   
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Birthday</Text>
      </View>
   </ImageBackground>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Weekly Calendar"
      screenOptions={{
        tabBarActiveTintColor: '#8151FF',
        tabBarInactiveTintColor: '#817C91',
      }}
    >
      <Tab.Screen
        name="Weekly Calendar"
        component={WeeklyC}
        options={{
          tabBarLabel: 'Weekly',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alpha-w-box" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="To do"
        component={ToDo}
        options={{
          tabBarLabel: 'To do',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="¿Do we have a date today?"
        component={Dates}
        options={{
          tabBarLabel: 'Dates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Birthdays"
        component={Birthdays}
        options={{
          tabBarLabel: 'Birthdays',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cake-variant" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Monthly Calendar"
        component={MonthlyC}
        options={{
          tabBarLabel: 'Monthly',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-month" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  image: {
    flex: 1,
    resizeMode: "cover"
  },

  bdaytext: {
    margin: 10,
    borderWidth: 1,
    height: 40,
    padding: 10,
    backgroundColor: '#FCA8C3',
  },

  bdayselectdate: {
    margin: 10,
    borderWidth: 1,
    height: 40,
    padding: 10,
    backgroundColor: '#EAC9E0',
    borderRadius: 10,
    justifyContent: "Center",
  },

  todoinput: {
    margin: 10,
    borderWidth: 1,
    height: 40,
    padding: 10,
    backgroundColor: '#A8C2FC',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

