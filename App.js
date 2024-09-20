import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HousingInformation from './screens/HousingInformation';
import FinancialInformation from './screens/FinancialInformation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HousingInformation">
        <Stack.Screen 
          name="HousingInformation" 
          component={HousingInformation} 
          options={{ title: 'Housing Information' }} 
        />
        <Stack.Screen 
          name="FinancialInformation" 
          component={FinancialInformation} 
          options={{ title: 'Financial Information' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
