import React, { Component, useRef } from 'react'
import {
    FlatList,
    View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity,
    TextInput, BackHandler, Alert, Keyboard
} from 'react-native'

import {
    config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro,
    Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification
} from './Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';

export default class FlightMingleUserDetails extends Component {
    _didFocusSubscription;
    _willBlurSubscription;
    constructor(props) {
        super(props)
        this.state = {
            picturesArray: [
                { image: localimag.girlImage },
                { image: require('./Icons/image1.png') },
                { image: require('./Icons/image4.png') },
                { image: require('./Icons/image5.png') },
                { image: require('./Icons/image5.png') },
            ],
            hobby_arr: [
                { id: 0, title: 'Martial Arts', status: false },
                { id: 1, title: 'Boxing', status: false },
                { id: 2, title: 'Dancing', status: false },
                { id: 3, title: 'WeightLifting and BodyBiulding', status: false },
                { id: 4, title: 'Martial Arts', status: false },
                { id: 5, title: 'Making New Friends', status: false },

            ],
            interest_arr: [

                { id: 2, title: 'Dancing', status: false }, { id: 4, title: 'Martial Arts', status: false },
                { id: 3, title: 'WeightLifting and BodyBiulding', status: false },

                { id: 5, title: 'Making New Friends', status: false },

            ]
        }

    }
    componentDidMount() {

        const { navigation } = this.props;
        this.focusListener = navigation.addListener('focus', () => {

        });

    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <StatusBar
                    hidden={false}
                    translucent={false}
                    barStyle="light-content"
                    networkActivityIndicatorVisible={true}
                    backgroundColor={Colors.theme_color}
                />
                {/* ........................Background...................... */}



                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        width: '100%',
                        paddingBottom: mobileH * 10 / 100,


                        backgroundColor: Colors.whiteColor
                    }}
                    showsVerticalScrollIndicator={false}>

                    {/* .....................Text input............... */}

                    <ImageBackground

                        source={require('./Icons/image6.png')}
                        imageStyle={{

                            width: mobileW,
                            height: mobileH * 50 / 100
                            ,
                            borderBottomLeftRadius: mobileW * 3 / 100,
                            borderBottomRightRadius: mobileW * 3 / 100,
                        }}
                        style={{
                            borderBottomLeftRadius: mobileW * 3 / 100,
                            borderBottomRightRadius: mobileW * 3 / 100,
                            width: mobileW,
                            height: mobileH * 50 / 100

                        }}>
                        <View


                            style={{
                                borderBottomRightRadius: mobileW * 10 / 100,
                                borderBottomLeftRadius: mobileW * 10 / 100,
                                width: mobileW,
                                paddingHorizontal: mobileH * 3 / 100,
                                alignSelf: 'center',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >

                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => {

                                    this.props.navigation.goBack()
                                }}
                                style={{

                                    width: mobileW * 15 / 100,
                                    height: (mobileH * 10) / 100,

                                    justifyContent: 'center'
                                }}>
                                <Image
                                    style={{

                                        height: mobileW * 9 / 100,
                                        width: mobileW * 9 / 100,
                                        resizeMode: 'contain'
                                    }}
                                    source={localimag.blackBackwithwhitebg}
                                ></Image>
                            </TouchableOpacity>


                            <View style={{
                                flexDirection: 'row', alignItems: 'center',
                                justifyContent: 'space-between',
                                width: mobileW * 20 / 100
                            }}>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => {

                                      
                                    }}
                                    style={{

                                        width: mobileW * 8 / 100,
                                        height: (mobileH * 10) / 100,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Image
                                        style={{

                                            height: mobileW * 9 / 100,
                                        width: mobileW * 9 / 100,
                                            resizeMode: 'contain'
                                        }}
                                        source={localimag.favouritewithwhitebg}
                                    ></Image>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => {
                                    }}
                                    style={{

                                        height: mobileW * 9 / 100,
                                        width: mobileW * 9 / 100,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Image
                                        style={{

                                            height: mobileW * 9 / 100,
                                            width: mobileW * 9 / 100,
                                            resizeMode: 'contain'
                                        }}
                                        source={localimag.Morewithwhitebg}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ImageBackground>
                    <View style={{ width: mobileW * 90 / 100, alignSelf: 'center' }}>
                        <Text style={{
                            marginTop: mobileH * 0.5 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 4.5 / 100,

                        }}>{"Hanif Adamu, 28"}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: mobileH * 1 / 100,
                        }}>
                            <Image
                                source={localimag.othercountry_icon}
                                style={{
                                    marginRight: mobileW * 2 / 100,
                                    width: mobileW * 4.5 / 100,
                                    height: mobileW * 4.5 / 100
                                }}
                            >

                            </Image>
                            <Text style={{

                                textAlign: 'center',
                                color: Colors.black_color,
                                fontFamily: Font.FontMedium,
                                fontSize: mobileW * 3.8 / 100,

                            }}>{"Abuja"}</Text>
                            <Image
                                style={{
                                    marginHorizontal: mobileW * 2 / 100,
                                    width: mobileW * 1.5 / 100,
                                    height: mobileW * 1.5 / 100
                                }}
                                source={localimag.pointImage}
                            >


                            </Image>
                            <Text style={{

                                textAlign: 'center',
                                color: Colors.black_color,
                                fontFamily: Font.FontMedium,
                                fontSize: mobileW * 3.8 / 100,

                            }}>{"5.8 Feet"}</Text>
                            <Image
                                style={{
                                    marginHorizontal: mobileW * 2 / 100,
                                    width: mobileW * 1.5 / 100,
                                    height: mobileW * 1.5 / 100
                                }}
                                source={localimag.pointImage}
                            >


                            </Image>
                            <Text style={{

                                textAlign: 'center',
                                color: Colors.black_color,
                                fontFamily: Font.FontMedium,
                                fontSize: mobileW * 3.8 / 100,

                            }}>{"Muslim"}</Text>
                            <Image
                                style={{
                                    marginHorizontal: mobileW * 2 / 100,
                                    width: mobileW * 1.5 / 100,
                                    height: mobileW * 1.5 / 100
                                }}
                                source={localimag.pointImage}
                            >


                            </Image>
                            <Text style={{

                                textAlign: 'center',
                                color: Colors.black_color,
                                fontFamily: Font.FontMedium,
                                fontSize: mobileW * 3.8 / 100,

                            }}>{"Male"}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: mobileH * 0.3 / 100,
                        }}>
                            <Image
                                style={{
                                    marginRight: mobileW * 2 / 100,
                                    width: mobileW * 1.5 / 100,
                                    height: mobileW * 1.5 / 100
                                }}
                                source={localimag.pointImage}
                            >


                            </Image>

                            <Text style={{


                                color: Colors.black_color,
                                fontFamily: Font.FontMedium,
                                fontSize: mobileW * 3.8 / 100,

                            }}>{"Businessman"}</Text>
                        </View>

                        <Text style={{

                            marginTop: mobileH * 2 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{Lang_chg.BIo_txt[config.language]}</Text>
                        <Text style={{

                            marginTop: mobileH * 1 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontMedium,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{"I'm looking for my partner in crime. Are you up for the challenge"}</Text>

                        <Text style={{

                            marginTop: mobileH * 2 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{Lang_chg.hobby_txt[config.language]}</Text>
                        <View style={{ width: '90%', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: mobileW * 2 / 100 }}>
                            {this.state.hobby_arr != 'NA' &&
                                <>
                                    {this.state.hobby_arr.map((data, index1) => (
                                        <View style={{}}>
                                            <View

                                                style={[{
                                                    marginTop: mobileW * 2 / 100,
                                                    marginRight: mobileW * 2 / 100,
                                                    borderRadius: mobileW * 1 / 100,
                                                    paddingVertical: mobileW * 1 / 100,
                                                    paddingHorizontal: mobileW * 2 / 100,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                }, { flexDirection: 'row', backgroundColor: Colors.hobby_bg }]}>
                                                <Text style={{
                                                    color: Colors.black_color,
                                                    fontFamily: Font.FontMedium,
                                                    fontSize: mobileW * 3.8 / 100,
                                                    marginLeft: mobileW * 0.5 / 100
                                                }}>{data.title}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </>
                            }
                        </View>

                        <Text style={{

                            marginTop: mobileH * 2 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{Lang_chg.Interest_txt[config.language]}</Text>
                        <View style={{ width: '90%', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: mobileW * 2 / 100 }}>
                            {this.state.Interest_txt != 'NA' &&
                                <>
                                    {this.state.interest_arr.map((data, index1) => (
                                        <View style={{}}>
                                            <View
                                                style={[{
                                                    marginTop: mobileW * 2 / 100,
                                                    marginRight: mobileW * 2 / 100,
                                                    borderRadius: mobileW * 1 / 100,
                                                    paddingVertical: mobileW * 1 / 100,
                                                    paddingHorizontal: mobileW * 2 / 100,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                }, { flexDirection: 'row', backgroundColor: Colors.hobby_bg }]}>
                                                <Text style={{
                                                    color: Colors.black_color,
                                                    fontFamily: Font.FontMedium,
                                                    fontSize: mobileW * 3.8 / 100,
                                                    marginLeft: mobileW * 0.5 / 100
                                                }}>{data.title}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </>
                            }
                        </View>

                        <Text style={{

                            marginTop: mobileH * 2 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{Lang_chg.Images_txt[config.language]}</Text>

                        <FlatList
                            contentContainerStyle={{ marginTop: mobileH * 2 / 100 }}
                            numColumns={4}
                            data={this.state.picturesArray}
                            renderItem={({ item, index }) =>
                                index <= 3 &&
                                <View style={{}}>
                                    {
                                        index < 3 ?

                                            <ImageBackground
                                                style={{

                                                    marginRight: mobileW * 3 / 100,
                                                    width: (mobileW * 19) / 100,
                                                    height: (mobileW * 19) / 100,
                                                    borderRadius: mobileW * 3 / 100

                                                }}
                                                imageStyle={{

                                                    marginRight: mobileW * 3 / 100,
                                                    width: (mobileW * 19) / 100,
                                                    height: (mobileW * 19) / 100,
                                                    borderRadius: mobileW * 3 / 100


                                                }}
                                                source={item.image}

                                            >

                                            </ImageBackground>
                                            :
                                            index == 3 &&

                                            <ImageBackground
                                                style={{


                                                    width: (mobileW * 19) / 100,
                                                    height: (mobileW * 19) / 100,
                                                    borderRadius: mobileW * 3 / 100,
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                                imageStyle={{

                                                    marginRight: mobileW * 3 / 100,
                                                    width: (mobileW * 19) / 100,
                                                    height: (mobileW * 19) / 100,
                                                    borderRadius: mobileW * 3 / 100,
                                                    alignItems: 'center',
                                                    justifyContent: 'center'

                                                }}
                                                source={item.image}

                                            >
                                              {
                                                this.state.picturesArray.length>4 &&
                                              
                                                <View style={{
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                    borderRadius: mobileW * 3 / 100,
                                                    backgroundColor: '#00000070',
                                                    width: (mobileW * 19) / 100,
                                                    height: (mobileW * 19) / 100,
                                                }}>


                                                    <Text
                                                        style={{

                                                            color: Colors.new_text_color,
                                                            fontFamily: Font.FontSemiBold,
                                                            fontSize: mobileW * 3.5 / 100,

                                                        }}
                                                    >
                                                        {Lang_chg.viewall[config.language]}
                                                    </Text>
                                                </View>
                            }
                                            </ImageBackground>


                                    }
                                </View>
                            }

                        >

                        </FlatList>

                    </View>

                    <TouchableOpacity
            onPress={() => {
           
              this.props.navigation.navigate("ChatScreen")
            }}
            activeOpacity={0.7}
            style={{
              width: (mobileW * 90) / 100,
              alignSelf: 'center',
              marginTop: (mobileH * 5) / 100,
            }}>
            <LinearGradient
              colors={[Colors.theme_color, Colors.theme_color2]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              useAngle={true}
              angle={90}
              style={{
                borderRadius: (mobileW * 3) / 100,
                alignItems: 'center',
                justifyContent: 'center',
                height: (mobileH * 6.5) / 100,
                // width: mobileW * 50/100,
              }}>
              <Text
                style={{
                  fontSize: (mobileW * 3.8) / 100,
                  color:
                    Colors.whiteColor,
                  fontFamily: Font.FontSemiBold,
                }}>
                {Lang_chg.sendMessage_txt[config.language]}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

                </KeyboardAwareScrollView>


            </SafeAreaView>


        )
    }
}
