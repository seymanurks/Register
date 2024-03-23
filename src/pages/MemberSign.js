import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Input from '../components/input/Input';
import Button from '../components/button/Button';

const MemberSign = () => {
   return(
    <SafeAreaView>
        <Input label="Ad" placeholder="Adınızı girin.."/>
        <Input label="Soyad" placeholder="Soyadınızı girin.."/>
        <Input label="Yaş" placeholder="Yaşınızı girin.."/>
        <Input label="E-posta" placeholder="E-postanızı girin.."/>
        <Input label="Telefon" placeholder="Telefon numaranızı girin.."/>

        <Button text = "Kayıt oluştur" onPress={null}/>
    </SafeAreaView>
   ) 
}

export default MemberSign;