import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import svgPaths from '../../utilities/svgPaths'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Header = ({ onBackPress, title, leftIcon, rightIcon, navigation }) => {
    const [notifications, setNotifications] = useState(null)

    useState(async () => {
        let notis = await AsyncStorage.getItem('notifications')
        notis = JSON.parse(notis);

        console.log("notisnotisnotisnotisnotisnotis :",notis);
        setNotifications(notis)
    })

    const OpenNotifications = () => {
        navigation.navigate('Notification')
    }

    return (
        <View style={styles.header}>
            {leftIcon ? (
                leftIcon
            ) : (
                <TouchableOpacity onPress={onBackPress} style={styles.backIconWrap}>
                    {svgPaths.backIcon}
                </TouchableOpacity>
            )}
            <Text style={styles.headerTitle}>{title}</Text>
            {rightIcon ? (
                <TouchableOpacity
                    onPress={() => {
                        OpenNotifications()
                    }}
                >{rightIcon}<Text>{notifications ? notifications.length : ''}</Text></TouchableOpacity>
            ) : (
                <View style={{ width: 20 }} />
            )}
        </View>
    )
}
