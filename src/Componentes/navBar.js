import React, { Component } from 'react';
import Search from './Buscador';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../css/Styles.css';
import axios from 'axios';
import md5 from 'md5';

const baseUrl="http://localhost:3001/usuarios"

class NavBar extends Component {
     
    //Realizamos un state con un dato booleanos, uno definido o string y dos con username y password para los datos de inicio de sesion
    state = {
        termino : 'cafe',
        Login: false,
        form:{
            username: '',
            password:''        
        }
    }
    
    //
    DatosBusqueda = (termino) => {
        this.setState({
        termino
        })
    }

    abrirModal=()=>{
        this.setState({Login: !this.state.Login})
    }
    
    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render (){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">Rent of Movies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Navegación de palanca">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Peliculas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Series</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Precios</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Desplegable</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Terror</a>
                                    <a className="dropdown-item" href="#">Accion</a>
                                    <a className="dropdown-item" href="#">Comedia</a>
                                    <a className="dropdown-item" href="#">Susponso</a>
                                </div>

                            </li>
                        </ul>
                        <div className="px-3">
                            <button type="button" onClick={this.abrirModal} className="btn btn-outline-light">Iniciar Secion</button>
                        </div>
                        <Search
                        datosBusqueda={this.DatosBusqueda}
                        /> 
                    </div>
                    </div>
                </nav>
                <div className="containerPrincipal">
                    <div className="containerSecundario">
                        <div className="form-group">
                            <Modal isOpen={this.state.Login}>
                                <ModalHeader>
                                    <label>
                                        Usuario:    
                                    </label>
                                    <br/>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        onChange={this.handleChange}
                                    />
                                </ModalHeader>
                                <ModalBody>
                                    <label>Contreña: </label>
                                    <br />
                                    <input
                                        type="password"
                                        className="form-control"
                                        type="password"
                                        onChange={this.handleChange}
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <button type="button" onClick={() => this.iniciarSesion()} class="btn btn-success" >Iniciar Sesipon</button>
                                    <button type="button" class="btn btn-secondary" onClick={this.abrirModal}>Cerrar</button>
                                </ModalFooter>
                            </Modal>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;