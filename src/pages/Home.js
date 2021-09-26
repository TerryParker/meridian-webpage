import React from 'react';
import IntellectChart from '../components/IntellectChart';
import meridianImage from '../images/meridianHome.jpg';
import '../components/Home.css';

function Home () {
    return (
        <>
        <div>
            <center>
            <img src={meridianImage} ClassName="img"/>
            </center>
            <div>
                <IntellectChart/>
            </div>
        </div>
       
        </>
    );
}

export default Home;