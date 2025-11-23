import React from "react";

interface ConditionalProps {
  condition: boolean;
  children: React.ReactNode;
}

export const Conditional: React.FC<ConditionalProps> = ({
  condition,
  children,
}) => {
  if (!condition) return null;
  return <>{children}</>;
};
