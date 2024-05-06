import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = () => {
    const [rating, setRating] = useState(0); // Trạng thái đánh giá từ người dùng

    // Hàm để cập nhật đánh giá
    const handleRating = (value) => {
        setRating(value);
    };

    // Render danh sách các sao để người dùng đánh giá
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 10; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => handleRating(i)}>
                    <Icon
                        style={{marginHorizontal:3}}
                        name={i <= rating ? 'star' : 'star-o'}
                        size={20}
                        color={i <= rating ? 'orange' : '#A9A9A9'}
                    />
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {renderStars()}
        </View>
    );
};

export default StarRating;
