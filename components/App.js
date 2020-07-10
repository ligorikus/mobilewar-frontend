import React from 'react';
import { Text, View } from 'react-native';

const Projects = props => {
    const { classes, match } = props;

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Hello, Andrey!</Text>
        </View>
    );
};


export default Projects;