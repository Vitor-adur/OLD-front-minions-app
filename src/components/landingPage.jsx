import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
 
class Landing extends Component {
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                       <a href="https://link.pipefy.com/ls/click?upn=wprfjg1SGgxHmHWvp6VU745P-2BxS9wfYDHJGHuWunSBszUIge54wPBd1XrDfrD7G2M8NX_hkEPCLXJWw5nEVxvNMzn90obY7U0K1na8uocOruM1h6kpTY6GWv8AF-2BbEIbg2ZoASzpBGPUWR2nQmHnBamkuEthtuVBGhB-2FXZOf024Ux9jXy5-2FZawzc-2Bst1ub6thMRoFN9zKSIKXMQg6oJo7W7Yvv3EeQExj-2Fo7ExIwpbrYMbCXZZgtcIPXjGOHTWDKFEugeq4LfbrutbhfNNvXZZ1rqZuzOIPA-2B75npaFBf4sWu5LE-3D">
                           <img 
                            src="https://minions-bgc-toys.s3.amazonaws.com/minion-icon-sfundo.png"
                            alt="avatar"
                            className="avatar-img"
                        /> </a>
                            {/*shop menu*/}

                        <div className="shop-menu-link">
                           <h1><Link to="/loja">Loja</Link></h1>
                          
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