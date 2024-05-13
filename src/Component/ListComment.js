import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    ScrollView,
    FlatList,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';

import styles from '../styles/stylesDetailMovie';
const ListComment = ({ data }) => {
    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };
    return (
        <View>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false} // Ẩn thanh lướt dọc
                showsHorizontalScrollIndicator={false} // Ẩn thanh lướt ngang
                renderItem={({ item, index }) => (
                    <View style={styles.CommentItem}>
                        <View style={styles.ItemInfor}>
                            <View style={styles.ItemLeft}>
                                <Icon
                                    name='circle-user'
                                    size={35}
                                    color={'white'}

                                />

                            </View>
                            <View style={styles.ItemRight}>
                                <View style={styles.ItemRightSub}>
                                    <Text style={styles.UserNameListCmt}>{` ${item.UserName}`}</Text>
                                </View>
                                <View style={styles.ItemRightSub}>
                                    <Text style={styles.UserRated}>{` ${item.UserRate}`}</Text>
                                    <Icon
                                        name='star'
                                        size={15}
                                        color={'orange'}

                                    />

                                </View>


                            </View>

                        </View>
                        <View style={styles.ItemCommentContent}>
                            <Text style={styles.textComment}>{shortenText(`${item.UserComment}`, 200)}</Text>

                        </View>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default ListComment 