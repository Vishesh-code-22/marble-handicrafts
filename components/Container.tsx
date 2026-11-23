import { CSSProperties, HTMLAttributes, ReactNode } from "react";

// A container that takes html from other components and acts as a parent for width management
// I want to be able to pass a background and it's styling and handle them here

type ContainerProps = {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
};
export default function Container({
    children,
    style,
    className,
}: ContainerProps) {
    return (
        <div style={style} className={className}>
            <div className="mx-auto w-7xl">{children}</div>
        </div>
    );
}
