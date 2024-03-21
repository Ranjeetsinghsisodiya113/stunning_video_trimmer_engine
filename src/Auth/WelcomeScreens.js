import React, { Component } from 'react';
import {
  Text,
  BackHandler,
  SafeAreaView,
  StatusBar,
  Alert,
  View,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import {
  config,
  msgProvider,
  localStorage,
  apifuntion,
  msgText,
  msgTitle,
  consolepro,
  Lang_chg,
  Font,
  Colors,
  mobileH,
  mobileW,
  localimag,
  firebaseprovider,
} from '../Provider/utilslib/Utils';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

class WelcomeScreens extends Component {
  _didFocusSubscription;
  _willBlurSubscription;
  constructor(props) {
    super(props);

    this.state = {
      active_tab: 0,
      slides: [
        {
          key: 1,
          image: localimag.Reju_logo,
          image1: localimag.welcomeToElevate,
          title: Lang_chg.welcomeToElevate[config.language],
          title2: Lang_chg.a_personGuide[config.language],
          status: false,
        },
        {
          key: 2,
          image: localimag.Reju_logo,
          image1: localimag.gif_circle2,
          title: 'Elevate of the Day',
          title2:
            'Enjoy daily Elevate of the Day Inspiration quotes and content',
          status: false,
        },
        {
          key: 3,
          image: localimag.Reju_logo,
          image1: localimag.gif_circle3,
          title: 'Elevate Community',
          title2:
            'Connect with a community if link - minded users and their life testiments',
          status: false,
        },
        {
          key: 4,
          image: localimag.Reju_logo,
          image1: localimag.Orange_background_icon,
          title: 'Tap on how you feel now',
          title2: 'Tap once on the emotions you are currently feeling',
          status: false,
        },
        {
          key: 5,
          image: localimag.Reju_logo,
          image1: localimag.Orange_background_icon,
          title: 'Tap on where you can Improve',
          title2: 'Tap once on Personal traits you value most',
          status: false,
        },
        {
          key: 6,
          image: localimag.Reju_logo,
          image1: localimag.body_builder,
          title: 'Self-Care Tactics',
          title2:
            'stay engaged with fun self-care challenges that will promote healthy daily habits',
          status: false,
        },
      ],
      //your variable start here
    };
    this._didFocusSubscription = props.navigation.addListener(
      'focus',
      payload =>
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress),
    );
  }
  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      'blur',
      payload =>
        BackHandler.removeEventListener(
          'hardwareBackPress',
          this.handleBackPress,
        ),
    );
  }
  //-------do not change ------------//

  //    for backhandler
  handleBackPress = () => {
    Alert.alert(
      Lang_chg.go_back_txt[config.language],
      Lang_chg.do_you_want_exit_txt[config.language],
      [
        {
          text: Lang_chg.no_txt[config.language],
          onPress: () => consolepro.consolelog('Cancel Pressed'),
        },
        {
          text: Lang_chg.yes_txt[config.language],
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    ); // works best when the goBack is async
    return true;
  };
  // for password hide show
  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        {item.key == 1 && (
          <View
            style={{
              width: mobileW,
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: mobileW,
                alignSelf: 'center',
                marginTop: (mobileH * 4) / 100,
              }}>
              <Image
                style={{
                  width: (mobileW * 25) / 100,
                  height: (mobileW * 25) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
                source={item.image}
              />
              <Image
                style={{
                  width: (mobileW * 70) / 100,
                  height: (mobileW * 70) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'flex-end',
                }}
                source={item.image1}
              />
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: (mobileH * 5) / 100,
                  width: (mobileW * 90) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 5) / 100,
                    fontFamily: Font.FontBold,
                    color: Colors.black_color,
                    alignSelf: 'center',
                  }}>
                  {item.title}
                </Text>

                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    marginTop: (mobileH * 3) / 100,
                    letterSpacing: 2,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.placeholder_color,
                    alignSelf: 'center',
                  }}>
                  {'......................................................'}
                </Text>
                <View
                  style={{
                    width: (mobileW * 60) / 100,
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      alignItems: 'center',
                      textAlign: 'center',
                      fontSize: (mobileW * 3.8) / 100,
                      marginTop: (mobileH * 3) / 100,
                      fontFamily: Font.FontSemiBold,
                      color: Colors.black_color,
                    }}>
                    {item.title2}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {item.key == 2 && (
          <View
            style={{
              width: mobileW,
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: mobileW,
                alignSelf: 'center',
                marginTop: (mobileH * 4) / 100,
              }}>
              <Image
                style={{
                  width: (mobileW * 25) / 100,
                  height: (mobileW * 25) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
                source={item.image}
              />
              <Image
                style={{
                  width: (mobileW * 70) / 100,
                  height: (mobileW * 70) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'flex-end',
                }}
                source={item.image1}
              />
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: (mobileH * 5) / 100,
                  width: (mobileW * 90) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 5) / 100,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.black_color,
                    alignSelf: 'center',
                  }}>
                  {item.title}
                </Text>

                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    marginTop: (mobileH * 3) / 100,
                    letterSpacing: 2,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.placeholder_color,
                    alignSelf: 'center',
                  }}>
                  {'......................................................'}
                </Text>
                <View
                  style={{
                    width: (mobileW * 60) / 100,
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      alignItems: 'center',
                      textAlign: 'center',
                      fontSize: (mobileW * 3.3) / 100,
                      marginTop: (mobileH * 3) / 100,
                      fontFamily: Font.FontSemiBold,
                      color: Colors.black_color,
                    }}>
                    {item.title2}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {item.key == 3 && (
          <View
            style={{
              width: mobileW,
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: mobileW,
                alignSelf: 'center',
                marginTop: (mobileH * 4) / 100,
              }}>
              <Image
                style={{
                  width: (mobileW * 25) / 100,
                  height: (mobileW * 25) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
                source={item.image}
              />
              <Image
                style={{
                  width: (mobileW * 70) / 100,
                  height: (mobileW * 70) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'flex-end',
                }}
                source={item.image1}
              />
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: (mobileH * 5) / 100,
                  width: (mobileW * 90) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 5) / 100,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.black_color,
                    alignSelf: 'center',
                  }}>
                  {item.title}
                </Text>

                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    marginTop: (mobileH * 3) / 100,
                    letterSpacing: 2,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.placeholder_color,
                    alignSelf: 'center',
                  }}>
                  {'......................................................'}
                </Text>
                <View
                  style={{
                    width: (mobileW * 60) / 100,
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      alignItems: 'center',
                      textAlign: 'center',
                      fontSize: (mobileW * 3.3) / 100,
                      marginTop: (mobileH * 3) / 100,
                      fontFamily: Font.FontSemiBold,
                      color: Colors.black_color,
                    }}>
                    {item.title2}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {item.key == 4 && (
          <View
            style={{
              width: mobileW,
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: mobileW,
                alignSelf: 'center',
                marginTop: (mobileH * 4) / 100,
              }}>
              <Image
                style={{
                  width: (mobileW * 25) / 100,
                  height: (mobileW * 25) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
                source={item.image}
              />
              <Image
                style={{
                  width: (mobileW * 70) / 100,
                  height: (mobileW * 70) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'flex-end',
                }}
                source={item.image1}
              />
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: (mobileH * 5) / 100,
                  width: (mobileW * 90) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 5) / 100,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.whiteColor,
                    alignSelf: 'center',
                  }}>
                  {item.title}
                </Text>

                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    marginTop: (mobileH * 3) / 100,
                    letterSpacing: 2,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.whiteColor,
                    alignSelf: 'center',
                  }}>
                  {'......................................................'}
                </Text>
                <View
                  style={{
                    width: (mobileW * 60) / 100,
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      alignItems: 'center',
                      textAlign: 'center',
                      fontSize: (mobileW * 3.3) / 100,
                      marginTop: (mobileH * 3) / 100,
                      fontFamily: Font.FontSemiBold,
                      color: Colors.whiteColor,
                    }}>
                    {item.title2}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {item.key == 5 && (
          <View
            style={{
              width: mobileW,
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: mobileW,
                alignSelf: 'center',
                marginTop: (mobileH * 4) / 100,
              }}>
              <Image
                style={{
                  width: (mobileW * 25) / 100,
                  height: (mobileW * 25) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
                source={item.image}
              />
              <Image
                style={{
                  width: (mobileW * 70) / 100,
                  height: (mobileW * 70) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'flex-end',
                }}
                source={item.image1}
              />
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: (mobileH * 5) / 100,
                  width: (mobileW * 90) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 5) / 100,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.whiteColor,
                    alignSelf: 'center',
                  }}>
                  {item.title}
                </Text>

                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    marginTop: (mobileH * 3) / 100,
                    letterSpacing: 2,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.whiteColor,
                    alignSelf: 'center',
                  }}>
                  {'......................................................'}
                </Text>
                <View
                  style={{
                    width: (mobileW * 60) / 100,
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      alignItems: 'center',
                      textAlign: 'center',
                      fontSize: (mobileW * 3.3) / 100,
                      marginTop: (mobileH * 3) / 100,
                      fontFamily: Font.FontSemiBold,
                      color: Colors.whiteColor,
                    }}>
                    {item.title2}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {item.key == 6 && (
          <View
            style={{
              width: mobileW,
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: mobileW,
                alignSelf: 'center',
                marginTop: (mobileH * 4) / 100,
              }}>
              <Image
                style={{
                  width: (mobileW * 25) / 100,
                  height: (mobileW * 25) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
                source={item.image}
              />
              <Image
                style={{
                  width: (mobileW * 70) / 100,
                  height: (mobileW * 70) / 100,
                  resizeMode: 'contain',
                  alignSelf: 'flex-end',
                }}
                source={item.image1}
              />
              <View
                style={{
                  alignSelf: 'center',
                  marginTop: (mobileH * 5) / 100,
                  width: (mobileW * 90) / 100,
                }}>
                <Text
                  style={{
                    fontSize: (mobileW * 5) / 100,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.whiteColor,
                    alignSelf: 'center',
                  }}>
                  {item.title}
                </Text>

                <Text
                  style={{
                    fontSize: (mobileW * 3) / 100,
                    marginTop: (mobileH * 3) / 100,
                    letterSpacing: 2,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.whiteColor,
                    alignSelf: 'center',
                  }}>
                  {'......................................................'}
                </Text>
                <View
                  style={{
                    width: (mobileW * 60) / 100,
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      alignItems: 'center',
                      textAlign: 'center',
                      fontSize: (mobileW * 3.3) / 100,
                      marginTop: (mobileH * 3) / 100,
                      fontFamily: Font.FontSemiBold,
                      color: Colors.whiteColor,
                    }}>
                    {item.title2}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };
  renderPagination = activeIndex => {
    //  this.setState({active_tab:activeIndex})
    return (
      <View style={styles.paginationContainer}>
        <SafeAreaView>
          <View style={styles.paginationDots}>
            {this.state.slides.length > 1 &&
              this.state.slides.map((_, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    style={[
                      i === activeIndex
                        ? {
                          backgroundColor:
                            this.state.active_tab < 3
                              ? Colors.theme_color2
                              : Colors.placeholder_color,
                          width: 35,
                          height: 10,
                          borderRadius: 5,
                          marginHorizontal: 4,
                        }
                        : {
                          backgroundColor:
                            this.state.active_tab < 3
                              ? Colors.placeholder_color
                              : Colors.theme_color,
                          width: 10,
                          height: 10,
                          borderRadius: 5,
                          marginHorizontal: 4,
                        },
                    ]}
                    onPress={() => {
                      this.slider?.goToSlide(i, true);
                    }}
                  />
                );
              })}
          </View>
        </SafeAreaView>
      </View>
    );
  };
  render() {
    return (
      <ImageBackground
        resizeMode='cover'
        source={localimag.welcomeScreen}
        style={{ flex: 1 }}
        imageStyle={{ flex: 1 }}
      >
        <View style={{
          width: mobileW * 90 / 100, alignSelf: 'center', alignItems: 'center', position: 'absolute',
          bottom: mobileH * 1 / 100
        }}>
          <Image
            source={localimag.welcomelogowhite}
            style={{

              width: mobileW * 38 / 100,
              height: mobileW * 10 / 100,
            }}

          >

          </Image>

          <Text
            style={{
              marginTop: mobileH * 2 / 100,
              width: mobileW * 90 / 100,
              textAlign: 'center',
              fontSize: mobileW * 3.5 / 100,
              fontFamily: Font.FontLight,
              color: Colors.whiteColor
            }}
          >
            {Lang_chg.welcome_description[config.language]}
          </Text>


{/* // Google button */}
          <View
            style={{
              marginTop: mobileH * 2 / 100,
              backgroundColor: Colors.whiteColor,
              width: mobileW * 90 / 100,
              height: mobileW * 14 / 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: mobileW * 7 / 100,
              flexDirection: 'row'
            }}
          >
            <Image
              source={localimag.GoogleIcon}
              style={{
                marginRight: mobileW * 5 / 100,
                width: mobileW * 5 / 100,
                height: mobileW * 5 / 100,

              }}

            >

            </Image>

            <Text
              style={{


                textAlign: 'center',
                fontSize: mobileW * 3.8 / 100,
                fontFamily: Font.FontMedium,
                color: Colors.black_color
              }}
            >
              {Lang_chg.continue_with_google[config.language]}
            </Text>


          </View>

          {/* // Apple button */}
          <View
            style={{
              marginTop: mobileH * 2 / 100,
              backgroundColor: Colors.whiteColor,
              width: mobileW * 90 / 100,
              height: mobileW * 14 / 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: mobileW * 7 / 100,
              flexDirection: 'row'
            }}
          >
            <Image
              source={localimag.AppleIcon}
              style={{
                marginRight: mobileW * 5 / 100,
                width: mobileW * 6 / 100,
                height: mobileW * 6/ 100,

              }}

            >

            </Image>

            <Text
              style={{


                textAlign: 'center',
                fontSize: mobileW * 3.8 / 100,
                fontFamily: Font.FontMedium,
                color: Colors.black_color
              }}
            >
              {Lang_chg.continue_with_apple[config.language]}
            </Text>


          </View>


          {/* // SingIn/SignUp button */}
          <TouchableOpacity
          activeOpacity={0.9}
          onPress={()=>{
            this.props.navigation.navigate('Login')
          }}
            style={{
              marginTop: mobileH * 2 / 100,
              backgroundColor: Colors.whiteColor,
              width: mobileW * 90 / 100,
              height: mobileW * 14 / 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: mobileW * 7 / 100,
              flexDirection: 'row'
            }}
          >
            <Image
              source={localimag.MailPinkIcon}
              style={{
                marginRight: mobileW * 5 / 100,
                width: mobileW * 6 / 100,
                height: mobileW * 6 / 100,

              }}

            >

            </Image>

            <Text
              style={{


                textAlign: 'center',
                fontSize: mobileW * 3.8 / 100,
                fontFamily: Font.FontMedium,
                color: Colors.black_color
              }}
            >
              {Lang_chg.SignInSignup_txt[config.language]}
            </Text>


          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default WelcomeScreens;

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});
