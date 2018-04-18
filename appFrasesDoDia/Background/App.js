/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Alert

} from 'react-native';

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 12);
  var frases = Array();
  frases[0] ='Sou feliz por ser como sou, por ter o que tenho, mas amanhã quero ser ainda mais e para isso luto diariamente.';
  frases[1] ='Sou feliz porque sou livre; livre da opinião alheia e de toda pressão para ser perfeita o tempo todo!';
  frases[2] ='Sou feliz e estou em paz comigo e com a vida, e não permito que outros destruam esse meu bem-estar.';
  frases[3] ='Minha vida não é perfeita, mas sou feliz e encaro o futuro com esperança!';
  frases[4] ='Sou feliz do jeito que sou, e já não me deixo controlar pela opinião que outros têm de mim.';
  frases[5] = 'O importante não é vencer todos os dias, mas lutar sempre.';
  frases[6] = 'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!';
  frases[7] = 'É melhor conquistar a si mesmo do que vencer mil batalhas.';
  frases[8] = 'Enquanto houver vontade de lutar haverá esperança de vencer.';
  frases[9] = 'Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto.';
  frases[10] = 'O medo de perder tira a vontade de ganhar.';
  frases[11] = 'Aquele que não tem confiança nos outros, não lhes pode ganhar a confiança.';
  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert('Frase do dia',
    fraseEscolhida);
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    //fazendo a junçao do estilo com o Styles sem precisar declarar os dois no componente
    const { principal, botao,textoBotao, imagem } = Styles;
    return (
    <View style={principal}>
      <Image style={imagem} source={require('./img/logo.png')}/>
      <TouchableOpacity
      onPress={gerarNovaFrase}
      style={botao}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>

    </View>
    );
  }
}

//Formataçõoes

const Styles = {
  principal: {
    flex:1,
    backgroundColor: '#FFF0A5',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  botao: {
    backgroundColor: '#538530',
    padding: 10,
    paddingVertical: 12,
    width: 150,
    marginTop: 30,
    borderColor: '#538530',
    borderWidth: 1,
    borderRadius: 4
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  imagem: {

  }
};
