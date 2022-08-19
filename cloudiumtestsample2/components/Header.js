import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  ScrollView
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';


import ArticlesTest from './articlesTest';

export default class HeaderTop extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <Header
          height = {100}
          backgroundColor="#47E4C2"
          leftComponent={{
            icon: 'menu',
            color: '#fff',
          }}
          centerComponent={{
            text: 'NY Times Most Popular',
            style: { color: 'white', fontWeight: 'bold', fontSize : 20 },
          }}

          rightComponent = {
            <View style = {styles.rightIconsContainer}>
              <Icon
                name = "search"
                color = 'white'       
              />
              <Icon
                name = "more-vert"
                color = 'white'
              />
            </View>
          }
          
        />
        <ScrollView>
        <ArticlesTest/>
        </ScrollView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({

  rightIconsContainer : {
    //backgroundColor : 'red',
    flex : 1,
    flexDirection : 'row',
    padding : 5
    
  }

});
