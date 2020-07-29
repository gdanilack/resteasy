import React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import "../Template2DigitalMemory.css"
import "../../../styles/styles.css"
import EditableComponent from "./EditableComponent.js"
import axios from "axios";
import { REMOTE_HOST } from "../../../constants.js"

const imgStyle = {height: "100%", width: "100%", objectFit: "cover"}
const h = 600

class DisplayItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            img: ""
        }
    }

    componentDidMount(){
        if(this.props.item.type != "img"){
            return
        }
        console.log(this.props.item.img)
        let fileParts = this.props.item.img.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
        const tokenId = JSON.parse(localStorage.getItem("user")).id
        const body = {
            id: tokenId,
            memoryName : fileName,
            userUploadBucket : "resteasy-user-uploads",
        }
        axios.post(REMOTE_HOST + "/aws/signS3_get", {body})
            .then(response => {
                this.setState({img: response.data})
            })
            .catch(error => {
                console.log("error")
            })
    }

    componentDidUpdate(){
        if(this.props.item.type != "img"){
            return
        }
        console.log(this.props.item.img)
        let fileParts = this.props.item.img.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
        const tokenId = JSON.parse(localStorage.getItem("user")).id
        const body = {
            id: tokenId,
            memoryName : fileName,
            userUploadBucket : "resteasy-user-uploads",
        }
        axios.post(REMOTE_HOST + "/aws/signS3_get", {body})
            .then(response => {
                this.setState({img: response.data})
            })
            .catch(error => {
                console.log("error")
            })
    }

    render(){
    if(this.props.item.type == "img"){
        return (
            <img src={this.state.img} style={imgStyle} />
        )
    }
    else if(this.props.item.type == "empty"){
        return (
            <div className="center" style={{height: "100%", width: "100%", backgroundColor: "green"}}>
                Insert photo or memory here.
            </div>
        )
    }
    else{
        return (
            <div className="center" style={{height: "100%", width: "100%", backgroundColor: "#E2FCD3"}}>
                Creator or contributor memory.
            </div>
        )
    }
    }
}

export default function LayoutRowEditor(props){
    var LayoutCols
    if(props.rownum % 2){
        LayoutCols = (
            <Row className="justify-content-md-center" style={{height: h}}>
                <Col md="7" style={{height: h, padding: "0px"}}>
                    <EditableComponent swapTemplateItems={props.swapTemplateItems} rownum={props.rownum} index={1} togglePopupIsOpen={props.togglePopupIsOpen} sendClickedInfo={props.sendClickedInfo} type={props.rowinfo[1].type}>
                        <div style={{height: (h*0.7), padding: "10px"}}>
                            <DisplayItem item={props.rowinfo[1]} />
                        </div>
                    </EditableComponent>
                    <EditableComponent swapTemplateItems={props.swapTemplateItems} rownum={props.rownum} index={2} togglePopupIsOpen={props.togglePopupIsOpen} sendClickedInfo={props.sendClickedInfo} type={props.rowinfo[2].type}>
                        <div style={{height: (h*0.3), padding: "10px"}}>
                            <DisplayItem item={props.rowinfo[2]} />
                        </div>
                    </EditableComponent>
                </Col>
                <Col md="5" style={{height: h, padding: "10px"}}>
                    <EditableComponent swapTemplateItems={props.swapTemplateItems} rownum={props.rownum} index={0} togglePopupIsOpen={props.togglePopupIsOpen} sendClickedInfo={props.sendClickedInfo} type={props.rowinfo[0].type}>
                        <div style={{height: (h-20)}}>
                            <DisplayItem item={props.rowinfo[0]} />
                        </div>
                    </EditableComponent>
                </Col>
            </Row>
        )
    }
    else{
       LayoutCols = (
            <Row className="justify-content-md-center" style={{height: h}}>
                <Col md="5" style={{height: h, padding: "10px"}}>
                    <EditableComponent swapTemplateItems={props.swapTemplateItems} rownum={props.rownum} index={0} togglePopupIsOpen={props.togglePopupIsOpen} sendClickedInfo={props.sendClickedInfo} type={props.rowinfo[0].type}>
                        <div style={{height: (h-20)}}>
                            <DisplayItem item={props.rowinfo[0]} />
                        </div>
                    </EditableComponent>
                </Col>
                <Col md="7" style={{height: h, padding: "0px"}}>
                    <EditableComponent swapTemplateItems={props.swapTemplateItems} rownum={props.rownum} index={1} togglePopupIsOpen={props.togglePopupIsOpen} sendClickedInfo={props.sendClickedInfo} type={props.rowinfo[1].type}>
                        <div style={{height: (h*0.7), padding: "10px"}}>
                            <DisplayItem item={props.rowinfo[1]} />
                        </div>
                    </EditableComponent>
                    <EditableComponent swapTemplateItems={props.swapTemplateItems} rownum={props.rownum} index={2} togglePopupIsOpen={props.togglePopupIsOpen} sendClickedInfo={props.sendClickedInfo} type={props.rowinfo[2].type}>
                        <div style={{height: (h*0.3), padding: "10px"}}>
                            <DisplayItem item={props.rowinfo[2]} />
                        </div>
                    </EditableComponent>
                </Col>
            </Row>
        )
    }

    return(
        <Row className="justify-content-md-center" style={{zIndex: props.zIndex}}>
            <Col md="2" />
            <Col md="8" style={{zIndex: props.zIndex}}>
                {LayoutCols}
            </Col>
            <Col md="2">
                <button
                    style={{marginTop: "50%"}}
                    onClick={() => {
                        props.deleteRow(props.rownum)
                    }}
                >
                    Delete these three
                </button>
            </Col>
        </Row>
    )
}
