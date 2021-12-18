import React from "react";
import Common from "./Common";
import Service from "./Service";
import web from '../src/images/img1.svg'

const Home =() => {
    return (
        <>
            <Common 
            name="Grow your business" 
            imgsrc = {web} 
            visit = "/servics" 
            btname = "Get Started" />
        </>
    );
};

export default Home;