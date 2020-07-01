import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
 
class Landing extends Component {
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://lh3.googleusercontent.com/proxy/HwWLVhmykYnzI2iBcKTqJMRO322_Z6UVhDsDrI2yZh8C8Uvk3k700EGNeMvAuYzy-kIOBWDGiSMKx0sPji-3weWTq9ri4eosZkWzev0HPe1GCWM71tnOs6KN"
                            alt="avatar"
                            className="avatar-img"
                        />
                            {/*shop menu*/}

                        <div className="shop-menu">
                           <p1><Link to="/loja">Loja</Link></p1>
                          
                        </div>

                        <div className="banner-text">
                            <h1>compre agora os brinquedos dos personagens mais engraçados do cinema</h1>

                            <hr/>

                        <p> Assista agora o trailer de <span className="trailer-title">Minions: The Rise of Gru!</span> Com lançamento marcado para julho de 2021 </p>

                    <div className="social-links">

                        {/* Instagram*/}
                        <a href="https://www.instagram.com/minions/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </a>

                        {/* Facebook*/}
                        <a href="https://pt-br.facebook.com/minions/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook-square" aria-hidden="true" />
                        </a>

                         {/* Twitter*/}
                         <a href="https://twitter.com/despicableme" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter-square" aria-hidden="true" />
                        </a>

                         {/* YouTube*/}
                         <a href="https://www.youtube.com/watch?v=pN1HNkoL2QA" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-youtube-square" aria-hidden="true" />
                        </a>

                    </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;