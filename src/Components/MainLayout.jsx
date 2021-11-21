import React from 'react'
import Navbar from './Navbar';
import TopContainer from './TopContainer';
import Boxes from './Boxes';
import Info from './Info';
import Portfolio from './Portfolio';
import Footer from './Footer';

const MainLayout = () =>{
    return(
        <div className = 'grid gap-5 box-border text-dark font-general my-5 mx-10 leading-6'>
            <Navbar />
            <br />
            <TopContainer />
            <br />
            <Boxes />
            <br />
            <Info />
            <br />
            <Portfolio />
            <br />
            <Footer />
        </div>
    )
}

export default MainLayout;