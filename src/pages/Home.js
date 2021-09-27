import React from 'react';
import IntellectChart from '../components/IntellectChart';
import meridianImage from '../images/meridianHome.jpg';
import '../components/Home.css';

function Home () {
    return (
        <>
        <div>
            <center>
        <table  width="45%" border="1">
            <tr class="title">
                <td  height="19">
                <h2>Servers</h2>
                </td>
            </tr>
            <tr class="detail1">
                <td><img src="https://openmeridian.org/wp-content/uploads/2014/01/background-test-1.jpg"
                ClassName="img"/></td>
            </tr>
            <tr class="detail1">
                <td> <a>103  -   </a>
                    <a href="https://openmeridian.org/">
                    https://openmeridian.org/</a></td>
            </tr>
            <tr class="detail1">
                <td><img src="https://www.meridiannext.com/wp-content/uploads/2017/02/splash_resurgence-300x207.png" 
                ClassName="img"/></td>
            </tr>
            <tr class="detail1">
            <td> <a>105  -   </a>  
                    <a href="https://www.meridiannext.com/">
                    https://www.meridiannext.com/</a></td>
            </tr>
            <tr class="detail1">
                <td><img src="https://www.meridiannext.com/wp-content/uploads/2017/02/splash_resurgence-300x207.png" 
                ClassName="img"/></td>
            </tr>
            <tr class="detail1">
            <td> <a>112    -   </a>
                    <a href="https://www.meridian59.de/index_en.php">
                    https://www.meridian59.de/</a></td>
            </tr>
            <tr class="detail1">
                <td><img src="https://meridian59.us/images/115-logo.png" 
                ClassName="img"/></td>
            </tr>
            <tr class="detail1">
            <td> <a>420    -   </a>
                    <a href="https://meridian59.us/">
                    https://meridian59.us/</a></td>
            </tr>
            </table>
            </center>
        </div>
       
        </>
    );
}

export default Home;