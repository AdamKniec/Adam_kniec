import React, { Component } from "react";
import ListItem from "./ListItem";
import Empty from "./Empty";
class List extends Component {
  render(props) {
    const { charactersList } = this.props;
    if (charactersList.length > 0) {
      return (
        <div className="list-container">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Species</th>
                <th scope="col">Gender</th>
                <th scope="col">Homeworld</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {charactersList.map((singleCharacter, i) => {
                return (
                  <ListItem
                    id={singleCharacter.id}
                    name={singleCharacter.name}
                    species={singleCharacter.species}
                    gender={singleCharacter.gender}
                    homeworld={singleCharacter.homeworld}
                    key={i}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Empty />;
    }
  }
}

export default List;
