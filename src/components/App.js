/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ajax from '../components/ajax';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    console.log(deals);
  }
  render() {
    return (
      <View style={styles.sectionTitle}>
        <Text style={styles.Header}>BakeSale App </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
  },
  Header: {
    fontSize: 30,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
