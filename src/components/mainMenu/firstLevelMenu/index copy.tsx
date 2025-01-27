import React from "react";

type Props = {
  data: any;
};

const FirstLevelMenu: React.FC = ({ data }: Props) => {
  const list = Array.isArray(data?.children) ? data.children : [];

  return <div></div>;
};

export default FirstLevelMenu;
