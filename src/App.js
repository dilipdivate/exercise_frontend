import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import NotFound from './components/NotFound';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import Tracks from './pages/Tracks/Tracks.js';
import Author from './pages/Tracks/Author.js';
import Books from './pages/Books/books.js';
import TrackRoute from './containers/Track/TrackRoute';
import ExerciseRoute from './containers/Exercise/ExerciseRoute';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const httpLink = createHttpLink({
  // uri: 'http://localhost:4000/',
  uri: 'https://dilip-graphql-backend.herokuapp.com/',
  headers: {
    // Authorization: 'Bearer ddivate',
    rapidkey: 'c190581bcbmshfb7b40ab413ea41p1cf2efjsna9a8ac690487',
    rapidhost: 'exercisedb.p.rapidapi.com',
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const token = 'ddivate';
  // return the headers to the context so httpLink can read them
  console.log(headers);
  console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// console.log(authLink);
const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: httpLink,
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Tracks />} />
            <Route path="author/:authorId" element={<Author />} />
            <Route path="/track/*" element={<TrackRoute />} />
            <Route path="/exercise/*" element={<ExerciseRoute />} />
            <Route path="books" element={<Books />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
