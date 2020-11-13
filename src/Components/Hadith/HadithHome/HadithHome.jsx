// import React, { Component } from 'react'
// import HadithCard from '../HadithCard/HadithCard'
// import "../Hadith.css"
// import CustomLayout from "../../Layout/index"

// class HadithHome extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <CustomLayout>
//                     <div style={{ alignItems: "center", textAlign: "center" }} className="container-fluid">
//                         <div class="row" style={{ paddingTop: "2%", textAlign: "center" }}>
//                             <div id="book1" className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
//                                 <HadithCard name="Al Bukhari" />
//                             </div>
//                             <div id="book2" className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
//                                 <HadithCard name="Al Muslim" />
//                             </div>
//                             <div id="book3" className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
//                                 <HadithCard name="Al Tirmazi" />
//                             </div>
//                             <div id="book4" className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
//                                 <HadithCard name="Abu Dawood" />
//                             </div>
//                         </div>
//                         <div class="row" style={{ paddingTop: "2%", textAlign: "center" }}>
//                             <div id="book5" className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
//                                 <HadithCard name="Al Nasai" />
//                             </div>
//                             <div id="book6" className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
//                                 <HadithCard name="Sunna Ibn e Majja" />
//                             </div>
//                             <div id="book7" className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
//                                 <HadithCard name="Mishkaat" />
//                             </div>
//                             <div id="book8" className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
//                                 <HadithCard name="Musnad Ahmed" />
//                             </div>
//                         </div>
//                     </div>
//                 </CustomLayout>
//             </React.Fragment>

//         );
//     }
// }

// export default HadithHome;

import React, { Component } from 'react'
import HadithCard from '../HadithCard/HadithCard'
import CustomLayout from "../../Layout/index"
import 'antd/dist/antd.css';
import {
    Row,
    Col,
} from "antd";

const data = [
    {
        name: "Al Bukhari",
        imageUrl: "/Bukhari.png"
    },
    {
        name: "Al Tirmazi",
        imageUrl: "/Tirmazi.png"
    },
    {
        name: "Al Muslim",
        imageUrl: "/Muslim.png"
    },
    {
        name: "Abu Dawood",
        imageUrl: "/Dawood.png"
    }]
const data2 = [{
    name: "Al Nisai",
    imageUrl: "/Nisai.png"
},
{
    name: "Sunna Ibn e Majja",
    imageUrl: "/majja.png"
},
{
    name: "Mishkaat",
    imageUrl: "/Mishkaat.png"
},
{
    name: "Musnad Ahmed",
    imageUrl: "/hambal.png"
}
]
class HadithHome extends Component {
    render() {
        return (
            <React.Fragment>

                <CustomLayout>
                    <div className="container my-1 text-center">
                        <Row>
                            {data.map(d => {
                                return <Col className="mx-auto my-auto text-center" xs={24} sl={24} lg={5} md={5} xl={5}>
                                    <HadithCard name={d.name} image={d.imageUrl} />
                                </Col>

                            })}
                        </Row>
                        <br />
                        <Row>
                            {data2.map(d => {
                                return <Col className="mx-auto my-auto text-center" xs={24} sl={24} lg={5} md={5} xl={5}>
                                    <HadithCard name={d.name} image={d.imageUrl} />
                                </Col>

                            })}
                        </Row>
                    </div>
                </CustomLayout>

            </React.Fragment >

        );
    }
}

export default HadithHome;