import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import RollingBar from '../index';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe('test', () => {
    it('renders correctly', () => {
        renderer.create(React.createElement(RollingBar, { interval: 1000, customStyle: { height: 45 } },
            React.createElement(View, { style: { flexDirection: 'row' } },
                React.createElement(Image, { style: { width: 29, height: 29, marginRight: 10 }, source: {
                        uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
                    } }),
                React.createElement(Image, { style: { width: 29, height: 29, marginRight: 10 }, source: {
                        uri: 'https://img.icons8.com/flat_round/64/000000/wide-long-right-arrow.png',
                    } }),
                React.createElement(Text, { style: styles.sectionTitle }, "Network Image")),
            React.createElement(View, { style: { alignItems: 'center' } },
                React.createElement(Text, { style: { fontSize: 17 } }, "SOME NOTICE HERE"))));
    });
});
const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#444',
    },
});
