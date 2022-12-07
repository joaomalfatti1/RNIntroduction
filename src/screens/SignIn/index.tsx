import React from 'react';
import { 
  View, 
  Text,
  Image,
  StatusBar
} from 'react-native';  

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';

import { styles } from './styles';

export  function SignIn(){
  return(
    /*Aqui ficaria o statusBar*/
    <View style={styles.container}>
      <StatusBar 
        barStyle='light-content'
        translucent
        backgroundColor={"transparent"}
      />

      {/* Aqui fica as configurações da Image de fundo */}
      <Image 
        source={IllustrationImg}
        style={styles.content}
        resizeMode='stretch'
      />

      {/* Os títulos e os subtitle */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        {/* Botton do icone, está nos componentes*/}  
        <ButtonIcon 
          title= "Entrar com Discord"
          activeOpacity={0.4}
        />


      </View>
    </View>
  )
}