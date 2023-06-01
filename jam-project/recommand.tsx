import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "./styles";
import TopMenu from "./topMenu";
import BottomMenu from "./bottomMenu";

type walletProps = {
  navigation: any;
}

const RecommandScreen: React.FC<walletProps> = ({ navigation }) => {
  return (
    <View style={Styles.recommandBox}>
      <TopMenu navigation={navigation} />
      <View>

        {/* 테마 키워드 */}
        <View style={Styles.recommandTheme}>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>반도체</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>의료·바이오</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>인공지능</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>음식</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>자동차</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>주류</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>국내 30위</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>ENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>항공·여행</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>담배</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>게임</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.recommandKeyword}>
            <Text style={{ textAlign: 'center' }}>뷰티</Text>
          </TouchableOpacity>
        </View>

        {/* 기업 */}
        <View>
          
        </View>
      </View>
      <BottomMenu navigation={navigation} />
    </View>
  )
}

export default RecommandScreen