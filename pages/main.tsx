import * as React from 'react';
import { View, Image, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { FormattedMessage, useIntl } from 'react-intl';

import { get_font_family } from '../fonts/get_font_family';
import { font_styles } from '../fonts/fonts_style';
import { main_styles } from './main_style';

import Main_Coupon from './main_coupon';
import { formatDiagnostic } from 'typescript';

export default function MainPage({navigation}){
    const intl = useIntl();


    const [search_key, setSearchKey] = React.useState("");

    return (
        <View style={main_styles.container}>

            <View style={main_styles.header}>
                <Image 
                    style={main_styles.selection_image} 
                    source={require('../assets/main/selection.svg')} />
                <Image
                    style={main_styles.couponGo_image} 
                    source={require('../assets/main/couponGo.svg')} />
                <Image
                    style={main_styles.notification_image} 
                    source={require('../assets/main/notification.svg')} />
            </View>

            <View style={main_styles.body}>
                <View style={main_styles.base_container}>
                    <View style={main_styles.body_base}>
                        <View style={main_styles.base_left}>
                            <Image 
                            style={main_styles.base_left_image}
                            source={require('../assets/main/base_left.svg')}
                            />
                        </View>
                        <View style={main_styles.base_right}>
                            <Image 
                                style={main_styles.base_right_image}
                                source={require('../assets/main/base_right.svg')}
                            />
                        </View>
                    </View>

                </View>

                <View style={main_styles.body_main}>
                    <View style={main_styles.body_main_image_container}>
                        <Image
                            style={main_styles.body_main_image}
                            source={require('../assets/main/cat.svg')}
                        />
                    </View>
                    <View style={main_styles.body_main_content_container}>
                        <View style={[main_styles.body_main_header, main_styles.body_main_items]}>
                            <View style={main_styles.body_coupon_text_container}>
                                <Text style={[
                                    main_styles.body_find_coupon_text, 
                                    { fontFamily: get_font_family('zh-2', 'en-1') },
                                    font_styles.large,
                                    font_styles.italic,
                                    font_styles.bold
                                ]}>
                                    <FormattedMessage id='main_find_coupon'/>
                                </Text>

                                <Text style={[
                                    main_styles.body_find_coupon_text, 
                                    { fontFamily: get_font_family('zh-2', 'en-1') },
                                    font_styles.large,
                                    font_styles.italic,
                                    font_styles.bold
                                ]}>
                                    <FormattedMessage id='main_find_coupon2'/>
                                </Text>
                            </View>
                            <View style={main_styles.body_topRight_image_container}>
                                <Image 
                                    style={main_styles.body_topRight_image}
                                    source={require('../assets/main/profile.svg')}
                                />
                            </View>
                        </View>
                        <View style={[main_styles.body_main_search_box, main_styles.body_main_items]}>
                            <View style={main_styles.search_box_container}>
                                <Image 
                                    style={main_styles.search_image}
                                    source={require('../assets/main/search_image.svg')}
                                />
                                <View style={main_styles.search_box_text_container}>
                                    <TextInput 
                                        style={main_styles.search_text_box}
                                        value={search_key}
                                        placeholder = {intl.formatMessage({ id: 'main_search_coupon' })}
                                        onChangeText={search_key => {
                                        setSearchKey(search_key);
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[main_styles.body_main_route, main_styles.body_main_items]}>
                            <View style={main_styles.body_main_route_items}>
                                <Image 
                                    style={main_styles.route_images}
                                    source={require('../assets/main/route_image_1.svg')}
                                />
                                <Text style={[
                                    {fontFamily: get_font_family("zh-1", "en-1")},
                                    font_styles.small
                                ]}>
                                    <FormattedMessage id='main_classification'/>    
                                </Text>
                            </View>
                            <View style={main_styles.body_main_route_items}>
                                <Image 
                                    style={main_styles.route_images}
                                    source={require('../assets/main/route_image_2.svg')}
                                />
                                <Text style={[
                                    {fontFamily: get_font_family("zh-1", "en-1")},
                                    font_styles.small
                                ]}>
                                    <FormattedMessage id='main_locate'/>    
                                </Text>
                            </View>
                            <View style={main_styles.body_main_route_items}>
                                <Image 
                                    style={main_styles.route_images}
                                    source={require('../assets/main/route_image_3.svg')}
                                />
                                <Text style={[
                                    {fontFamily: get_font_family("zh-1", "en-1")},
                                    font_styles.small
                                ]}>
                                    <FormattedMessage id='main_most_popular'/>    
                                </Text>                                
                            </View>
                            <View style={main_styles.body_main_route_items}>
                                <Image 
                                    style={main_styles.route_images}
                                    source={require('../assets/main/route_image_4.svg')}
                                />
                                <Text style={[
                                    {fontFamily: get_font_family("zh-1", "en-1")},
                                    font_styles.small
                                ]}>
                                    <FormattedMessage id='main_most_common'/>    
                                </Text>

                            </View>
                        </View>
                        <View style={[main_styles.body_main_content, main_styles.body_main_items]}>
                            <View style={main_styles.body_main_separator}></View>
                            <View style={main_styles.body_main_coupons_header}>
                                <Text style={[
                                    {fontFamily: get_font_family("zh-1", "en-1")},
                                    font_styles.medium
                                ]}> 
                                    <FormattedMessage id='main_popular_items'/>    
                                </Text>
                                <Text style={[
                                    {fontFamily: get_font_family("zh-1", "en-1"),
                                    color: "#7F87AA"
                                    },
                                    font_styles.medium
                                ]}> 
                                    <FormattedMessage id="main_view_all"/>
                                </Text>
                            </View>
                            <View style={main_styles.body_main_coupons_container}>
                                <Main_Coupon navigation={navigation}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[main_styles.bottom]}>
                <View style={[main_styles.bottom_items]}>
                    <Image 
                        style={[main_styles.bottom_image]}
                        source={require('../assets/main/bottom_icon_1.svg')}
                    />
                    <Text style={[
                        main_styles.bottom_text,
                        {fontFamily: get_font_family("zh-1", "en-1")},
                        font_styles.small,
                        font_styles.bold
                        ]}> 
                        <FormattedMessage id="main_bottom_text_1"/>
                    </Text>
                </View>   
                <View style={[main_styles.bottom_items]}>
                    <Image 
                        style={[main_styles.bottom_image]}
                        source={require('../assets/main/bottom_icon_2.svg')}
                    />
                    <Text style={[
                        main_styles.bottom_text,
                        {fontFamily: get_font_family("zh-1", "en-1")},
                        font_styles.small,
                        font_styles.bold
                        ]}> 
                        <FormattedMessage id="main_bottom_text_2"/>
                    </Text>    
                </View>   
                <View style={[main_styles.bottom_items]}>
                    <View style={main_styles.bottom_image}>
                        <Image 
                            style={[main_styles.bottom_center_image]}
                            source={require('../assets/main/bottom_icon_cat.svg')}
                        />
                    </View>
                    <Text style={[
                        main_styles.bottom_text,
                        {fontFamily: get_font_family("zh-1", "en-1")},
                        font_styles.small,
                        font_styles.bold
                        ]}> 
                        <FormattedMessage id="main_bottom_text_3"/>
                    </Text>    
                </View>   
                <View style={[main_styles.bottom_items]}>
                    <Image 
                        style={[main_styles.bottom_image]}
                        source={require('../assets/main/bottom_icon_3.svg')}
                    />
                    <Text style={[
                        main_styles.bottom_text,
                        {fontFamily: get_font_family("zh-1", "en-1")},
                        font_styles.small,
                        font_styles.bold
                        ]}> 
                        <FormattedMessage id="main_bottom_text_4"/>
                    </Text>    
                </View>    
                <View style={[main_styles.bottom_items]}>
                    <Image 
                        style={[main_styles.bottom_image]}
                        source={require('../assets/main/bottom_icon_4.svg')}
                    />
                    <Text style={[
                        main_styles.bottom_text,
                        {fontFamily: get_font_family("zh-1", "en-1")},
                        font_styles.small,
                        font_styles.bold
                        ]}>                         
                        <FormattedMessage id="main_bottom_text_5"/>
                     </Text>    
                </View>   
            </View>
        </View>
    )
}

