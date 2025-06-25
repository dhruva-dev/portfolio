import { JSX } from "react";

enum TypographyType {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    subtitle1 = "subtitle1",
    subtitle2 = "subtitle2",
    body1 = "body1",
    body2 = "body2",
    default = "default"
}

interface TypographyProps {
    variant: keyof typeof TypographyType;
    component?: keyof JSX.IntrinsicElements;
    children: React.ReactNode 
}

const typographyComponent: Record<TypographyType, string> = {
    [TypographyType.h1]: "h1",
    [TypographyType.h2]: "h2",
    [TypographyType.h3]: "h3",
    [TypographyType.h4]: "h4",
    [TypographyType.h5]: "h5",
    [TypographyType.h6]: "h6",
    [TypographyType.subtitle1]: "h3",
    [TypographyType.subtitle2]: "h4",
    [TypographyType.body1]: "p",
    [TypographyType.body2]: "p",
    [TypographyType.default]: "p"
};

const typographyClasses: Record<TypographyType, string> = {
    [TypographyType.h1]: "text-4xl sm:text-5xl font-bold leading-tight",
    [TypographyType.h2]: "text-3xl sm:text-4xl font-semibold leading-snug",
    [TypographyType.h3]: "text-2xl sm:text-3xl font-semibold leading-snug",
    [TypographyType.h4]: "text-xl sm:text-2xl font-medium leading-snug",
    [TypographyType.h5]: "text-lg sm:text-xl font-medium leading-snug",
    [TypographyType.h6]: "text-base sm:text-lg font-medium leading-snug",
    [TypographyType.subtitle1]: "text-sm sm:text-base font-semibold text-gray-700",
    [TypographyType.subtitle2]: "text-xs sm:text-sm font-semibold text-gray-600",
    [TypographyType.body1]: "text-sm sm:text-base font-normal text-gray-800",
    [TypographyType.body2]: "text-xs sm:text-sm font-normal text-gray-700",
    [TypographyType.default]: "text-sm sm:text-base font-normal text-gray-800"
};


export default function Typography({ variant = TypographyType.default, component, children }: TypographyProps) {
    const Component = component || (typographyComponent[variant] as  keyof JSX.IntrinsicElements);
    return <Component className={typographyClasses[variant]}>{children}</Component>
}