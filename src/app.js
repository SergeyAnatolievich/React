import "babel-polyfill";

import ReactDOM from 'react-dom';
import React from 'react';
import Search from './Search.js'

class AppComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {dolist: [
            {isON: true, value: 'item', save: ''},
            {isON: true, value: 'item', save: ''},
            {isON: true, value: 'item', save: ''}
            ],
        showInfo : false
        }
    }

    _toggleShowButton() {
        this.setState({
            showInfo:true
        })
    }

    _toggleHideButton(){
        this.setState({
            showInfo:false
        })
    }

    _toggleShowRef(i) {
        this.state.dolist[i].isON = false;
        this.setState({dolist: this.state.dolist})
    }


    render(){
        return (
            <div className="container">
                <div className="nav-bar">
                    <Search dolist={this.state.dolist}/>
                    <button type="button" className="btn btn-success" onClick={this._toggleShowButton.bind(this)}>Создать Новый лист</button>
                    <button type="button" className="btn btn-danger">Удалить Все</button>
                    <div className="container" style={{display: this.state.showInfo ? 'block' : 'none'}}>
                        <div className="findtime">
                            <div style={{position: 'absolute'}} className="row">
                                <div style={{margin: '0 auto'}} className="input-group col-xs-3">
                                    <input type="text" className="form-control" placeholder="описание ..."  ></input>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" onClick={this._toggleHideButton.bind(this)}><i className="text">Ok!</i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-bordered">
                    <tbody>
                    <tr>{this.state.dolist.map((item, i) =>
                        <td style={{float: 'left', width:'100%'}} key={i}>
                            {item.isON
                                ? <div id="item"> {item.value}
                                <button type="button" className="btn btn-warning" onClick={this._toggleShowRef.bind(this, i)}>Редактировать</button>
                                <button type="button" className="btn btn-danger">Удалить</button>
                            </div>
                                : <div>
                                <div className="form-group, col-xs-3">
                                    <input className="form-control"/>
                                </div>
                                <button type="button" className="btn btn-success">Сохранить</button>
                                <button type="button" className="btn btn-danger">Отмена</button>
                            </div>}
                        </td>)}
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(
<AppComponent/>, document.getElementById('Buttons')
)


