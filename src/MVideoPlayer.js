import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
//import Orientation from 'react-native-orientation';

   var MVideoPlayer = ({ source }) => {
    const videoPlayerRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
  
    // useEffect(() => {
    //   // Set initial orientation
    //   Orientation.lockToPortrait();
  
    //   // Subscribe to orientation change events
    //   const orientationChangeSubscription = Orientation.addOrientationListener(
    //     (orientation) => {
    //       setIsFullScreen(orientation === 'LANDSCAPE');
    //     }
    //   );
  
    //   // Cleanup subscription on component unmount
    //   return () => {
    //     Orientation.removeOrientationListener(orientationChangeSubscription);
    //   };
    // }, []);
  
    const toggleFullScreen = () => {
      if (isFullScreen) {
        Orientation.lockToPortrait();
      } else {
        Orientation.lockToLandscape();
      }
    };

    
    
  
    return (
      <View style={styles.container}>

        <Video
          ref={videoPlayerRef}
          source={source}
          style={isFullScreen ? styles.fullScreen : styles.video}
          resizeMode="contain"
          controls
        />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', position: 'absolute',
      backgroundColor:'red',
      top: 10,
      right: 10,}}>
        <TouchableOpacity style={styles.fullScreenToggleLeft}
         onPress={toggleFullScreen}>
          {/* Add your full-screen icon here */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.fullScreenToggleright} onPress={toggleFullScreen}>
          {/* Add your full-screen icon here */}
        </TouchableOpacity>
        </View>
      </View>
    );
  };
export default MVideoPlayer=MVideoPlayer
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    video: {
      width: '100%',
      aspectRatio: 16 / 9,
    },
    fullScreen: {
      ...StyleSheet.absoluteFillObject,
    },
    fullScreenToggleLeft: {
      position: 'absolute',
      backgroundColor:'red',
      top: 10,
      left: 10,
      // Add styles for your full-screen toggle button
    },
    fullScreenToggleright: {
      position: 'absolute',
      backgroundColor:'red',
      top: 10,
      right: 10,
      // Add styles for your full-screen toggle button
    },
  });