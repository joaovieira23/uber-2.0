import { StyleSheet, Image, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
          source={{
            uri: 'https://links.papareact.com/gzs'
          }}
          style={{
            width: 100, height: 100, resizeMode: 'contain'
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: 'blue'
  }
})