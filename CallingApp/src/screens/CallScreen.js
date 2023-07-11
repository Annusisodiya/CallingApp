import React from 'react';
import { View, Text, Button } from 'react-native';
import CallKeep from 'react-native-callkeep';

const CallScreen = () => {
  const handleMakeCall = () => {
    // Implement logic to make a call
  };

  const handleEndCall = () => {
    // Implement logic to end an ongoing call
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calling App</Text>
      <Button title="Make Call" onPress={handleMakeCall} />
      <Button title="End Call" onPress={handleEndCall} />
    </View>
  );
};

export default CallScreen;
