import React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';


const MemberRegistered = ({route}) => {
    const {user} = route.params;

    return(
        <SafeAreaView>
            <Text style = {styles.title}>Kayıt Tamamlandı!</Text>
            <Text style = {styles.label}>Ad: {user.userName}</Text>
            <Text style = {styles.label}>Soyad: {user.userSurname}</Text>
            <Text style = {styles.label} >Yaş: {user.userAge}</Text>
            <Text style = {styles.label} >E-posta: {user.userMail}</Text>
            <Text style = {styles.label}>Telefon: {user.userPhone}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label: {
    fontWeight: '600',
    fontSize: 20,
    margin: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center"
    }
});

export default MemberRegistered;