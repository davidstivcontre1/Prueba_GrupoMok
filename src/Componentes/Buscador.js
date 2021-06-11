import React, { Component } from 'react';

class Search extends Component {

    searchRef = React.createRef();

    handle = (e) => {
        e.preventDefault();

        // Se toma el valor del input
        const termino = this.searchRef.current.value;

        // Se envia al componente principal
        this.props.datosBusqueda(termino); 
    }

    render() {
        return (
            <form onSubmit={this.handle} class="d-flex" _lpchecked="1">
                <input ref={this.searchRef} type="text" className="form-control me-sm-2" 
                placeholder="Busca la pelicula que prefieras"/>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        )
    }
}

export default Search;