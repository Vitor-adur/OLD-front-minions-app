import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu } from 'react-mdl';

import 
    EmailForm
 from './emailform'


class Loja extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            activeTab: 0,
            openReserve: false,
            reserve: ''
        };

        this.toggleCategories = this.toggleCategories.bind(this);
        this.openReserve = this.openReserve.bind(this);
        this.closeReserve = this.closeReserve.bind(this)
    }

    openReserve(order) {
        this.setState({
            openReserve: true,
            reserve: order
        })
    }

    closeReserve() {
        this.setState({
            openReserve: false
        })
    }

    toggleCategories() {
        const  {
            activeTab
        } = this.state

        switch(activeTab) {
            case 0:
                return(
                    <div className="loja-grid">
                        {/*card 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height:'176px', background: 'url(https://mundotoys.com.br/wp-content/uploads/2020/04/minion1.png) center / cover'}}></CardTitle>
                        <CardText name="pelucia_minion_carl"style={{color: 'red', fontSize: 17}}>
                           Boneco de pelúcia minion Carl
                           <strong> R$69,90</strong>
                        </CardText>
                        <CardActions border>
                            <div onClick={() => this.openReserve('Boneco de pelúcia minion Carl, COD: 1234_01')} className="reserve--button">
                                Reservar
                            </div>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card> 
                    {/*card 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height:'176px', background: 'url(https://www.extra-imagens.com.br/brinquedos/BonecosdeBrinquedos/minions-meu-malvado-favorito/3591526/64814277/Pelucia-Minion-Meu-Malvado-Favorito-Toyng-Universal-com-Luz-e-Som-3591526.jpg) center / cover'}}></CardTitle>
                        <CardText name="davepelucia" style={{color: 'red', fontSize: 17}}>
                           Boneco de pelúcia minion Dave
                           <strong> R$79,90</strong>
                        </CardText>
                        <CardActions border>
                        <div onClick={() => this.openReserve('Boneco de pelúcia minion Dave, COD: 1234_02')} className="reserve--button">
                                Reservar
                            </div>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card> 
                    </div>
                )
            case 1:
                return(
                    <div className="loja-grid">
                    {/*card 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height:'176px', background: 'url(https://i.ytimg.com/vi/cfw4mSOYZ0s/maxresdefault.jpg) center / cover'}}></CardTitle>
                    <CardText style={{color: 'red', fontSize: 17}}>
                       Lego Minions - Laboratório do Gru
                       <strong> R$54,90</strong>
                    </CardText>
                    <CardActions border>
                    <div onClick={() => this.openReserve('Lego Minions - Laboratório do Gru, COD: 1234_03')} className="reserve--button">
                                Reservar
                            </div>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card> 
                {/*card 2*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height:'176px', background: 'url(https://i.ytimg.com/vi/LPBlZTRLfPY/maxresdefault.jpg) center / cover'}}></CardTitle>
                    <CardText style={{color: 'red', fontSize: 17}}>
                    Lego Minions - Acampamento 
                       <strong> R$59,90</strong>
                    </CardText>
                    <CardActions border>
                    <div onClick={() => this.openReserve('Lego Minions - Acampamento , COD: 1234_04')} className="reserve--button">
                                Reservar
                            </div>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card> 
                </div>
                )
            case 2:
                return(
                    <div className="loja-grid">
                    {/*card 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height:'176px', background: 'url(https://images-americanas.b2w.io/produtos/01/00/img/1768467/6/1768467644_1SZ.jpg) center / cover'}}></CardTitle>
                    <CardText style={{color: 'red', fontSize: 17}}>
                       Minions Kit Clássico 5 figuras
                       <strong> R$199,90</strong>
                    </CardText>
                    <CardActions border>
                    <div onClick={() => this.openReserve('Minions Kit Clássico 5 figuras , COD: 1234_05')} className="reserve--button">
                                Reservar
                            </div>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card> 
                {/*card 2*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height:'176px', background: 'url(https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ9kL4Da_rxVPz7mpp2EsEb8hajiJfDs7h7aygcrPmpV3uAmt5Jnql7o594PdVdbajdhKb6wkZVbw&usqp=CAc) center / cover'}}></CardTitle>
                    <CardText style={{color: 'red', fontSize: 17}}>
                    Minions Mineez 6 peças Sortidas
                       <strong> R$25,90</strong>
                    </CardText>
                    <CardActions border>
                    <div onClick={() => this.openReserve('Miniaturas Mineez 6 peças Sortidas, COD: 1234_06')} className="reserve--button">
                                Reservar
                            </div>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card> 
                </div>
                )
            case 3:
                return(
                    <div className="loja-grid">
                    {/*card 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height:'176px', background: 'url(https://ae01.alicdn.com/kf/HTB1zxQ5KFXXXXbkaXXXq6xXFXXX1/Capa-de-edred-o-Set-Rainha-Azul-Amarelo-Minions-roupa-de-Cama-3-pcs-100-algod.jpg) center / cover'}}></CardTitle>
                    <CardText style={{color: 'red', fontSize: 17}}>
                       Minions Kit Roupa de Cama
                       <strong> R$299,90</strong>
                    </CardText>
                    <CardActions border>
                    <div onClick={() => this.openReserve('Minions Kit Roupa de Cama , COD: 1234_07')} className="reserve--button">
                                Reservar
                            </div>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card> 
                {/*card 2*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height:'176px', background: 'url(https://cdn1.omeuwebsite.com/users/kidspalace/catalog/5991328323283-405.jpg) center / cover'}}></CardTitle>
                    <CardText style={{color: 'red', fontSize: 17}}>
                       Miniaturas Pijama Infantil Modelos
                       <strong> R$55,90</strong>
                    </CardText>
                    <CardActions border>
                    <div onClick={() => this.openReserve('Pijama Infantil Modelos , COD: 1234_08')} className="reserve--button">
                                Reservar
                            </div>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card> 
                </div>
                )
            default:
                return(
                    <div><h1>Something wrong</h1></div>
                )
        }
    }

    render(){
        const {
            openReserve,
            reserve
        } = this.state

        return (
            <div className="shop">
                {
                    openReserve ? <div> <EmailForm reserve={reserve} /> <div className="close-reserve" onClick={this.closeReserve}> x </div> </div> :
                    <div>
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState ({ activeTab: tabId})} ripple>
                        <Tab>Pelúcias</Tab>
                        <Tab>Lego</Tab>
                        <Tab>Miniaturas</Tab>
                        <Tab>Diversos</Tab>
                        </Tabs>

                            <Grid>
                            <Cell col={12}>
                                <div className="content">{this.toggleCategories()}</div> 
                                </Cell>
                            </Grid>
                    </div>
                }             
            </div>            
        )
    }
}

export default Loja;