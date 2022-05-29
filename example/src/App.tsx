import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import RollingBar from 'react-native-rolling-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <RollingBar interval={1000} customStyle={{ height: 45 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 29, height: 29, marginRight: 10 }}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
          <Image
            style={{ width: 29, height: 29, marginRight: 10 }}
            source={{
              uri: 'https://img.icons8.com/flat_round/64/000000/wide-long-right-arrow.png',
            }}
          />
          <Text style={styles.sectionTitle}>Network Image</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 17 }}>SOME NOTICE HERE</Text>
        </View>
      </RollingBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#444',
  },
});
