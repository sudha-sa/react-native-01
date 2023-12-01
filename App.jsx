import React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import Siya from './Components/Pressable';
import Status from './Components/Status';
import Android01 from './Components/Android01';
import Propssome from './Components/Propssome';

function App() {
  return (
    <ScrollView>
      <View>
        <Text>HI AM SIYA</Text>
        <Text>Yupppp</Text>
        <Button title="press me" />
        <Siya />
        <Status />
        <Android01 />
        <Propssome />
      </View>
    </ScrollView>
  );
}

export default App;
