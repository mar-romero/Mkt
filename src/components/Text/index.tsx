import React from "react";

const sizeClasses = {
  txtMontserratMedium20: "font-medium font-montserrat",
  txtMontserratRomanBold16: "font-bold font-montserrat",
  txtMontserratMedium24: "font-medium font-montserrat",
  txtMontserratMedium2251: "font-medium font-montserrat",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtMontserratRomanBold24: "font-bold font-montserrat",
  txtMontserratRomanBold32: "font-bold font-montserrat",
  txtMontserratRegular20: "font-montserrat font-normal",
  txtMontserratRomanBold20: "font-bold font-montserrat",
  txtMontserratSemiBold24: "font-montserrat font-semibold",
  txtMontserratRomanBold4705: "font-bold font-montserrat",
  txtMontserratSemiBold20: "font-montserrat font-semibold",
  txtMontserratRegular16: "font-montserrat font-normal",
  txtMontserratRomanBold2814: "font-bold font-montserrat",
  txtInterBold20: "font-bold font-inter",
  txtMontserratRomanLight16: "font-light font-montserrat",
  txtMontserratRegular36: "font-montserrat font-normal",
  txtMontserratRegular15: "font-montserrat font-normal",
  txtMontserratRegular48: "font-montserrat font-normal",
  txtMontserratRegular24: "font-montserrat font-normal",
  txtMontserratRomanLight2251: "font-light font-montserrat",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
