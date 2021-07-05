import Home from "./components/Home";
import Movie from "./components/movie/Movie";


export const routes = [{
    path: '/',
    component: Home,
  },
  {
    path: '/movie/:id',
    component: Movie,
  },
{path : '*' , redirect : "/"}
];
