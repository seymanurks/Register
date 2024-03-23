import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import Input from '../components/input/Input';
import Button from '../components/button/Button';

const MemberSign = () => {
    const [userName, setUserName] = useState("")
    const [userSurname, setUserSurname] = useState("")
    const [userAge, setUserAge] = useState("")
    const [userMail, setUserMail] = useState("")
    const [userPhone, setUserPhone] = useState("")

    function handleSubmit() {
        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userPhone
        }
        console.log(user)
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