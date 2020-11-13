import React, { Component } from 'react'
import Slider from "../Slider/Slider"

const data = [
    {
        title: "Junaid Jamshed",
        iconLocation: "https://firebasestorage.googleapis.com/v0/b/nintynin-96f20.appspot.com/o/icons%2Fphoto.jpg?alt=media&token=8fa64dc4-5513-4cca-9c1d-46122d737352"

    },
    {
        title: "Owais Raza Qadri",
        iconLocation: "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/31841517_10155805736629234_684070286026342400_n.png?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=e5MOSsRWrTcAX_bq_su&_nc_ht=scontent.fkhi6-1.fna&oh=721ef5c48d5a8b302f76897c14046d06&oe=5FD0226F"

    }
]


class NaatHome extends Component {


    render() {
        return (<>
            {this.props.data.length > 0 ?
                <Slider data={this.props.data} player={this.props.player} title="New Naats" /> : <div></div>
            }
            {<Slider data={data} player={this.props.player} title="Artists"></Slider>}
        </>
        )
    }
}

export default NaatHome;