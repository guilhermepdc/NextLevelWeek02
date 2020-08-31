import React, { ReactNode } from 'react';
import { View, Image, Text} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();

  function HandleGoBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.contianer}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={HandleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImage} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  )
}

export default PageHeader;