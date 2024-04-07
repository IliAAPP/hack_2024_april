import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

const PushNotifications = () => {
  const [notification, setNotification] = useState(null);

  const sendNotification = () => {
    PushNotification.localNotification({
      title: 'My Notification',
      body: 'This is a notification from my app.',
    });
  };

  useEffect(() => {
    if (PushNotification) {
      PushNotification.configure({
        onNotification: (notification) => {
          setNotification(notification);
        },
        
        onRegister: (token) => {
          console.log('TOKEN:', token);
        },
        onAction: (notification) => {
          console.log('ACTION:', notification.action);
          console.log('NOTIFICATION:', notification);
        },
        onRegistrationError: (err) => {
          console.error(err.message, err);
        },
        popInitialNotification: true,
        requestPermissions: true,
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Notification: {JSON.stringify(notification)}</Text>
      <Button title="Send Notification" onPress={sendNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PushNotifications;
