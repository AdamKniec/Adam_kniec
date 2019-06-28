import React from "react";

const ListItem = props => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.species}</td>
      <td>{props.gender}</td>
      <td>{props.homeworld}</td>
      <td>
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Actions"
        >
          <button type="button" className="btn btn-secondary">
            <i className="fa fa-pencil" aria-hidden="true" /> Edit
          </button>
          <button type="button" className="btn btn-danger">
            <i className="fa fa-trash-o" aria-hidden="true" /> Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ListItem;
