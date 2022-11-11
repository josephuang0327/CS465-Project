import React from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image, ScrollView } from 'react-native';

//import Card
import { Card } from 'react-native-paper';
// import EventDetailsDrawer from '../ui/EventDetailsDrawer';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={ScrollView}>
        <View style={styles.container}>
          <div onClick={() => alert("Hello from here")}>
            <Card onClick={onClick} style={{ cursor: "pointer" }}>
              <Text style={styles.paragraph}>
                React Native Card View for Android and IOS using
                "react-native-paper"
              </Text>
            </Card>
          </div>
          <Card>
            <Text style={styles.paragraph}>
              2nd React Native Card View for Android and IOS using
              "react-native-paper"
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});