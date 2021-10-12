import React from "react";
import { Stylesheet, SafeAreaViewBase} from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
    return (
       <SafeAreaViewBase>
      <MapView style={styles.map}>
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
    }}
        
      </MapView>
      </SafeAreaViewBase>


    );
  }
//background color #101820ff spot color #fee715ff


const styles = StyleSheet.create({
        map: {
            flex: 1,
            justifyContent: 'center',

        },

  });

export default Map;
