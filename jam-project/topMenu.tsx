import React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Styles, StylesText } from './styles';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface TopMenuProps {
  navigation: any;
}

const TopMenu: React.FC<TopMenuProps> = ({ navigation }) => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    <View style={Styles.topRoot}>
      <View style={Styles.logoWrap}>
        <Text style={Styles.logoText}>JamStock</Text>
        <Image
          style={Styles.logoImage}
          source={require('./resource/JamStock_Pig.png')}
        />
      </View>
      <View style={Styles.topWrap}>
        {/* 장바구니로 이동 */}
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Image
            style={Styles.logoImage}
            source={require('./resource/shoppingcart.png')}
          />
        </TouchableOpacity>
        {/* 햄버거 메뉴 이동 */}
        <TouchableOpacity
          style={Styles.hambergerWrap}
          onPress={() => navigation.navigate('hamberger')}
        >
          <View style={Styles.hambergerBar}></View>
          <View style={Styles.hambergerBar}></View>
          <View style={Styles.hambergerBar}></View>
        </TouchableOpacity>
      </View>
    </View>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default TopMenu;
