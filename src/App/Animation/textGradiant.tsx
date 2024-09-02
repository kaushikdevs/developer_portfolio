import React from "react";

interface TextGradiantInterface {
  text: string;
  from?: string;
  via?: string;
  to?: string;
  style?: any;
}

const TextGradiant: React.FC<TextGradiantInterface> = ({
  text,
  from,
  via,
  to,
  style,
}) => {
  const propsFrom = from || "from-primary_yellow";
  const propsVia = via || "via-primary_gold";
  const propsTo = to || "to-primary_pink";
  return (
    <text
      className={`block animate-text bg-gradient-to-r ${propsFrom} ${propsVia} ${propsTo} capitalize bg-clip-text text-transparent text-4xl font-black ${style} `}
    >
      {text}
    </text>
  );
};

export default TextGradiant;
