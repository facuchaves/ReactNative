import React from 'react';
import {View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import EntityModel from '../../model/entity';

const logo = require('../../layout/logo.jpeg');

const EntityUI = ({
  entity,
  currentStyle,
  clickEventListener,
}: {
  entity: EntityModel;
  currentStyle: any;
  clickEventListener: () => void;
}) => (
  <View style={currentStyle.container}>
    <ScrollView>
      <View style={{alignItems: 'center', marginHorizontal: 30}}>
        <Image
          style={currentStyle.productImg}
          source={logo}
          // source={{
          //   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3v7KDJN7TAoJa5sFaPWcp1HX8JFcpF3z5K3ngz4L6kWoEP7Ca',
          // }}
        />
        <Text style={currentStyle.name}>{entity.name}</Text>
        <Text style={currentStyle.price}>$ {entity.score}</Text>
        <Text style={currentStyle.description}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec
        </Text>
      </View>
      <View style={currentStyle.starContainer}>
        <Image
          style={currentStyle.star}
          source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
        />
        <Image
          style={currentStyle.star}
          source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
        />
        <Image
          style={currentStyle.star}
          source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
        />
        <Image
          style={currentStyle.star}
          source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
        />
        <Image
          style={currentStyle.star}
          source={{uri: 'https://img.icons8.com/color/40/000000/star.png'}}
        />
      </View>
      <View style={currentStyle.contentColors}>
        <TouchableOpacity
          style={[currentStyle.btnColor, {backgroundColor: '#00BFFF'}]}
        />
        <TouchableOpacity
          style={[currentStyle.btnColor, {backgroundColor: '#FF1493'}]}
        />
        <TouchableOpacity
          style={[currentStyle.btnColor, {backgroundColor: '#00CED1'}]}
        />
        <TouchableOpacity
          style={[currentStyle.btnColor, {backgroundColor: '#228B22'}]}
        />
        <TouchableOpacity
          style={[currentStyle.btnColor, {backgroundColor: '#20B2AA'}]}
        />
        <TouchableOpacity
          style={[currentStyle.btnColor, {backgroundColor: '#FF4500'}]}
        />
      </View>
      <View style={currentStyle.contentSize}>
        <TouchableOpacity style={currentStyle.btnSize}>
          <Text>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={currentStyle.btnSize}>
          <Text>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={currentStyle.btnSize}>
          <Text>L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={currentStyle.btnSize}>
          <Text>XL</Text>
        </TouchableOpacity>
      </View>
      <View style={currentStyle.separator} />
      <View style={currentStyle.addToCarContainer}>
        <TouchableOpacity
          style={currentStyle.shareButton}
          onPress={() => clickEventListener()}>
          <Text style={currentStyle.shareButtonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);

EntityUI.propTypes = {
  entity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default EntityUI;
