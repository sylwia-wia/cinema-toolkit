import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import RoomsCreate from "./room/RoomsCreate";
import Rooms from "./room/Rooms";
import Movie from "./movie/Movie";
import Show from "./room/Show";
import MovieCreate from "./movie/MovieCreate";
import ShowCreate from "./show/ShowCreate";
import RoomsUpdate from "./room/RoomsUpdate";
import MovieUpdate from "./movie/MovieUpdate";
import ShowUpdate from "./show/ShowUpdate";
import Buy from "./ticket/Buy";
import Ticket from "./ticket/Ticket";
import AllRoutes from "./routes/AllRoutes";

function AppLayout() {
    return (
       <>
           <header>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                   <a className="navbar-brand" href="#">Kino</a>
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav">
                           <li className="nav-item active">
                               <NavLink to="/rooms" className="nav-link">Sale</NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink to="/show" className="nav-link">Seanse</NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink to="/movie" className="nav-link">Filmy</NavLink>
                           </li>

                       </ul>
                   </div>
               </nav>
           </header>

            <AllRoutes />
       </>
);
}
export default AppLayout;