/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';

const gerarAleatorio = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 100);
  alert(numeroAleatorio);
}
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text> Gerador de números randômicos</Text>
        <Button title="Gerar um número randômico" onPress={gerarAleatorio}
        />
        </View>
    );
  }
}
