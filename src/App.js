import './App.css';
import Home from './pages/Home';
import HomeAnilist from './pages/Home-Anilist';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // uri: "https://graphql-weather-api.herokuapp.com/",
    uri: "https://graphql.anilist.co/",
  })
  return (
  <ApolloProvider client={client}>
    <HomeAnilist />
    {/* <Home /> */}
  </ApolloProvider>
  ) 
}

export default App;
