import React, { ReactNode } from "react";

interface ForProps<T> {
  each: T[];
  children: (item: T, index: number) => ReactNode;
}

const For = <T,>({ each, children }: ForProps<T>) => {
  return (
    <>
      {each.map((item, index) => (
        <React.Fragment key={index}>{children(item, index)}</React.Fragment>
      ))}
    </>
  );
};

export default For;
