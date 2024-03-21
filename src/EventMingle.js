import React, { Component, useRef } from 'react'
import {
    View, Text, SafeAreaView, StatusBar,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    BackHandler,
    Alert,
    Keyboard,
    FlatList,
} from 'react-native'

import {
    config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro,
    Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification
} from './Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

export default class EventMingle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            EventMingleArray:[
                {title:'Search/Join Events',image:localimag.EventMingle2},
                {title:'My Events',image:localimag.EventMingle1}
            ]

        }

    }
    componentDidMount() {

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

                            width: mobileW * 8 / 100,
                            height: (mobileH * 10) / 100,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Image
                            style={{

                                height: mobileW * 8 / 100,
                                width: mobileW * 8 / 100,
                                resizeMode: 'contain'
                            }}
                            source={localimag.whitebackIcon}
                        ></Image>
                    </TouchableOpacity>
                    <Text style={{

                        textAlign: 'center',
                        color: Colors.whiteColor,
                        fontFamily: Font.FontMedium,
                        fontSize: mobileW * 5.2 / 100,

                    }}>{Lang_chg.EventMingle[config.language]}</Text>

                    <View style={{
                        width: mobileW * 8 / 100
                    }}>

                    </View>
                </LinearGradient>
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        width: '100%',
                        paddingBottom: mobileH * 15 / 100,

                        backgroundColor: Colors.whiteColor
                    }}
                    showsVerticalScrollIndicator={false}>

                    {/* .....................Text input............... */}

                    <FlatList
                    contentContainerStyle={{paddingVertical:mobileH*2/100}}
                        data={this.state.EventMingleArray}

                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                            activeOpacity={0.9}
                             onPress={()=>{
                                index==0?
                                this.props.navigation.navigate('AllEventMingle')
                                :
                                this.props.navigation.navigate('MyEvents')
                             }}
                            
                            style={{
                                alignSelf: 'center',
                                marginVertical: mobileH * 2 / 100,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 7,
                                },
                                shadowOpacity: 0.43,
                                shadowRadius: 9.51,
                                backgroundColor: Colors.whiteColor,
                                borderRadius: (mobileW * 5) / 100,
                                elevation: 15,
                                width: mobileW * 90 / 100,
                                paddingBottom: mobileH * 2 / 100,
                                paddingTop: mobileH * 0.3 / 100,


                            }}>


                                <ImageBackground
                                    imageStyle={{
                                        borderRadius: (mobileW * 5) / 100,

                                        height: mobileH * 30 / 100,
                                        width: mobileW * 90 / 100,
                                        marginBottom: mobileH * 1 / 100,
                                    }}
                                    style={{
                                        borderRadius: (mobileW * 5) / 100,

                                        marginBottom: mobileH * 1 / 100,
                                        height: mobileH * 30 / 100,
                                        width: mobileW * 90 / 100,
                                    }}
                                    source={item.image}
                                >
                                
                                <View style={{
                            marginVertical: mobileH * 1 / 100,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'flex-end',
                            marginRight:mobileW*2/100,
                            width: mobileW * 15 / 100,
                            borderRadius: mobileW * 17.25 / 100,
                            backgroundColor: Colors.greyColor,
                            height: mobileH * 3.5 / 100
                        }}>
                            
                            <Text style={{

                                textAlign: 'center',
                                color: Colors.whiteColor,
                                fontFamily: Font.FontMedium,
                                fontSize: mobileW * 3.2 / 100,

                            }}>{"1/5"}</Text>
                        </View>
                                </ImageBackground>
                                <Text style={{

                                    textAlign: 'center',
                                    color: Colors.black_color,
                                    fontFamily: Font.FontSemiBold,
                                    fontSize: mobileW * 4 / 100,

                                }}>{item.title}</Text>

                            </TouchableOpacity>
                        }
                    >

                    </FlatList>
















                </KeyboardAwareScrollView>


            </SafeAreaView>
        )
    }
}
