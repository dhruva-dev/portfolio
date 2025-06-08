import React, { ReactNode } from 'react'

interface Props {
    text: string;
    children: ReactNode;
}

export default function Tooltip({ text, children }: Props) {
    return (
        <>
            <div className="tooltip tooltip-bottom">
                <div className="tooltip-content">
                    <div className="animate-bounce text-lg">{text}</div>
                </div>
                {children}
            </div>
        </>
    )
}
