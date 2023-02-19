import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Employees from "./pages/Employees";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container-fluid p-4 justify-content-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="clients" element={<Clients />} />
              <Route path="projects" element={<Projects />} />
              <Route path="employees" element={<Employees />} />
              <Route path="proview/:id" element={<ProjectView />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
