import React, {Fragment} from 'react';
import { HelloContainer } from "../containers/HelloContainer";
import { Hooks } from "../components/Hooks";

const Home = function() {

    return (
        <Fragment>
            <HelloContainer />
            <Hooks />
        </Fragment>
    );
}

export default Home;