import React from 'react';

export default class SearchForm extends React.Component {
    render() {
        return (
            <div style={{float: 'right', top: '0px'}} className="input-group col-xs-3">
                <input type="text" className="form-control" placeholder="Search for ..."  ></input>
                <div className="input-group-btn">
                    <button className="btn btn-default" type="submit"><i className="text">Go!</i></button>
                </div>
            </div>
        )
    }
}

