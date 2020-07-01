import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu } from 'react-mdl';
import { Link } from 'react-router-dom';

class Loja extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            activeTab: 0 
        };

        this.toggleCategories = this.toggleCategories.bind(this);
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
                        <CardText style={{color: 'red', fontSize: 17}}>
                           Boneco de pelúcia minion Carl
                           <strong> R$69,90</strong>
                        </CardText>
                        <CardActions border>
                        <Link to='/reserva'> Reservar</Link>       

                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card> 
                    {/*card 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height:'176px', background: 'url(https://www.extra-imagens.com.br/brinquedos/BonecosdeBrinquedos/minions-meu-malvado-favorito/3591526/64814277/Pelucia-Minion-Meu-Malvado-Favorito-Toyng-Universal-com-Luz-e-Som-3591526.jpg) center / cover'}}></CardTitle>
                        <CardText style={{color: 'red', fontSize: 17}}>
                           Boneco de pelúcia minion Dave
                           <strong> R$79,90</strong>
                        </CardText>
                        <CardActions border>
                            <Link to='/reserva'> Reservar</Link>
                            
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
                        <Link to='/reserva'> Reservar</Link>       
                        
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
                        <Link to='/reserva'> Reservar</Link>       
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
                      <Link to='/reserva'> Reservar</Link>                               
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card> 
                {/*card 2*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height:'176px', background: 'url(https://katycraft.com/wp-content/uploads/2019/10/12pcs-lot-12-style-for-Minion-Miniature-Figurines-Toys-Cute-Lovely-Model-Kids-Toys-PVC-Anime-1.jpg) center / cover'}}></CardTitle>
                    <CardText style={{color: 'red', fontSize: 17}}>
                       Miniaturas Minions 12 peças
                       <strong> R$125,90</strong>
                    </CardText>
                    <CardActions border>
                        <Link to='/reserva'> Reservar</Link>       
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
                        <Link to='/reserva'> Reservar</Link>                              
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
                        <Link to='/reserva'> Reservar</Link>       
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
        return (
            <div className="category-tabs"> 
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
        )
    }
}

export default Loja;