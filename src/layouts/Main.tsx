import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};

export default Main;
