import React, { Component } from 'react';

import { isValidVideo, showEditor } from 'react-native-video-trim';
//import MVideoPlayer from './src/MVideoPlayer'
import VideoPlayer from 'react-native-video-controls';
import {
  Alert,
  Linking,
  Keyboard,
  StatusBar,
  StyleSheet,
  View,
  Text,
  NativeEventEmitter,
  NativeModules,
  SafeAreaView,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import {
  config,
  mediaprovider,
  
  Cameragallery,
  
  consolepro,
  
 
} from './src/Provider/utilslib/Utils';;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
my_trim_video:""

    };
  }

  componentDidMount() {

  
    const eventEmitter = new NativeEventEmitter(NativeModules.VideoTrim);
    this.subscription = eventEmitter.addListener('VideoTrim', (event) => {
      switch (event.name) {
        case 'onShow': {
          console.log('onShowListener', event);
          break;
        }
        case 'onHide': {
          console.log('onHide', event);
          break;
        }
        case 'onStartTrimming': {
          console.log('onStartTrimming', event);
          break;
        }
        case 'onFinishTrimming': {
          console.log('onFinishTrimming', event);
          this.setState({my_trim_video:event.outputPath})
          break;
        }
        case 'onCancelTrimming': {
          console.log('onCancelTrimming', event);
          break;
        }
        case 'onError': {
          console.log('onError', event);
          break;
        }
      }
    });
  }

  componentWillUnmount() {
    this.subscription.remove();
  }


 
 //-----------------------------function to access images from camera
 Camerapopen = async () => {
  var mediamodalForCover = this.state.mediamodalForCover;
  mediaprovider
    .launchCamera(true, mediamodalForCover)
    .then(res => {
      console.log('camerares', res);
      {
        this.state.mediamodalForCover == 1
          ? this.setState({
              mediamodal: false,
              cover_photo: res.path,
              cover_photo_type: 1,
             
              mediamodalForCover: 0,
            })
          : this.setState({
              mediamodal: false,
              image: res.path,
              image_type: 1,
              mediamodalForCover: 0,
            });
      }
    })
    .catch(error => {
      this.setState({mediamodal: false});
      consolepro.consolelog(' camera error ', error);
      if (config.device_type == 'ios') {
        if (error == 'Error: User did not grant camera permission.') {
          consolepro.consolelog('i am here ');
          setTimeout(() => {
            this.open_settings();
          }, 1000);
        }
      } else {
        if (error == 'Error: User did not grant camera permission.') {
          this.open_settings();
        }
      }
    });
};

//----------------------------function for open setting of this app in device for permission----------------

open_settings = () => {
  Alert.alert(
    'Alert',
    'This app need permissions,Please allow it',
    [
      {
        text: 'Close',
        onPress: () => {
          consolepro.consolelog('nothing user cancle it ');
        },
        style: 'cancel',
      },
      {
        text: 'Open Settings',
        onPress: () => {
          Linking.openSettings();
        },
      },
    ],
    {cancelable: false},
  );
};

//-----------------------------function to access images from gallery

Galleryopen = () => {
  var mediamodalForCover = this.state.mediamodalForCover;
  mediaprovider
    .launchGellery(true, mediamodalForCover)
    .then(res => {
      console.log('camerares', res);
      showEditor(res.path, {
        maxDuration: 20,
      });
    
         this.setState({
              mediamodal: false,
              cover_photo: res.path,
              mediamodalForCover: 0,
              cover_photo_type: 1,
           
            })
        
    })
    .catch(error => {
      this.setState({mediamodal: false});
      consolepro.consolelog('gallery error', error);
      if (config.device_type == 'ios') {
        if (
          error ==
          'Error: Cannot access images. Please allow access if you want to be able to select images.'
        ) {
          consolepro.consolelog('i am here ');
          setTimeout(() => {
            this.open_settings();
          }, 1000);
        }
      } else {
        if (error == 'Error: Required permission missing') {
          this.open_settings();
        }
      }
    });
};

  render() {
    consolepro.consolelog('my_trim_video',"file://"+this.state.my_trim_video)
    return (
      <View style={styles.container}>
       {

       this.state.my_trim_video==""?
          <Cameragallery
            mediamodal={this.state.mediamodal}
            Camerapopen={() => {
              this.Camerapopen();
            }}
            Galleryopen={() => {
              this.Galleryopen();
            }}
            Canclemedia={() => {
              this.setState({mediamodal: false});
            }}
          />
          :
          <SafeAreaView style={{flex:1}}>
            <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{
              this.setState({mediamodal:true,my_trim_video:""})
            }}
            >
              <Text style={{color:'red'}}>
Back
              </Text>
            </TouchableOpacity>
          <VideoPlayer
        
                  source={{ uri:"file://"+this.state.my_trim_video}} />

</SafeAreaView>
  }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;




// import { SafeAreaView } from 'react-native';
// //import VideoPlayer from './src/VideoPlayer'; // Adjust the path accordingly
// // At the top where our imports are...
// import VideoPlayer from 'react-native-video-controls';
// import React, { Component } from 'react';

// import Orientation from 'react-native-orientation-locker';
// // in the component's render() function

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.videoSource = { uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' };
//   }

//   componentDidMount() {
//     console.log('Component mounted');
//     Orientation.unlockAllOrientations();

//     // Add orientation listener
//     Orientation.addOrientationListener(orientation => {
//       console.log('Orientation changed:', orientation);
//     });
//   }

//   componentWillUnmount() {
   
//   }

//   componentDidMount() {
//     // Lock the screen orientation to portrait mode
//     console.log('Component will unmount');
//     Orientation.unlockAllOrientations();
//     Orientation.removeAllListeners()
//   }


//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <VideoPlayer
        
//         source={this.videoSource} />
//       </SafeAreaView>
//     );
//   }
// }

// export default App;