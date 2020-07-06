import React from "react";
import s from "./App.module.css";
import {ForTest, log} from "../../../n0-common/c0-helpers/debug";
import Background from "../../../n0-common/c1-background/Background";

const App = () => {

    log("1 - rendering App");
    return (
        <div className={s.App}>
            <ForTest t={"app test"}/>

            <Background>X</Background>
        </div>
    );
};

export default App;
