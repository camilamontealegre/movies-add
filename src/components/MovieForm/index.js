import React, { useState } from "react";
import { connect } from "react-redux";
import './MovieForm.css';

//Este es un componente controlado porque controlo el valor del input desde el estado

   function Form(props) {
      const [name, setName] = useState("");
      const [comments, setComments] = useState("");
      const [stars, setStars]= useState("Movie stars");

      const handleAddMovie = () => {
        props.addMovie({ name, comments, stars }); //destructuring
        setName("");
      };

      return (
        <form className="box">
          <fieldset>
            <h2 className="title_modifier">Add movie</h2>
            <input 
              className="form_input_modifier" 
              type="text" name="movie" 
              placeholder="Movie name"
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
            <textarea 
              className="description" 
              name="description" 
              rows="5" 
              value={comments}
              cols="25"
              onChange={(e) => setComments(e.target.value)}
              >
              Movie description
            </textarea>
            <select required 
             value={stars}
             onChange={(e) => setStars(e.target.value)}>
              <option value="moviestars" selected >Movie stars</option>
              <option value="1">1 star</option>
              <option value="2">2 stars</option>
              <option value="3">3 stars</option>
              <option value="4">4 stars</option>
              <option value="5">5 stars</option>
            </select>
            <button 
              disabled={!name} 
              type="submit"
              onClick={handleAddMovie}
              className="send_btn">
              Add movie
            </button>
          </fieldset>
        </form>
      );
    }

//Acá le paso las acciones que necesito
    function mapDispatchToProps(dispatch) {
      return {
        addMovie(movie) {
          dispatch({
            type:"ADD_MOVIE",
            payload: movie
          });
        }
      };
    }
//es ideal ponerlo en una carpeta de actions por orden 
export default connect(null, mapDispatchToProps)(Form);