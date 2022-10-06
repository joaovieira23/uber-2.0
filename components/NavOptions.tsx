import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";

const data = [
    {
      id: "1",
      title: "Pegue uma carona",
      image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
      screen: "MapScreen",
    },
    {
      id: "2",
      title: "Pedir comida",
      image: "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
      screen: "EatsScreen",
    }
  ]

const NavOptions = () => {
  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                        <Image 
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{ uri: item.image }}
                        />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright"
                        color="white"
                        type="antdesign"
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions;