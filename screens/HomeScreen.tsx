import { StyleSheet, Image, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';

import { GOOGLE_MAPS_APIKEY } from '@env';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'
          }}
          style={{
            width: 100, height: 100, resizeMode: 'contain'
          }}
        />

        <GooglePlacesAutocomplete
          placeholder='Para onde?'
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18
            }
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details?.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          // returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'pt-BR'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

        <NavOptions />
        <NavFavourites />
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