import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card'; 
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

    const { thumbnail_image, title, artist, image, url } = album;
    const { 
        headerTextContainerStyle, 
        headerThumbnailStyle,
        headerThumbnailContainerStyle,
        headerTextAlbumStyle,
        artworkImageStyle 
    } = styles; 

    return (
        <Card>
            <CardSection>
                <View style={headerThumbnailContainerStyle}>
                    <Image 
                        style={headerThumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerTextContainerStyle}>
                    <Text style={headerTextAlbumStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={artworkImageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Album
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerTextContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextAlbumStyle: {
        fontSize: 20
    },
    headerThumbnailStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    headerThumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    artworkImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
