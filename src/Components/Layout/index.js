import React, { Component } from "react";
import { Layout, Row } from "antd";
import "./CustomHeader.css";
import CustomHeader from "./CustomHeader";

const { Header, Content, Footer } = Layout;

export default class CustomLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ all: "unset" }}{...this.props}>
          <CustomHeader {...this.props} />
        </Header>
        <Content style={{ backgroundColor: "white" }} >{this.props.children}</Content>
        <Footer class="text-center py-3  " style={{ cursor: "pointer", backgroundColor: "#006400" }}>

          <div>© Ninety Nine 2020</div>

        </Footer>
      </Layout>
    );
  }
}
