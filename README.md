# react-native-rolling-bar

Rolling bar UI for React Native.

Based on [react-native framework](https://github.com/facebook/react-native/) by Facebook.

## Demo

<img src='example/rollingbarworking.gif' width='300' alt='demo image' />

## Install

```sh
npm install react-native-rolling-bar
```

## Props

Name | type | default value | description
--- | --- | --- | ---
customStyle | Object | - | custom styles for container
interval | number | 3000 | content change interval time in milliseconds
animationDuration | number | 300 | fade transition duration in milliseconds
delayBetween | number | 100 | delay in milliseconds between fade-out and fade-in of next content (too short delay would cause incorrect transition )

## Usage

```jsx
  <RollingBar interval={3000}>
    <ChildComponentOne />
    <ChildComponentTwo />
    <ChildComponentTree />
    // ...
  </RollingBar>
```

## License

MIT