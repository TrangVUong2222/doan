import React,{Component} from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity

} from 'react-native'

export const Succeded =()=>{
    return (
        <View style = {StyleSheet.Box}>
            <Text>
                Dang ki thanh cong!
            </Text>
        </View>
    )

}


export const UnSucceded =()=>{
    return(
        <View>
            <Text>Dang ky khong thanh cong!</Text>
        </View>
    )
}


export const SignInRequired =()=>{
    return (
        <View>
            <Text>
                Ban can dang  nhap de su dung chuc nang nay.
            </Text>
            <View>
                <TouchableOpacity>
                    <View>
                        <Text>Dang nhap</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
