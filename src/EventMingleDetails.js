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

export default class EventMingleDetails extends Component {
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

                { image: localimag.girlImage },
                { image: require('./Icons/image1.png') },
                { image: require('./Icons/image4.png') },
                { image: localimag.girlImage },

            ],

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

                        source={require('./Icons/Event1.png')}
                        imageStyle={{

                            width: mobileW,
                            height: mobileH * 50 / 100
                            ,
                            borderBottomLeftRadius: mobileW * 5 / 100,
                            borderBottomRightRadius: mobileW * 5 / 100,
                        }}
                        style={{
                            borderBottomLeftRadius: mobileW * 5 / 100,
                            borderBottomRightRadius: mobileW * 5 / 100,
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

                    </ImageBackground>
                    <View style={{ width: mobileW * 90 / 100, alignSelf: 'center' }}>
                        <Text style={{
                            marginTop: mobileH * 1.5 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 4.5 / 100,

                        }}>{"Social Gathering"}</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: mobileH * 1 / 100,

                        }}>
                            <Text style={{


                                color: Colors.black_color,
                                fontFamily: Font.FontMedium,
                                fontSize: mobileW * 3.8 / 100,

                            }}>{30 + " " + Lang_chg.mens_txt[config.language]}</Text>
                            <Image
                                style={{
                                    tintColor: Colors.greyColor,
                                    marginHorizontal: mobileW * 1 / 100,
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

                            }}>{40 + " " + Lang_chg.womens_txt[config.language]}</Text>
                        </View>
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

                        </View>
                        <View style={{
                            width: mobileW * 90 / 100,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: mobileH * 2 / 100,
                        }}>
                            <FlatList
                                horizontal={true}
                                data={this.state.picturesArray}
                                renderItem={({ item, index }) =>
                                    index < 7 &&

                                    <View >
                                        {
                                            index < 6 ?

                                                <ImageBackground
                                                    style={[


                                                        {

                                                            right: index > 0 ? mobileW * (1 + (index * 2)) / 100 : 0,
                                                            borderRadius: mobileW * 4 / 100,
                                                            width: mobileW * 8 / 100,
                                                            height: mobileW * 8 / 100,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }]}
                                                    imageStyle={[


                                                        {
                                                            right: index > 0 ? mobileW * (1 + (index * 2)) / 100 : 0,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderRadius: mobileW * 4 / 100,
                                                            width: mobileW * 8 / 100,
                                                            height: mobileW * 8 / 100
                                                        }]}
                                                    source={item.image}
                                                >


                                                </ImageBackground>
                                                :
                                                <ImageBackground
                                                    style={[


                                                        {

                                                            right: index > 0 ? mobileW * (1 + (index * 2)) / 100 : 0,
                                                            borderRadius: mobileW * 4 / 100,
                                                            width: mobileW * 8 / 100,
                                                            height: mobileW * 8 / 100,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }]}
                                                    imageStyle={[


                                                        {
                                                            right: index > 0 ? mobileW * (1 + (index * 2)) / 100 : 0,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderRadius: mobileW * 4 / 100,
                                                            width: mobileW * 8 / 100,
                                                            height: mobileW * 8 / 100
                                                        }]}
                                                    source={item.image}
                                                >
                                                    {
                                                        this.state.picturesArray.length > 7 &&

                                                        <View style={this.state.picturesArray.length > 7 && {
                                                            backgroundColor: '#00000070',
                                                            width: mobileW * 8 / 100,
                                                            height: mobileW * 8 / 100,
                                                            borderRadius: mobileW * 4 / 100,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}>
                                                            <Text style={{

                                                                textAlign: 'center',
                                                                color: Colors.whiteColor,
                                                                fontFamily: Font.FontSemiBold,
                                                                fontSize: mobileW * 2.8 / 100,

                                                            }}>{"30+"}</Text>

                                                        </View>
                                                    }

                                                </ImageBackground>
                                        }
                                    </View>
                                }
                            >

                            </FlatList>





                            <View
                                style={{ flexDirection: 'row', alignItems: 'center' }}
                            >
                                <Text style={{


                                    color: Colors.theme_color4,
                                    fontFamily: Font.FontSemiBold,
                                    fontSize: mobileW * 3.8 / 100,

                                }}>{Lang_chg.viewall[config.language]}</Text>
                                <Image
                                    style={{


                                        borderRadius: mobileW * 4 / 100,
                                        width: mobileW * 6 / 100,
                                        height: mobileW * 6 / 100
                                    }}
                                    source={localimag.RightBackThemeIcon}
                                >
                                </Image>
                            </View>

                        </View>

                        <Text style={{

                            marginTop: mobileH * 3 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{Lang_chg.Date_and_time_ofEvent[config.language]}</Text>
                        <Text style={{

                            marginTop: mobileH * 1 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontMedium,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{"12 july 2024, 08:00 PM"}</Text>


                        <Text style={{

                            marginTop: mobileH * 3 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{Lang_chg.venue_txt[config.language]}</Text>
                        <Text style={{

                            marginTop: mobileH * 1 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontMedium,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{"Suite 2 Banking Hall Kaura Modern Market,Apo, Abuja"}</Text>

                        <Image
                            style={{
                                marginTop: mobileH * 2 / 100,
                                width: mobileW * 90 / 100,
                                height: mobileW * 31.7 / 100
                            }}
                            source={localimag.locationMapIMage}
                        >

                        </Image>

                        <Text style={{

                            marginTop: mobileH * 3 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{Lang_chg.Description_txt[config.language]}</Text>

                        <Text style={{

                            marginTop: mobileH * 1 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontMedium,
                            fontSize: mobileW * 3.8 / 100,

                        }}>{"Lorem ipsum dolor sit amet consectetur. Loreac tempor sit vitae aliquam blandit ut maecenas accumsan. Vel at aliquet in nibh. Viverra urna velit a gravida...."}<Text style={{
                            marginTop: mobileH * 1 / 100,
                            color: Colors.theme_color3,
                            fontFamily: Font.FontMedium,
                            fontSize: mobileW * 3.8 / 100,
                        }}>
                                {Lang_chg.read_more[config.language]}
                            </Text></Text>

                        <View style={{
                            borderRadius: mobileW * 3 / 100,
                            marginTop: mobileH * 3 / 100,
                            paddingHorizontal: mobileW * 3 / 100,
                            width: mobileW * 90 / 100,
                            backgroundColor: Colors.hobby_bg
                        }}>
                            <Text style={{

                                marginTop: mobileH * 2 / 100,
                                color: Colors.theme_color4,
                                fontFamily: Font.FontSemiBold,
                                fontSize: mobileW * 3.8 / 100,

                            }}>{Lang_chg.event_organizer_details[config.language]}</Text>

                            <View
                                style={{
                                    width: mobileW * 90 / 100,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    style={{
                                        marginRight: mobileW * 3 / 100,
                                        borderRadius: mobileW * 6 / 100,
                                        width: mobileW * 12 / 100,
                                        height: mobileW * 12 / 100
                                    }}
                                    source={require('./Icons/image6.png')}
                                >

                                </Image>
                                <View style={{
                                    paddingVertical: mobileH * 2 / 100,
                                }}
                                >
                                    <Text style={{


                                        color: Colors.black_color,
                                        fontFamily: Font.FontSemiBold,
                                        fontSize: mobileW * 3.5 / 100,

                                    }}>{"Hanif Adamu (M)"}</Text>

                                    <Text style={{

                                        marginTop: mobileH * 0.5 / 100,
                                        color: Colors.black_color,
                                        fontFamily: Font.FontMedium,
                                        fontSize: mobileW * 3.5 / 100,

                                    }}>{'+234-806-1234 5678'}</Text>
                                    <Text style={{

                                        marginTop: mobileH * 0.5 / 100,
                                        color: Colors.black_color,
                                        fontFamily: Font.FontMedium,
                                        fontSize: mobileW * 3.5 / 100,

                                    }}>{'hanifadamu@gmail.com'}</Text>

                                </View>

                            </View>
                        </View>
                    </View>


    
                </KeyboardAwareScrollView>


            </SafeAreaView>


        )
    }
}
