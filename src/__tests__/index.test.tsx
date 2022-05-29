jest.useFakeTimers();

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import RollingBar from '../index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('test', () => {
  it('renders correctly', () => {
    renderer.create(
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
    );
  });
});

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#444',
  },
});
