import * as React from 'react';

export const navigationRef = React.createRef<any>();

export const navigate = (name: String, params: any) => {
  navigationRef.current?.navigate(name, params);
};
