import React from "react";
import {log} from "../c0-helpers/debug";

type BackgroundPropsType = {}

const Background: React.FC<BackgroundPropsType> = ({children}) => {

    log("2 -- rendering Background");
    return (
        <div>
            {children}
        </div>
    );
};

export default Background;
