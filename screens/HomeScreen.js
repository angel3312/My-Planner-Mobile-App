import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import colors from '../Colors'


const HomeScreen = () => {
    const navigation = useNavigation()

    //when user wants to sign out
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.emailText}>======== {auth.currentUser?.email} ========</Text>
            <Text style={styles.subText}>Let's Get Productive</Text>

            <TouchableOpacity //Daily Task Button
                onPress={() => navigation.navigate("To Do Task")}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Create Daily Task</Text>
            </TouchableOpacity>


            <TouchableOpacity //Sign Out Button
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>

        </View>
    )
}


export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightBlue,

    },
    welcomeText: {//Styling Welcome Text
        color: colors.darkGreen,
        fontWeight: '700',
        fontSize: 70,

    },
    emailText: {//Styling Email text that is logged in
        color: "#6c7c59",
        fontWeight: '700',
        fontSize: 20,
        marginTop: 10,

    },
    subText: {//Styling sub text
        color: colors.darkGreen,
        fontWeight: '600',
        fontSize: 30,
        marginTop: 30,
        marginBottom: 25,

    },
    button: {//Styling Sign out button
        backgroundColor: colors.darkGreen,
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 30,

    },
    buttonText: {//Styling button Text
        color: colors.white,
        fontWeight: '700',
        fontSize: 18,

    },

})