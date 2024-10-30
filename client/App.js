import { View, Text } from 'react-native';
import { LittleLemonHeader } from './components/LittleLemonHeader.js';
import { LittleLemonFooter } from './components/LittleLemonFooter.js';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
        <Text style={{
          color: 'white',
          textAlign: 'center',
          margin: 10,
          fontSize: 38,
        }}>
          Welcome to Little Lemon
        </Text>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          margin: 20,
          fontSize: 28,
        }}>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. 
          We would love to hear more about your experience with us!
        </Text>
      </View>

      <View style={{ backgroundColor: '#495E57' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
