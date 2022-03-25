import React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
class DealItem extends React.Component {
  static PropTypes = {
    deal: PropTypes.object.isRequired,
    onPresss: PropTypes.func.isRequired,
  };
  handlePress = () => {
    this.props.onPresss(this.props.deal.key);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.dealItem}>
        <Image
          style={styles.image}
          source={{uri: this.props.deal.media[0]}}></Image>

        <View style={styles.info}>
          <Text style={styles.title}>{this.props.deal.title}</Text>
          <View style={styles.footer}>
            <Text>{this.props.deal.cause.name}</Text>
            <Text>{this.props.deal.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  dealItem: {
    marginHorizontal: 12,
    marginTop: 12,
  },

  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DealItem;
