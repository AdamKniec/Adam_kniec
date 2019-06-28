import React from 'react';
import { Link } from 'react-router-dom';

class SearchBox extends React.Component {
	render(props){
		return(
			<div className="action-panel">
				<div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="searchInput" className="sr-only">Search</label>
            <input type="text" className="form-control" id="searchInput" placeholder="Search..." value={this.props.searchInputValue} onChange={e => this.props.handleSearchChange(e.target.value)}/>
          </div>
        </div>
        <div className="col-sm-6 text-sm-right">
          <Link to = '/add-character'>
            <span className="btn btn-primary mb-3">
                Add New
            </span>
          </Link>
        </div>
      </div>
			</div>
		)
	}
}

export default SearchBox;