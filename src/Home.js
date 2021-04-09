import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ changeId }) => {
    let k=0;
    const shoesarray=[];
    const tilty = (e) => {
        const ab = e.target.style;
        ab.boxShadow = "5px 5px 15px #444";
    }
    const tilty1 = (e) => {
        const ab = e.target.style;
        ab.border = "0px";
        ab.boxShadow = "none";
    }
    for(let i=1;i<=9;i++) {
        shoesarray.push(<Link to="/product"><img className="img" onMouseLeave = {tilty1} onMouseEnter = {tilty} key={k++} onClick = {() => changeId(i)} src="https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dwdcaa39ce/images/Landing/men/SKX44314-2020-New-Site-Q2-Content-Grid_M_Athletic-Sneakers_232032-BLOR.jpg?sw=356" alt="img"/></Link>);
    }
    return (
        <div className="home">
            {shoesarray}
        </div>
    )
}

export default Home;