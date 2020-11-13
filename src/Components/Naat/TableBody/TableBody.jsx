import React, { Component } from 'react'
import Card from "../Card/Card"
import "../NaatDetail/NaatDetail.css"

class TableBody extends Component {
    render() {
        return (
            <div>
                <br /><br />

                <div style={{ paddingTop: "1%" }} className="table1">
                    <div id="titleImage" className="row">
                        <img className="col-sm-12 col-xs-12 col-md-6" style={{ maxWidth: "100%" }} src={this.props.data.iconLocation} alt="Naat Image" />
                        <div className="col-sm-12 col-xs-12 col-md-6" id="artistName">{this.props.data.title}</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default TableBody;