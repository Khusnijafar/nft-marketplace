import React, {useState} from 'react';
import {View, SafeAreaView, FlatList, Text} from 'react-native';

import {COLORS, NFTData} from '../constants';
import {NFTCard, HomeHeader, FocusedStatusBar} from '../components';

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = text => {
    if (text.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter(item => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });

    if (filteredData.length > 0) {
      setNftData(filteredData);
    } else {
      setNftData([]);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList
            data={nftData}
            renderItem={({item}) => <NFTCard data={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}>
          <View style={{height: 300, backgroundColor: COLORS.primary}} />
          <View style={{flex: 1, backgroundColor: COLORS.white}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
