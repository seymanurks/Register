import React, { useState } from 'react';
import { SafeAreaView, Text, Alert } from 'react-native';

import Input from '../components/input/Input';
import Button from '../components/button/Button';

const MemberSign = ({navigation}) => {
    const [userName, setUserName] = useState(null)
    const [userSurname, setUserSurname] = useState(null)
    const [userAge, setUserAge] = useState(null)
    const [userMail, setUserMail] = useState(null)
    const [userPhone, setUserPhone] = useState(null)

    function handleSubmit() {
        if( !userName || !userSurname || !userAge || !userMail || !userPhone) {
            Alert.alert("HATA", "Bilgiler boş bırakılamaz!")
            return;
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userPhone
        }
        navigation.navigate("MemberRegisteredScreen", {user})
    }

   return(
    <SafeAreaView>
        <Input label="Ad" placeholder="Adınızı girin.." onChangeText={setUserName}/>
        <Input label="Soyad" placeholder="Soyadınızı girin.." onChangeText={setUserSurname}/>
        <Input label="Yaş" placeholder="Yaşınızı girin.." onChangeText={setUserAge}/>
        <Input label="E-posta" placeholder="E-postanızı girin.." onChangeText={setUserMail}/>
        <Input label="Telefon" placeholder="Telefon numaranızı girin.." onChangeText={setUserPhone}/>

        <Button text = "Kayıt oluştur" onPress={handleSubmit}/>
    </SafeAreaView>
   ) 
}

export default MemberSign;