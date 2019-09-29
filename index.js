// @flow

import React, {useState, useEffect, useCallback} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import useInterval from './util/useInterval';

type Props = {
  children: React$Node,
  interval: number,
  customStyle?: Object,
  animationDuration?: number,
  delayBetween?: number,
};

const RollingBar: (props: Props) => React$Node = props => {
  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(10));
  const [visibleIndex, setVisibleIndex] = useState(0);
  const {
    children,
    interval = 3000,
    customStyle,
    animationDuration = 300,
    delayBetween = 100,
  } = props;
  const childrenCount = React.Children.count(children);

  const animate = useCallback(() => {
    const defaultConfig = {
      duration: animationDuration,
      useNativeDriver: true,
      isInteraction: false,
    };

    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 20,
          ...defaultConfig,
          duration: 0,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          ...defaultConfig,
          duration: 0,
        }),
      ]),

      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          ...defaultConfig,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          ...defaultConfig,
        }),
      ]),

      Animated.delay(interval),

      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -10,
          ...defaultConfig,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          ...defaultConfig,
        }),
      ]),
    ]).start();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    animate();
  }, [animate]);

  useInterval(() => {
    setVisibleIndex((visibleIndex + 1) % childrenCount);
    animate();
  }, interval + animationDuration * 2 + delayBetween);

  return (
    <View style={[styles.container, customStyle]}>
      <Animated.View
        style={{
          opacity,
          transform: [{translateY}, {perspective: 1000}],
        }}>
        {React.Children.map(children, (child, idx) => {
          return (
            <View key={`${idx}`} style={visibleIndex !== idx && styles.hideRow}>
              {child}
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default RollingBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#eaeaea',
    borderColor: '#bbb',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  hideRow: {display: 'none'},
});
