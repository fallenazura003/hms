import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";

const Random = () => {
    return (
        <div className={'flex'}>
            <Sidebar/>
            <div className={'w-full flex flex-col'}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Random;