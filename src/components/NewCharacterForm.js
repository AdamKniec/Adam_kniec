import React from "react";

const NewCharacterForm = props => {
  console.log(props);
  return (
    <div className="form-container">
      <form action="POST" onSubmit={props.handleFormSubmit}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="name">
              <span>*</span> Name:
            </label>
            <input
              type="text"
              name="name"
              required
              value={props.name}
              onChange={props.handleFormChanges}
              onFocus={props.handleFormChanges}
              className={
                props.formErrors.nameErr
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {props.formErrors.nameErr.length > 0 && (
              <span className="errorMessage">{props.formErrors.nameErr}</span>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="species">
              <span>*</span>Species:
            </label>
            <select
              name="species"
              className={
                props.formErrors.speciesErr
                  ? "custom-select is-invalid"
                  : "custom-select"
              }
              required
              value={props.species}
              onFocus={props.handleFormChanges}
              onChange={props.handleFormChanges}
            >
              <option />
              {props.speciesList.map((singleSpecie, i) => {
                return <option key={i}>{singleSpecie}</option>;
              })}
            </select>
            <span className="errorMessage">{props.formErrors.speciesErr}</span>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <p>
              <span>*</span>Gender
            </p>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="male"
                name="gender"
                className="custom-control-input"
                value="male"
                required
                onChange={props.handleFormChanges}
                onFocus={props.handleFormChanges}
              />
              <label htmlFor="male" className="custom-control-label">
                Male
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="female"
                name="gender"
                className="custom-control-input"
                value="female"
                onChange={props.handleFormChanges}
                onFocus={props.handleFormChanges}
              />

              <label htmlFor="female" className="custom-control-label">
                Female
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="na"
                name="gender"
                className="custom-control-input"
                value="na"
                onChange={props.handleFormChanges}
                onFocus={props.handleFormChanges}
              />
              <label htmlFor="na" className="custom-control-label">
                N/A
              </label>
            </div>
            <span className="errorMessage">{props.formErrors.genderErr}</span>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="homeworld">Homeworld: </label>
            <input
              type="text"
              className="form-control"
              name="homeworld"
              value={props.homeworld}
              onChange={props.handleFormChanges}
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Add Character
        </button>
      </form>
    </div>
  );
};

export default NewCharacterForm;
