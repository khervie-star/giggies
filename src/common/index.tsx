import styled, {css} from 'styled-components/native';
import {Text, Image, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CommonProps} from './types';

export const IonIconHolder = ({name, size, color}: any) => {
  return (
    <IconHolder>
      <Ionicons name={name} color={color} size={size} />
    </IconHolder>
  );
};

export const IconHolder = styled.View`
  padding: 5px;
`;

export const Card = styled.View`
  background: white;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 12px;
  padding: 10px;
  display; flex;
  flex-direction: column;
  margin: 1em 0;
`;

export const Row = styled.View`
  display; flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
    ${({between, evenly, around, start, end, center}: CommonProps) =>
      between
        ? css`
            justify-content: space-between;
          `
        : evenly
        ? css`
            justify-content: space-evenly;
          `
        : around
        ? css`
            justify-content: space-around;
          `
        : start
        ? css`
            justify-content: flex-start;
          `
        : end
        ? css`
            justify-content: flex-end;
          `
        : center
        ? css`
            justify-content: center;
          `
        : css`
            justify-content: center;
          `}
`;

export const TextBody = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: #121212;
`;

export const SubText = styled.Text`
  color: #a9a9a9;
  font-size: 10px;
  padding: 2px;
`;
