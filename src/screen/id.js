import React, {Component} from "react";
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
export default Id = ({navigation}) => {
  const info = useSelector((state) => state.userInfo);
    return(
        <ImageBackground
            source={require("../assets/image/backgroundimg1.png")}
            style={{width:'100%', height:'100%'}}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBox}>
                    <View style={styles.boxbackicon}>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
                            <Icon
                                name='chevron-left'
                                size={25}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Icon
                            name='circle-user'
                            size={70}
                            color={'white'}
                        />
                    </View>
                    <View>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={styles.row}>
                        <Text style={[styles.id, styles.column1]}>
                            ID:
                        </Text>
                        <Text style={[styles.number, styles.column2]}>
                            {info.userID}
                        </Text>
                        <View style={styles.boxIcon}>
                            <Icon
                                name='chevron-right'
                                size={25}
                                color={'white'}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.name, styles.column1]}>
                            Tên hiển thị:
                        </Text>
                        <Text style={[styles.textname, styles.column2]}>
                            {info.userName}
                        </Text>
                        <View style={styles.boxIcon}>
                            <Icon
                                name='chevron-right'
                                size={25}
                                color={'white'}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.password, styles.column1]}>
                            Mật khẩu:
                        </Text>
                        <Text style={[styles.passwordtext, styles.column2]}>
                            {info.passWord}
                        </Text>
                        <View style={styles.boxIcon}>
                            <Icon
                                name='chevron-right'
                                size={25}
                                color={'white'}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.email, styles.column1]}>
                            Email:
                        </Text>
                        <Text style={[styles.textEmail, styles.column2]}>
                            {info.email}
                        </Text>
                        <View style={styles.boxIcon}>
                            <Icon
                                name='chevron-right'
                                size={25}
                                color={'white'}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.date, styles.column1]}>
                            Ngày sinh:
                        </Text>
                        <Text style={[styles.textdate, styles.column2]}>
                            22/04/2003
                        </Text>
                        <View style={styles.boxIcon}>
                            <Icon
                                name='chevron-right'
                                size={25}
                                color={'white'}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.sex, styles.column1]}>
                            Giới tính:
                        </Text>
                        <Text style={[styles.textsex, styles.column2]}>
                            Nữ
                        </Text>
                        <View style={styles.boxIcon}>
                            <Icon
                                name='chevron-right'
                                size={25}
                                color={'white'}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    headerBox: {
        width: '100%',
        height: 75,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    user: {
        justifyContent: "center",
    },
    column1: {
        fontSize: 18,
        width: 120,
        color: "white",
    },
    info: {
        flexDirection: "column",
        marginTop: 65,
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 25,
    },
    column2: {
        flex: 1,
        fontSize: 18,
        justifyContent: 'flex-start',
        color: "white",
    },
    nextIcon: {
        position: "absolute",
    },
    backIcon: {
        position: "absolute",
    },
});
