import React from 'react';
import {View, Image, Text} from 'react-native';
import {Card, Row, TextBody, SubText, IonIconHolder} from '../../../common';
import {ProductCardTitle, ProductCardSubTitle} from './styles';

export const ProductCard = () => {
  return (
    <Card>
      <Image
        style={{height: 120, width: '100%'}}
        source={require('../../../../assets/illustrations/circle.png')}
      />
      <ProductCardTitle>Corn</ProductCardTitle>
      <ProductCardSubTitle>Corn</ProductCardSubTitle>
      <Row between>
        <Row start>
          <TextBody>4.7</TextBody>
          <IonIconHolder name="star" color="#FFA534" size={14} />
          <SubText>67 ratings</SubText>
        </Row>
        <Row end>
          <IonIconHolder name="location-outline" size={14} />
          <TextBody>3.6km</TextBody>
        </Row>
      </Row>
    </Card>
  );
};
