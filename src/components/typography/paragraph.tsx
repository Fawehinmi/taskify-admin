import React from "react";

interface IProps {
  children?: React.ReactNode;
  content?: string;
  type: "Paragraph" | "Header";
}

export const ApText = () => {
  return <div>paragraph</div>;
};
