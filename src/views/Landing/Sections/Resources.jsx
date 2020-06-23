import React from 'react';
//import {Card, Col, Row} from "antd";
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../../../styles.css"

function ResourcesHeader(){
    return (
        <div className="centered-text">
            <h1> <b> Find </b> </h1>
            <h3> advice and resources to help </h3>
        </div>
    )
}

function ResourcesText(){
    return (
        <div className="centered-text">
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md="2" />
                    <Col md="8" style={{border: "solid", padding: "20px"}}>
                        We’ve done the research so you don’t have to.
                        Check out our vetted list of resources that can help guide you through this life altering time.
                    </Col>
                    <Col md="2" />
                </Row>
            </Container>
        </div>
    )
}

function ResourcesAction(){
    return (
        <div className="centered-text">
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    <Col md="2" />
                    <Col md="8">
                        <Row className="justify-content-md-center ">
                            <Col md="1" />
                            <Col className="center" md="4" style={{border: "solid", paddingTop: "30px", paddingBottom: "30px"}}>
                                I lost someone I love and I don’t know what to do next
                            </Col>
                            <Col md="2" />
                            <Col className="center" md="4" style={{border: "solid", paddingTop: "30px", paddingBottom: "30px"}}>
                                Someone I know and care about has lost someone they love and I don’t know how to help
                            </Col>
                            <Col md="1" />
                        </Row>
                    </Col>
                    <Col md="2" />
                </Row>
            </Container>
        </div>
    )
}

class Resources extends React.Component {
    render() {
        return (
            <div>
                <ResourcesHeader />
                <br />
                <ResourcesText />
                <br />
                <br />
                <ResourcesAction />
            </div>
        )
    }
}

export default Resources;