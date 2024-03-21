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
import Footer from './Provider/Footer';


export default class Message extends Component {
    _didFocusSubscription;
    _willBlurSubscription;
    constructor(props) {
        super(props)
        this.state = {
            mingleStatus: 0,
            otpText: '',
            otp: '',
            user_id: 0,
            showbtn: true,

            minglesList: [
                { image: require('./Icons/image6.png') },
                { image: require('./Icons/image3.png') },
                { image: require('./Icons/image6.png') },
                { image: require('./Icons/image3.png') },


            ],
            joineventList: [
                { mens: 30, women: 40, title: 'Social Gathering', image: require('./Icons/Event1.png'), event_status: 0 },
                { mens: 50, women: 45, title: 'Birthday', image: require('./Icons/Event2.png'), event_status: 1 },


            ],

            picturesArray: [
                { image: localimag.girlImage },
                { image: require('./Icons/image1.png') },
                { image: require('./Icons/image4.png') },
                { image: require('./Icons/image5.png') },
                { image: localimag.girlImage },
                { image: require('./Icons/image1.png') },
                { image: require('./Icons/image4.png') },
                { image: require('./Icons/image5.png') },

            ],

            peopleList: [
                { image: require('./Icons/image6.png') },
                { image: require('./Icons/image5.png') },
                { image: require('./Icons/image4.png') },
                { image: require('./Icons/image3.png') },
                { image: require('./Icons/image2.png') },
                { image: require('./Icons/image6.png') },
                { image: require('./Icons/image5.png') },
                { image: require('./Icons/image4.png') },
                { image: require('./Icons/image3.png') },
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

                <LinearGradient
                    colors={[Colors.theme_color3, Colors.theme_color]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    useAngle={true}
                    angle={90}

                    style={{
                        height: (mobileH * 10) / 100,
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

                    <View style={{

                        width: mobileW * 10 / 100
                    }}>


                    </View>
                    <Text style={{

                        textAlign: 'center',
                        color: Colors.whiteColor,
                        fontFamily: Font.FontMedium,
                        fontSize: mobileW * 5.2 / 100,

                    }}>{Lang_chg.Messages_txt[config.language]}</Text>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                        }}
                        style={{

                            width: mobileW * 10 / 100,

                            justifyContent: 'center'
                        }}>
                        <Image
                            style={{

                                height: mobileW * 7 / 100,
                                width: mobileW * 7 / 100,
                                resizeMode: 'contain'
                            }}
                            source={localimag.SearchIcon}
                        ></Image>
                    </TouchableOpacity>
                </LinearGradient>


                <View style={{
                    marginVertical: mobileH * 3 / 100,
                    width: mobileW * 100 / 100,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            this.setState({ mingleStatus: 0 })
                        }}
                        style={{
                            width: mobileW * 50 / 100,
                            height: mobileH * 6 / 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomColor: this.state.mingleStatus == 0 ? Colors.theme_color4 : Colors.whiteColor,
                            borderBottomWidth: mobileW * 0.5 / 100
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: this.state.mingleStatus == 0 ? Colors.theme_color4 : Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 3.8 / 100,
                        }}>
                            {Lang_chg.FlightMingle[config.language]}
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            this.setState({ mingleStatus: 1 })
                        }}
                        style={{
                            width: mobileW * 50 / 100,
                            height: mobileH * 6 / 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomColor: this.state.mingleStatus == 1 ? Colors.theme_color4 : Colors.whiteColor,
                            borderBottomWidth: mobileW * 0.5 / 100
                        }}
                    >

                        <Text style={{
                            textAlign: 'center',
                            color: this.state.mingleStatus == 1 ? Colors.theme_color4 : Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 3.8 / 100,
                        }}>
                            {Lang_chg.EventMingle[config.language]}
                        </Text>

                    </TouchableOpacity>

                </View>
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        width: '100%',
                        paddingBottom: mobileH * 15 / 100,
                        alignItems: 'center',

                        backgroundColor: Colors.whiteColor
                    }}
                    showsVerticalScrollIndicator={false}>
                        {
                            this.state.mingleStatus==0 ?
<View>
                    <View style={{ width: '100%', }}>
                        <Text style={{
                            marginHorizontal: mobileW * 5 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 4 / 100,
                        }}>
                            {Lang_chg.active_users[config.language]}
                        </Text>




                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: mobileW * 5 / 100, alignSelf: 'center', marginTop: mobileH * 2 / 100 }}
                            horizontal={true}
                            data={this.state.picturesArray}
                            renderItem={({ item, index }) =>
                                <View style={{
                                    borderColor: Colors.theme_color4,
                                    borderWidth: mobileW * 0.5 / 100, marginRight: mobileW * 2 / 100,
                                    marginBottom: mobileW * 2 / 100,
                                    padding: 1,
                                    borderRadius: mobileW * 8 / 100
                                }}>
                                    <Image
                                        style={{


                                            width: (mobileW * 15) / 100,
                                            height: (mobileW * 15) / 100,
                                            borderRadius: mobileW * 7.5 / 100

                                        }}

                                        source={item.image}

                                    >

                                    </Image>
                                </View>
                            }>



                        </FlatList>
                    </View>

                    <View style={{ width: '100%', marginTop: mobileH * 2 / 100 }}>
                        <Text style={{
                            marginHorizontal: mobileW * 5 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 4 / 100,
                        }}>
                            {Lang_chg.chats_txt[config.language]}
                        </Text>
                    </View>

                    <FlatList
                        data={this.state.peopleList}
                        renderItem={({ item, index }) =>
                            <View


                                style={{
                                    marginTop: mobileH * 5 / 100,
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

                                <View style={{
                                    
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Image
                                        style={{
                                            borderRadius: mobileW * 6 / 100,
                                            height: mobileW * 12 / 100,
                                            width: mobileW * 12 / 100,

                                        }}
                                        source={item.image}
                                    ></Image>

                                    <View style={{
                                        marginHorizontal: mobileW * 4 / 100,
                                        width: mobileW * 40 / 100
                                    }}>
                                        <Text style={{
                                            color: Colors.black_color,
                                            fontFamily: Font.FontSemiBold,
                                            fontSize: mobileW * 3.8 / 100,

                                        }}>{"Hanif Adamu"}</Text>



                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                marginTop: mobileH * 0.5 / 100,
                                                width: mobileW * 40 / 100,
                                                color: Colors.black_color,
                                                fontFamily: Font.FontRegular,
                                                fontSize: mobileW * 3.5 / 100,

                                            }}>{"Abuja"}</Text>

                                    </View>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            marginTop: mobileH * 0.5 / 100,
                                          
                                            color: Colors.black_color,
                                            fontFamily: Font.FontRegular,
                                            fontSize: mobileW * 3.5 / 100,

                                        }}>{"12 Jul 24, 08:00"}</Text>
                                    {
                                       index==0 ? 
                                    
                                    <ImageBackground

                                        style={{
                                            marginTop: mobileH * 0.5 / 100,
                                            width: mobileW * 5 / 100,
                                            height: mobileW * 5 / 100,
                                            borderRadius: mobileW * 2.5 / 100,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        imageStyle={{

                                            width: mobileW * 5 / 100,
                                            height: mobileW * 5 / 100,
                                            borderRadius: mobileW * 2.5 / 100,

                                        }}

                                        source={localimag.messagecount_bg}
                                    >
                                        <Text style={{
                                            textAlign: 'center',
                                            color: Colors.whiteColor,
                                            fontFamily: Font.FontRegular,
                                            fontSize: mobileW * 3.2 / 100,

                                        }}>{"1"}</Text>

                                    </ImageBackground>
                                    :
                                    <View style={{
                                        marginTop: mobileH * 0.5 / 100,
                                            width: mobileW * 5 / 100,
                                            height: mobileW * 5 / 100,
                                    }}>

                                    </View>
                        }
                                </View>
                            </View>

                        }
                    >




                    </FlatList>
                    </View>

                            :

                            <View>
                    <View style={{ width: '100%', }}>
                        <Text style={{
                            marginHorizontal: mobileW * 5 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 4 / 100,
                        }}>
                            {Lang_chg.active_users[config.language]}
                        </Text>




                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: mobileW * 5 / 100, alignSelf: 'center', marginTop: mobileH * 2 / 100 }}
                            horizontal={true}
                            data={this.state.picturesArray}
                            renderItem={({ item, index }) =>
                                <View style={{
                                    borderColor: Colors.theme_color4,
                                    borderWidth: mobileW * 0.5 / 100, marginRight: mobileW * 2 / 100,
                                    marginBottom: mobileW * 2 / 100,
                                    padding: 1,
                                    borderRadius: mobileW * 8 / 100
                                }}>
                                    <Image
                                        style={{


                                            width: (mobileW * 15) / 100,
                                            height: (mobileW * 15) / 100,
                                            borderRadius: mobileW * 7.5 / 100

                                        }}

                                        source={item.image}

                                    >

                                    </Image>
                                </View>
                            }>



                        </FlatList>
                    </View>

                    <View style={{ width: '100%', marginTop: mobileH * 2 / 100 }}>
                        <Text style={{
                            marginHorizontal: mobileW * 5 / 100,
                            color: Colors.black_color,
                            fontFamily: Font.FontSemiBold,
                            fontSize: mobileW * 4 / 100,
                        }}>
                            {Lang_chg.chats_txt[config.language]}
                        </Text>
                    </View>

                    <FlatList
                        data={this.state.peopleList}
                        renderItem={({ item, index }) =>
                            <View


                                style={{
                                    marginTop: mobileH * 5 / 100,
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

                                <View style={{
                                    
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Image
                                        style={{
                                            borderRadius: mobileW * 6 / 100,
                                            height: mobileW * 12 / 100,
                                            width: mobileW * 12 / 100,

                                        }}
                                        source={item.image}
                                    ></Image>

                                    <View style={{
                                        marginHorizontal: mobileW * 4 / 100,
                                        width: mobileW * 40 / 100
                                    }}>
                                        <Text style={{
                                            color: Colors.black_color,
                                            fontFamily: Font.FontSemiBold,
                                            fontSize: mobileW * 3.8 / 100,

                                        }}>{"Hanif Adamu"}</Text>



                                        <Text
                                            numberOfLines={1}
                                            style={{
                                               
                                                marginTop: mobileH * 0.5 / 100,
                                                width: mobileW * 40 / 100,
                                                color: Colors.black_color,
                                                fontFamily: Font.FontRegular,
                                                fontSize: mobileW * 3.5 / 100,

                                            }}>{"Abuja"}</Text>

                                    </View>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            marginTop: mobileH * 0.5 / 100,
                                          
                                            color: Colors.black_color,
                                            fontFamily: Font.FontRegular,
                                            fontSize: mobileW * 3.5 / 100,

                                        }}>{"12 Jul 24, 08:00"}</Text>
                                    {
                                       index==0 ? 
                                    
                                    <ImageBackground

                                        style={{
                                            marginTop: mobileH * 0.5 / 100,
                                            width: mobileW * 5 / 100,
                                            height: mobileW * 5 / 100,
                                            borderRadius: mobileW * 2.5 / 100,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        imageStyle={{

                                            width: mobileW * 5 / 100,
                                            height: mobileW * 5 / 100,
                                            borderRadius: mobileW * 2.5 / 100,

                                        }}

                                        source={localimag.messagecount_bg}
                                    >
                                        <Text style={{
                                            textAlign: 'center',
                                            color: Colors.whiteColor,
                                            fontFamily: Font.FontRegular,
                                            fontSize: mobileW * 3.2 / 100,

                                        }}>{"1"}</Text>

                                    </ImageBackground>
                                    :
                                    <View style={{
                                        marginTop: mobileH * 0.5 / 100,
                                            width: mobileW * 5 / 100,
                                            height: mobileW * 5 / 100,
                                    }}>

                                    </View>
                        }
                                </View>
                            </View>

                        }
                    >




                    </FlatList>
                    </View>
                        }


                </KeyboardAwareScrollView>

                <Footer
                    activepage="Message"
                    usertype={1}
                    footerpage={[
                        {
                            name: 'Home',
                            image: localimag.FooterHomeDActive,
                            activeimage: localimag.FooterHomeActive,
                            countshow: 0,
                            inbox_count: 0,
                        },
                        {
                            name: 'Message',
                            image: localimag.FooterMessagesDActive,
                            activeimage: localimag.FooterMessagesActive,
                            countshow: 0,
                            inbox_count: 0,
                        },
                        {
                            name: 'Favourite',
                            image: localimag.FooterFavouriteDActive,
                            activeimage: localimag.FooterFavouriteActive,
                            countshow: 0,
                            inbox_count: 0,
                        },

                        {
                            name: 'Profile',
                            image: localimag.FooterProfileDActive,
                            activeimage: localimag.FooterProfileActive,
                            countshow: 0,
                            inbox_count: 0,
                        },
                    ]}
                    navigation={this.props.navigation}
                    imagestyle1={{
                        width: (mobileW * 6) / 100,
                        height: (mobileW * 6) / 100,
                        backgroundColor: Colors.white_color,
                        countcolor: Colors.white_color,
                        countbackground: Colors.welcome_text_color,
                    }}
                    count_inbox={false}
                />
            </SafeAreaView>
        )
    }
}
