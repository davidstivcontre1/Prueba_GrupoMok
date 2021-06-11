import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


class Movies extends Component {

    state={
        abierto: false,
        abierto1: false,
        abierto2: false,
        abierto3: false,
        abierto4: false,
        abierto5: false,
        abierto6: false,
        abierto7: false,
        abierto8: false,
        abierto9: false,
        abierto10: false,
        abierto11: false,
        abierto12: false,
        abierto13: false,
        abierto14: false,
        abierto15: false,
        abierto16: false,
        abierto17: false,
        abierto18: false,
        abierto19: false,
        abierto20: false,
        abierto21: false,
        abierto22: false,
        abierto23: false,
    }

    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto})
    }
    abrirModal1=()=>{
        this.setState({abierto1: !this.state.abierto1})
    }    
    abrirModal2=()=>{
        this.setState({abierto2: !this.state.abierto2})
    }
    abrirModal3=()=>{
        this.setState({abierto3: !this.state.abierto3})
    }
    abrirModal4=()=>{
        this.setState({abierto4: !this.state.abierto4})
    }
    abrirModal5=()=>{
        this.setState({abierto5: !this.state.abierto5})
    }
    abrirModal6=()=>{
        this.setState({abierto6: !this.state.abierto6})
    }
    abrirModal7=()=>{
        this.setState({abierto7: !this.state.abierto7})
    }
    abrirModal8=()=>{
        this.setState({abierto8: !this.state.abierto8})
    }
    abrirModal9=()=>{
        this.setState({abierto9: !this.state.abierto9})
    }
    abrirModal10=()=>{
        this.setState({abierto10: !this.state.abierto10})
    }
    abrirModal11=()=>{
        this.setState({abierto11: !this.state.abierto11})
    }
    abrirModal12=()=>{
        this.setState({abierto12: !this.state.abierto12})
    }
    abrirModal13=()=>{
        this.setState({abierto13: !this.state.abierto13})
    }
    abrirModal14=()=>{
        this.setState({abierto14: !this.state.abierto14})
    }
    abrirModal15=()=>{
        this.setState({abierto15: !this.state.abierto15})
    }
    abrirModal16=()=>{
        this.setState({abierto16: !this.state.abierto16})
    }
    abrirModal17=()=>{
        this.setState({abierto17: !this.state.abierto17})
    }
    abrirModal18=()=>{
        this.setState({abierto18: !this.state.abierto18})
    }
    abrirModal19=()=>{
        this.setState({abierto19: !this.state.abierto19})
    }
    abrirModal20=()=>{
        this.setState({abierto20: !this.state.abierto20})
    }
    abrirModal21=()=>{
        this.setState({abierto21: !this.state.abierto21})
    }
    abrirModal22=()=>{
        this.setState({abierto22: !this.state.abierto22})
    }
    abrirModal23=()=>{
        this.setState({abierto23: !this.state.abierto23})
    }

    render () {
        return (
            <div className="container">
                <div className="mt-5">
                    <div className="row">
                        <div class="col col-md-2 col-sm-3 col-xs-12">
                            <h1>Peliculas</h1>
                        </div>
                        
                        <div className="d-flex align-items-center justify-content-center dropdown col col-md-1 col-sm-3 col-xs-12">
                            <span class="badge bg-success">Más Destacadas</span>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="d-flex justify-content-around">
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Nobody</p>
                                            </div>    
                                            <p className="mb-0"><small>Mar 26, 2021</small></p>
                                            <p>$ 4.000</p>
                                            <button type="button" onClick={this.abrirModal} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/M7SUK85sKjaStg4TKhlAVyGlz3.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Wrath of Man</p>
                                            </div>    
                                            <p className="mb-0"><small>Apr 22, 2021</small></p>
                                            <p>$ 3.000</p>
                                            <button type="button" onClick={this.abrirModal1} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>The Unholy</p>
                                            </div>    
                                            <p className="mb-0"><small>Mar 31, 2021</small></p>
                                            <p>$ 4.000</p>
                                            <button type="button" onClick={this.abrirModal2} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Raya</p>
                                            </div>    
                                            <p className="mb-0"><small>May 03, 2021</small></p>
                                            <p>$ 2.000</p>
                                            <button type="button" onClick={this.abrirModal3} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/lcyKve7nXRFgRyms9M1bndNkKOx.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Spiral</p>
                                            </div>    
                                            <p className="mb-0"><small>May 14, 2021</small></p>
                                            <p>$ 2.000</p>
                                            <button type="button" onClick={this.abrirModal4} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Justice League</p>
                                            </div>    
                                            <p className="mb-0"><small>May 25, 2021</small></p>
                                            <p>$ 3.800</p>
                                            <button type="button" onClick={this.abrirModal5} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="row">
                        <div class="col col-md-2 col-sm-3 col-xs-12">
                            <h1>Peliculas</h1>
                        </div>
                        
                        <div className="d-flex align-items-center justify-content-center dropdown col col-md-1 col-sm-3 col-xs-12">
                            <span class="badge bg-success">Más Recientes</span>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="d-flex justify-content-around">
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Mortal Kombat</p>
                                            </div>    
                                            <p className="mb-0"><small>Apr 07, 2021</small></p>
                                            <p>$ 2.800</p>
                                            <button type="button" onClick={this.abrirModal6} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/A0knvX7rlwTyZSKj8H5NiARb45.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Cruella</p>
                                            </div>    
                                            <p className="mb-0"><small>May 26, 2021</small></p>
                                            <p>$ 3.800</p>
                                            <button type="button" onClick={this.abrirModal7} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>The Conjuring 3</p>
                                            </div>    
                                            <p className="mb-0"><small>May 25, 2021</small></p>
                                            <p>$ 3.800</p>
                                            <button type="button" onClick={this.abrirModal8} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>I Am All Girls</p>
                                            </div>    
                                            <p className="mb-0"><small>May 14, 2021</small></p>
                                            <p>$ 2.800</p>
                                            <button type="button" onClick={this.abrirModal9} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/w6n1pu9thpCVHILejsuhKf3tNCV.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Ferry</p>
                                            </div>    
                                            <p className="mb-0"><small>May 14, 2021</small></p>
                                            <p>$ 2.800</p>
                                            <button type="button" onClick={this.abrirModal10} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>A Quiet Place II</p>
                                            </div>    
                                            <p className="mb-0"><small>May 21, 2021</small></p>
                                            <p>$ 3.200</p>
                                            <button type="button" onClick={this.abrirModal11} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="row">
                        <div class="col col-md-2 col-sm-3 col-xs-12">
                            <h1>Series</h1>
                        </div>
                        <div className="d-flex align-items-center justify-content-center dropdown col col-md-1 col-sm-3 col-xs-12">
                        <span class="badge bg-success">Más Destacadas</span>
                        </div>
                    </div>
                    <div className="row mt-5">
                    <div className="d-flex justify-content-around">
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>The Falcon and the Winter Soldier</p>
                                            </div>    
                                            <p className="mb-0"><small>Mar 19, 2021</small></p>
                                            <p>$ 4.200</p>
                                            <button type="button" onClick={this.abrirModal12} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Loki</p>
                                            </div>    
                                            <p className="mb-0"><small>Jun 09, 2021</small></p>
                                            <p>$ 7.200</p>
                                            <button type="button" onClick={this.abrirModal13} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Game Of Thrones</p>
                                            </div>    
                                            <p className="mb-0"><small>Apr 17, 2011</small></p>
                                            <p>$ 4.200</p>
                                            <button type="button" onClick={this.abrirModal14} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/glKDfE6btIRcVB5zrjspRIs4r52.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>WandaVision</p>
                                            </div>    
                                            <p className="mb-0"><small>Jun 15, 2021</small></p>
                                            <p>$ 2.200</p>
                                            <button type="button" onClick={this.abrirModal15} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/4CkQvdUAtoLW3qkjWi7t1MTnW7R.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Kobra Kai</p>
                                            </div>    
                                            <p className="mb-0"><small>May 2, 2018</small></p>
                                            <p>$ 3.200</p>
                                            <button type="button" onClick={this.abrirModal16} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>The Boys</p>
                                            </div>    
                                            <p className="mb-0"><small>May 21, 2021</small></p>
                                            <p>$ 3.200</p>
                                            <button type="button" onClick={this.abrirModal17} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="row mt-5">
                    <div className="d-flex justify-content-around">
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>The Walking Dead</p>
                                            </div>    
                                            <p className="mb-0"><small>Oct 31, 2010</small></p>
                                            <p>$ 1.200</p>
                                            <button type="button" onClick={this.abrirModal18} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/9yxep7oJdkj3Pla9TD9gKflRApY.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Jupiter´s Legacy</p>
                                            </div>    
                                            <p className="mb-0"><small>May 07, 2021</small></p>
                                            <p>$ 2.200</p>
                                            <button type="button" onClick={this.abrirModal19} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/f496cm9enuEsZkSPzCwnTESEK5s.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Friends</p>
                                            </div>    
                                            <p className="mb-0"><small>Sep 22, 1994</small></p>
                                            <p>$ 1.200</p>
                                            <button type="button" onClick={this.abrirModal20} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>The Mandalorian</p>
                                            </div>    
                                            <p className="mb-0"><small>Nov 12, 2019</small></p>
                                            <p>$ 2.200</p>
                                            <button type="button" onClick={this.abrirModal21} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Breaking Bad</p>
                                            </div>    
                                            <p className="mb-0"><small>Jun 20, 2008</small></p>
                                            <p>$ 1.500</p>
                                            <button type="button" onClick={this.abrirModal22} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                            <div className="d-grif gap-2 col col-md-2 col-sm-3 col-xs-12">
                                <button className="btn btn-lg" type="button">
                                    <div className="card border-success mb-3">
                                        <div className="w-25">
                                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/MoEKaPFHABtA1xKoOteirGaHl1.jpg" className="img-rounded" width="180" height="236"/>
                                        </div>
                                        <div className="card-header">
                                            <div className="card-title">
                                                <p>Money Heist</p>
                                            </div>    
                                            <p className="mb-0"><small>May 02, 2017</small></p>
                                            <p>$ 3.200</p>
                                            <button type="button" onClick={this.abrirModal23} className="btn btn-outline-success">
                                                Alquilar
                                            </button>
                                        </div>
                                    </div>  
                                </button>  
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">Nobody</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Hutch Mansell, un padre suburbano, esposo ignorado, vecino de nada, un "nadie". Cuando dos ladrones irrumpen en su casa una noche, la rabia desconocida y latente de Hutch se enciende y lo impulsa por un camino brutal que descubrirá oscuros secretos que luchó por dejar atrás.</h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto1}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">Wrath Of Man</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/M7SUK85sKjaStg4TKhlAVyGlz3.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Un nuevo guardia de seguridad frío y misterioso de una empresa de camiones de efectivo de Los Ángeles sorprende a sus compañeros de trabajo cuando desata sus habilidades de precisión durante un atraco. La tripulación se pregunta quién es y de dónde vino. Pronto, el motivo final del tirador se hace evidente a medida que toma medidas dramáticas e irrevocables para ajustar cuentas.</h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 3.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto2}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal2}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="row" width="500" height="800">
                    <Modal isOpen={this.state.abierto23}>
                        <div className="text-center">
                            <ModalHeader>
                                <h2 className="text-info">The Unholy</h2>
                            </ModalHeader>
                        </div>
                        <ModalBody>
                            <div class="d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/bShgiEQoPnWdw4LBrYT5u18JF34.jpg" className="card-title img-rounded" width="180" height="236"/>
                                    <div className="px-4">
                                        <h2 className="card-title text-info"> Sinopsis</h2>
                                        <h5 className="d-flex justify-content-end">Alice, una joven con discapacidad auditiva que, tras una supuesta visita de la Virgen María, inexplicablemente es capaz de oír, hablar y curar a los enfermos. A medida que se corre la voz y personas de cerca y de lejos acuden en masa para presenciar sus milagros, un periodista deshonrado que espera revivir su carrera visita la pequeña ciudad de Nueva Inglaterra para investigar. </h5>                    
                                        <div className="mt-4">
                                            <h6 className="text-primary">Precio por alquiler: </h6>
                                        </div>
                                        <div className="text-center mt-4"> 
                                            <h3 className="text-primary">$ 4.000</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button type="button" class="btn btn-success" >Alquilar</button>
                            <button type="button" class="btn btn-secondary" onClick={this.abrirModal23}>Cerrar</button>
                        </ModalFooter>
                    </Modal>
                </div>
           </div>
        );
    }
}

export default Movies;