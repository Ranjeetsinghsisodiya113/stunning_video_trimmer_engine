import React, { Component, useRef } from 'react'
import { View, Text, SafeAreaView, StatusBar, ImageBackground, Image, TouchableOpacity, TextInput, BackHandler, Alert, Keyboard } from 'react-native'

import { config, msgProvider, localStorage, apifuntion, msgText, msgTitle, consolepro, Lang_chg, Font, Colors, mobileH, mobileW, localimag, notification } from './Provider/utilslib/Utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native';
export default class ImagesViewAll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otpText: '',
            otp: '',
            user_id: 0,
            showbtn: true,
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
            
        }
    }
    componentDidMount() {
        consolepro.consolelog('Iam Hobby page ')
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

                    showsVerticalScrollIndicator={false}>
                    <View
                    style={{
                        width:mobileW*90/100,
                        alignSelf:'center',
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between'
                    }}
                    >

                    
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.goBack() }}
                        style={{
                            
                            width: mobileW * 20 / 100,
                            height: (mobileH * 10) / 100,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Image
                            style={{

                                height: mobileW * 5 / 100,
                                width: mobileW * 5 / 100,
                                resizeMode: 'contain'
                            }}
                            source={localimag.blackback}
                        ></Image>
                    </TouchableOpacity>
                    
                    <Text style={{
                        color: Colors.black_color,
                        fontFamily: Font.FontBold,
                        fontSize: mobileW * 5 / 100,
                       
                    }}>{Lang_chg.Images_txt[config.language]}</Text>
                    
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
                                        source={localimag.GalleryGradientIcon}
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
                                        source={localimag.EditGradientIcon}
                                    ></Image>
                                </TouchableOpacity>
                            </View>
                    </View>
                    {/* .....................Text input............... */}


                   
                    <FlatList
                            contentContainerStyle={{alignSelf:'center', marginTop: mobileH * 2 / 100 }}
                            numColumns={4}
                            data={this.state.picturesArray}
                            renderItem={({ item, index }) =>
                            <Image
                            style={{

                                marginRight: mobileW * 4 / 100,
                                marginBottom: mobileW * 4 / 100,
                                width: (mobileW * 19) / 100,
                                height: (mobileW * 19) / 100,
                                borderRadius: mobileW * 3 / 100

                            }}
                           
                            source={item.image}

                        >

                        </Image>
                                    }>


                                        
                                    </FlatList>










                </KeyboardAwareScrollView>
                
            </SafeAreaView>
        )
    }
}
