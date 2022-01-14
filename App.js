import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FirstPage from './FirstPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTab from './MyTab';
import Notifications from './Notifications';
import New from './new';
import HiPage from './HiPage';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >

      <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown: false, }} />
      <Stack.Screen name="Notification" component={Notifications} options={{headerShown: false, }} />
      <Stack.Screen name='New' component={New}/>
      <Stack.Screen name='HiPage' component={HiPage}/>


      <Stack.Screen name='MyTab' component={MyTab} options={{headerShown: false, }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;