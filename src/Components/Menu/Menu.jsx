import React, { Component } from 'react';
import 'antd/dist/antd.css';
import "./Menu.css"
import { Link } from 'react-router-dom'
import CustomLayout from './../Layout/index';

import { Row, Col, } from "antd";

class Menu extends Component {

    render() {


        return (
            <CustomLayout>
                <div style={{ backgroundColor: "white" }} id="menuItem" className="text-center py-3 px-1">
                    <Row >
                        <Col className="gutter-row mx-3" xs={24} sl={24} lg={4}>
                            <div  ><Link to="/hadith"><img id="menu-1" src="/HADITH.png" text="HADTIH" /></Link><p id="menu1-text">HADTIH</p></div>

                        </Col>
                        <Col className="gutter-row mx-3" xs={24} sl={24} lg={4}>
                            <div ><Link to="/naats"><img id="menu-1" src="/NAAT.png" text="NAAT" /></Link><p id="menu1-text">NAAT</p></div>

                        </Col>
                        <Col className="gutter-row mx-3" xs={24} sl={24} lg={4}>
                            <div ><Link to="/surahList"><img id="menu-1" src="/QURAN.png" text="HOLY QURAN" /></Link><p id="menu1-text">HOLY QURAN</p></div>

                        </Col>
                        <Col className="gutter-row mx-3" xs={24} sl={24} lg={4}>
                            <div ><Link to="/mosque"><img id="menu-1" src="/MOSQUE.png" text="MOSQUE" /></Link><p id="menu1-text">MOSQUE</p></div>

                        </Col>
                        <Col className="gutter-row mx-3" xs={24} sl={24} lg={4}>
                            <div ><Link to="/naats"><img id="menu-1" src="/HAjjUmrah.png" text="HAJJ/UMRAH GUIDE" /></Link><p id="menu1-text">HAJJ/UMRAH GUIDE</p></div>

                        </Col>
                    </Row>
                    <Row >
                        <Col className="gutter-row mx-3" xs={24} sl={24} lg={4}>
                            <div ><Link to="/naats"><img id="menu-1" src="/Supplication.png" text="SUPPLICATION" /></Link><p id="menu1-text">SUPPLICATION</p></div>

                        </Col>
                        <Col className="gutter-row mx-3" xs={24} sl={24} lg={4}>
                            <div ><Link to="/naats"><img id="menu-1" src="/Qibla.png" text="QIBLA" /></Link><p id="menu1-text">QIBLA</p></div>

                        </Col>
                        <Col className="gutter-row mx-3" xs={24} sl={24} lg={4}>
                            <div ><Link to="/naats"><img id="menu-1" src="/Calender.png" text="CALENDER" /></Link><p id="menu1-text">CALENDER</p></div>

                        </Col>
                        <Col className="gutter-row mx-3" xs={24} sl={24} lg={4}>
                            <div ><Link to="/naats"><img id="menu-1" src="/Timings.png" text="TIMINGS" /></Link><p id="menu1-text">TIMINGS</p></div>

                        </Col>
                        <Col className="gutter-row mx-3" xs={24} sl={24} lg={4}>
                            <div ><Link to="/naats"><img id="menu-1" src="/Zakat.png" text="ZAKAT" /></Link><p id="menu1-text">ZAKAT</p></div>

                        </Col>
                    </Row>
                </div>
            </CustomLayout>


        )
    }
}

export default Menu;