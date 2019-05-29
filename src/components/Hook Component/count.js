import React, { useState } from 'react';
import {View,TouchableOpacity,Text} from 'react-native'

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View style={{justifyContent:'center'}}>
      <Text>You clicked {count} times</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Example