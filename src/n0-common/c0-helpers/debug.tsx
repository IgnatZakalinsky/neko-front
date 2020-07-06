import React from "react";

const dev = true;

export const log = (value: string) => {
    if (dev) console.log(value)
};

export const ForTest: React.FC<{ t: string }> = ({t}) => {
    if (dev)
        return <div style={{display: "none"}}>{t}</div>;
    else
        return null;
};
