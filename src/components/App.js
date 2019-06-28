import React from "react";
import Navbar from "./Navbar";
import List from "./List";
import SearchBox from "./ActionPanel";
import PaginationBox from "./PaginationBox";
import { debounce } from "lodash";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewCharacterForm from "./NewCharacterForm";

class App extends React.Component {
  state = {
    charactersList: [],
    speciesList: [],
    totalResults: 0,
    currentPage: 1,
    searchInputValue: "",
    numerOfCharacters: null,
    name: "",
    species: "",
    gender: "",
    homeworld: "",
    formErrors: {
      nameErr: "",
      speciesErr: "",
      genderErr: "",
      homeworldErr: ""
    }
  };
  componentDidMount() {
    fetch("http://localhost:3000/characters?_limit=10")
      .then(response => response.json())
      .then(data =>
        this.setState({
          charactersList: data,
          totalResults: data.length
        })
      );

    fetch("http://localhost:3000/characters")
      .then(response => response.json())
      .then(data =>
        this.setState({
          numberOfCharacters: data.length
        })
      );

    fetch("http://localhost:3000/species/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          speciesList: data
        })
      );
  }
  nextPage = pageNumber => {
    fetch(`http://localhost:3000/characters?_page=${pageNumber}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          charactersList: data,
          currentPage: pageNumber
        })
      );
  };

  handleSearchChange = searchInputValue => {
    this.setState({ searchInputValue });
    this.fetchData(searchInputValue);
  };

  fetchData = debounce(() => {
    fetch(`http://localhost:3000/characters?q=${this.state.searchInputValue}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          charactersList: data
        })
      );
  }, 200);

  formValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
    return valid;
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.formValid(this.state.formErrors)) {
      let data = {
        name: this.state.name,
        species: this.state.species,
        gender: this.state.gender,
        homeworld: this.state.homeworld
      };
      fetch("http://localhost:3000/characters", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      this.componentDidMount();
      this.setState({
        name: "",
        species: "",
        gender: "",
        homeworld: ""
      });
    } else {
      console.error("Form Error");
    }
  };

  handleFormChanges = e => {
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    switch (name) {
      case "name":
        formErrors.nameErr = value.length < 1 ? "This field is required" : "";
        break;

      case "species":
        formErrors.speciesErr = !value ? "This field is required" : "";
        break;

      case "gender":
        formErrors.genderErr = !this.state.gender
          ? "This field is required"
          : "";
        break;
      default:
        return "";
    }
    this.setState({
      formErrors,
      [name]: value
    });
  };

  render() {
    const numberOfPages = Math.floor(this.state.numberOfCharacters / 10);

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <SearchBox
                    searchInputValue={this.state.searchInputValue}
                    handleSearchChange={this.handleSearchChange}
                  />

                  <List {...props} charactersList={this.state.charactersList} />
                  {this.state.totalResults > 9 ? (
                    <PaginationBox
                      nextPage={this.nextPage}
                      currentPage={this.state.currentPage}
                      pages={numberOfPages}
                    />
                  ) : (
                    ""
                  )}
                </>
              )}
            />

            <Route
              exact
              path="/add-character"
              render={() => (
                <NewCharacterForm
                  characterList={this.state.charactersList}
                  handleFormSubmit={this.handleFormSubmit}
                  handleFormChanges={this.handleFormChanges}
                  formErrors={this.state.formErrors}
                  speciesList={this.state.speciesList}
                  name={this.state.name}
                  species={this.state.species}
                  gender={this.state.gender}
                  homeworld={this.state.homeworld}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
