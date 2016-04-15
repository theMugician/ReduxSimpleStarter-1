/**
 * Created by Administrator on 13/04/16.
 */
import React,{Component} from 'react';
//import {connect} from 'react-redux';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this)
    }
    onInputChange(event){
        this.setState({term: event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault;
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn">
                    Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    };
}