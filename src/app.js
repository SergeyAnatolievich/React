import "babel-polyfill";

import ReactDOM from 'react-dom';
import React from 'react';
import Search from './Search.js'

class AppComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {dolist: [
            'погладить рубашку',
            'погладить кошку',
            'погладить пузико',
            'погладить ковер'
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
                        <td style={{float: 'left', width:'100%'}} key={i}> {item}
                            <div id="savechanges" className="container">
                                <div className="form-group, col-xs-3">
                                <input className="form-control"  placeholder={item}></input>
                                </div>
                                <button type="button" className="btn btn-success">Сохранить</button>
                                <button type="button" className="btn btn-danger">Отмена</button>
                            </div>
                            {/*<button type="button" className="btn btn-warning">Редактировать</button>*/}
                            {/*<button type="button" className="btn btn-danger">Удалить</button>*/}
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


