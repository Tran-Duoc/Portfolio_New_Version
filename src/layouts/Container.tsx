import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
};

export default Container;
