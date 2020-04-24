import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, Image, StatusBar } from 'react-native';
import styles from './style';
import sourceFlagBrazil from '../../assets/brazilFlag.png';

import api from '../../services/api';


export default function Main() {
    const [estados, setEstados] = useState([]);
    const [brazil, setBrazil] = useState([]);
    const [load, setLoad] = useState(false);
    var imagens = {
        "AC": require('../../assets/flags/AC.gif'), "AL": require('../../assets/flags/AL.gif'), "AM": require('../../assets/flags/AM.gif'), "AP": require('../../assets/flags/AP.gif'), "BA": require('../../assets/flags/BA.gif'), "CE": require('../../assets/flags/CE.gif'), "DF": require('../../assets/flags/DF.gif'), "ES": require('../../assets/flags/ES.gif'), "GO": require('../../assets/flags/GO.gif'), "MA": require('../../assets/flags/MA.gif'), "MG": require('../../assets/flags/MG.gif'), "MS": require('../../assets/flags/MS.gif'), "MT": require('../../assets/flags/MT.gif'),
        "PA": require('../../assets/flags/AC.gif'), "PB": require('../../assets/flags/PB.gif'), "PE": require('../../assets/flags/PE.gif'), "PI": require('../../assets/flags/PI.gif'), "PR": require('../../assets/flags/PR.gif'), "RJ": require('../../assets/flags/RJ.gif'), "RN": require('../../assets/flags/RN.gif'), "RO": require('../../assets/flags/RO.gif'), "RR": require('../../assets/flags/RR.gif'), "RS": require('../../assets/flags/RS.gif'), "SC": require('../../assets/flags/SC.gif'), "SE": require('../../assets/flags/SE.gif'), "SP": require('../../assets/flags/SP.gif'), "TO": require('../../assets/flags/TO.gif')
    };

    async function loadData() {
        const response = await api.get('/');
        setEstados(response.data.data);
        if (response) {
            setLoad(true);
        }
    }
    async function loadBrazil() {
        const response = await api.get('/brazil');
        setBrazil(response.data.data);
    }

    useEffect(() => {
        loadData();
        loadBrazil();
    }, []);
    if (load) {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#2A2A2A"
                />

                <View style={styles.header}>
                    <Text style={styles.textHeader}>Covid-19 Brasil</Text>
                    <Image source={sourceFlagBrazil} />
                </View>
                <Text style={styles.textHome}>{"#FicaEmCasa"}</Text>
                <View style={styles.cards}>
                    <View style={styles.card}>
                        <Text style={styles.textConfirmeds}>Confirmados</Text>
                        <Text style={styles.textConfirmeds}>{brazil.confirmed}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.textRecovered}>Recuperados</Text>
                        <Text style={styles.textRecovered}>{brazil.recovered}</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.textDeaths}>Óbitos</Text>
                        <Text style={styles.textDeaths}>{brazil.deaths}</Text>
                    </View>
                </View>
                <FlatList
                    data={estados}
                    style={styles.containerStates}
                    keyExtractor={item => String(item.uf)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: estado, index }
                    ) => (
                            <View style={styles.federativeState}>
                                <Image style={styles.flagState} source={imagens[estado.uf]}></Image>
                                <View style={styles.infoState}>
                                    <Text style={styles.titleState}>{estado.state}</Text>
                                    <Text style={styles.stateConfirmed}>Confirmados: {estado.cases}</Text>
                                    <Text style={styles.stateDeaths}>Óbitos: {estado.deaths}</Text>
                                </View>
                            </View>
                        )}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#2A2A2A"
                />

                <View style={styles.header}>
                    <Text style={styles.textHeader}>Covid-19 Brasil</Text>
                    <Image source={sourceFlagBrazil} />
                </View>
                <Text style={styles.textHome}>
                    Carregando dados
                </Text>
            </View>

        );

    }

}