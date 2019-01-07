import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        term: '',
    };

    onInputChange = (event) => {
        let e = event.target.value;
        this.setState({ term: e });
    };
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            onChange={this.onInputChange} 
                            value={this.state.image}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

