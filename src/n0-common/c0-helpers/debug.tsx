import React from "react";

const isDevVersion = true;

export const log = (value: string) => {
    if (isDevVersion) console.log(value)
};

export const ForTest: React.FC<{ t?: string }> = ({t}) => {
    if (isDevVersion)
        return <div style={{display: "none"}}>{t}</div>;
    else
        return null;
};
