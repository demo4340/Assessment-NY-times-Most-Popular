import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import axios from 'axios';
import { Icon } from '@rneui/themed';
import { WebView } from 'react-native-webview';
import Hyperlink from 'react-native-hyperlink';
let info = [];
export default class ArticlesTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  getInfo = () => {
    axios
      .get(
        'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=P25amGEk4gQRjP4peIFvDj6Fuwir2rzE'
      )
      .then((response) => {
        for (var i = 0; i < response.data.results.length; i++) {
          this.setState({
            articles: response.data.results[i],
          });
          info.push(this.state.articles);
        }
      });
  };

  componentDidMount() {
    this.getInfo();
  }

  render() {
    return (
      <View style={styles.container}>
        {info.map((item) => {
          return (
            <TouchableOpacity
              style={styles.titleButton}
              onPress={() => {
                Linking.openURL(item.url);
              }}>
               <View style={styles.iconContainer}>
                <Image
                  source={require('../icon.png')}
                  style={styles.iconImage}
                />
                </View>
                
              <Text style={styles.titleText}>{item.title}</Text>

              <Text style={styles.bylineText}>{item.byline}</Text>
              <Text style={styles.updatedText}>{item.updated}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'yellow',
  },

  titleButton: {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 15,
  
  },

  titleText: {

    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    margin: 5,
    marginLeft : 50
  },

  bylineText: {
    textAlign: 'left',
    marginLeft: 50,
    color: 'grey',
    
  },

  updatedText: {
    textAlign: 'right',
    //marginTop : 20,
    marginBottom : 10
  },

  iconImage: {
    margin: 5,
    width: 35,
    height: 35,
  },

  iconContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
