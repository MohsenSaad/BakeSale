/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ajax from '../components/ajax';
import DealList from '../components/DealList.js';
import DealDetail from '../components/DealDetail.js';

class App extends React.Component {
  state = {
    deals: [],
    currentDealId: null,
  };

  //fetch the api's and update state
  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState({deals});
  }

  setCurrentDeal = dealId => {
    this.setState({currentDealId: dealId});
  };
  currentDeal = () => {
    return this.state.deals.find(deal => deal.key === this.state.currentDealId);
  };

  render() {
    if (this.state.currentDealId) {
      return <DealDetail deal={this.currentDeal()} />;
    }
    if (this.state.deals.length > 0) {
      return (
        <DealList
          deals={this.state.deals}
          onItemPress={this.setCurrentDeal}></DealList>
      );
    }

    return (
      <View style={styles.sectionTitle}>
        <Text style={styles.Header}>Bakesale</Text>
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
