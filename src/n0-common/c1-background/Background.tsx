import React from "react";
import {ForTest, log} from "../c0-helpers/debug";

type BackgroundPropsType = {
    forTest?: string
    type?: 0 // without Background
        | 1 // fill color
        | 2 // gradient fill
    backgroundColor?: string
}

const Background: React.FC<BackgroundPropsType> = (
    {
        forTest,
        children,
        type = 0,
        backgroundColor,

    }
) => {

    log("2 -- rendering Background");

    switch (type) {
        case 1: {
            return (
                <div style={{backgroundColor: backgroundColor}}>
                    <ForTest t={forTest + '1'}/>
                    {children}
                </div>
            );
        }
        default: { // 0
            return (
                <div>
                    <ForTest t={forTest}/>
                    {children}
                </div>
            );
        }
    }
};

export default Background;
