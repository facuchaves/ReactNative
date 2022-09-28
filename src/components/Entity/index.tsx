import React from 'react';
import {Alert} from 'react-native';
import PropTypes from 'prop-types';
import EntityModel from '../../model/entity';
import styles from './styles';
import {AppearanceContext} from '../../context/Appearance.context';
import EntityUI from './ui';

const Entity = ({entity}: {entity: EntityModel}) => {
  const theme = React.useContext(AppearanceContext);
  const currentStyle = styles(theme);

  const clickEventListener = () => {
    Alert.alert('Success', 'Product has beed added to cart');
  };
  return (
    <EntityUI
      entity={entity}
      currentStyle={currentStyle}
      clickEventListener={clickEventListener}
    />
  );
};

Entity.propTypes = {
  entity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default Entity;
