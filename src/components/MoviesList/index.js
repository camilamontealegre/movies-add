import React from 'react';
import { connect } from "react-redux";
import CardComponent from '../MoviesList/CardComponent';
import {useHistory} from 'react-router-dom';
import { useState, useEffect } from "react";

import './MoviesList.css'
import Plus from '../Plus'
//Este es un componente no controlado.Puesto que el usuario es quien controla su estado.
function MoviesList(props) {
  const history = useHistory()
  const [data, setData]= useState([]);
//data son todas las peliculas
  useEffect(() => {
   setData(props.peliculas)
  }, [props.peliculas])
//El segundo parametro me hace volver a entrar a la primera función, y me actualiza el estado de nuevo

  const onSearch = (buscar) =>{
  setData(props.peliculas.filter(pelicula => pelicula.name.toLowerCase().includes(buscar.toLowerCase())))
  }
  //peliculas es de tipo array
  //el filter recibe un callback

  return (
      <fieldset>
          <h2 className="title_modifier">Best movies</h2>
          <input 
              className="input_modifier" 
              type="text" name="movie" 
              placeholder="Search"
              onChange={(e) => onSearch(e.target.value)}           
            />
          {!props.peliculas.length ? (
            <h3>No hay películas</h3>
            ) : 
            (data.map((peli,index) => (
              <CardComponent data={peli} key={index}/>
             ))
            )}
         <Plus
          /*Aca se podía usar el Link to en vez de esta función <Link to="/form" />*/
         OnNext={
           ()=>{history.push("/form")}
           }
           />
      </fieldset>
  );
}
function mapStateToProps(state) {
    return {
      peliculas: state.movies.allMovies
    };
  }
//En la linea 30, movies se refiere a todo mi reducer, que lo defini en el combine como
//movies en el index.js de la carpeta reducer, y el staqte en la linea 28 se refiere
//al estado inicial del reducer movies-reducer

export default connect(mapStateToProps)(MoviesList);  

//Bracket Pair Colorizer