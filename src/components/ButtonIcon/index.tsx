import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = TouchableOpacityProps &{
  title: string;
}

export function ButtonIcon({title, ...rest}: Props){
  return(
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
// TouchableOpacity, fica parte onde do toque do botão
// TouchableOpacityProps, trás as propriedades em geral
// ...rest , você declara para puxar todas as propriedades invés de ficar colocar um por um.
//Foi criado por causa type Props, pq sem ele, não vem as propriedades.
