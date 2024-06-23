import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { StarSvg } from '../../../../../../assets/svg';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles } from '../../../../../styles';

interface StarRatingProps {
    initialRating: number;
    maxRating?: number;
    widht?: number;
    Height?: number;
    onRatingChange?: (rating: number) => void;
    disabled?: boolean
}

const Rating: React.FC<StarRatingProps> = ({ initialRating, maxRating = 5, onRatingChange, disabled, widht, Height }) => {
    const [rating, setRating] = React.useState(initialRating);

    const handleRating = (index: number) => {
        setRating(index + 1);
        if (onRatingChange) {
            onRatingChange(index + 1);
        }
    };

    return (
        <View style={styles.container}>
            {[...Array(maxRating)].map((_, index) => (
                <TouchableOpacity key={index} onPress={() => handleRating(index)} disabled={disabled}>
                    <StarSvg
                        width={moderateScale(widht ? widht : 12)}
                        height={moderateScale(Height ? Height : 10)}
                        fillColor={index < rating ? '#FFD700' : '#D3D3D3'}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...commonStyles.RowJFSAC
    },
});

export default React.memo(Rating);
