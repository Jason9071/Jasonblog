import { useState, useEffect } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import aws from '../../images/aws.png'
import firebase from '../../images/firebase.png'
import react from '../../images/react.png'
import other from '../../images/other.png'
const useStyle = () => {
    return {
        modalHeader: {
            "background-color": "#212529",
        },
        modalFooter: {
            "background-color": "#212529",
            "position": "relative"
        },
        modalBody: {
            "background-color": "#212529",
        },
        modalTitle: {
            "font-family": "VT323",
            "color": "#4AF626"
        },
        modalMainTitle:{
            "font-family": "VT323",
            "font-size": "25px",
            "color": "#4AF626"
        },
        modalSubTitle: {
            "font-family": "VT323",
            "font-size": "20px",
            "color": "#4AF626",
        },
        modalSubTitleForReference :{
            "font-family": "VT323",
            "font-size": "20px",
            "color": "#005fff",
        },
        modalText: {
            "font-family": "VT323",
            "color": "#4AF626",
        },
        modalFooterText: {
            "font-family": "VT323",
            "font-size": "18px",
            "color": "#4AF626",
            "position": "absolute",
            "border-radius": "5px",
            "left": "0px",
            marginTop: "2px",
            marginBottom: "2px",
        },
        logoImage: {
            width: "7%",
            height: "7%",
            "border-radius": "5px",
        }
    }
}

const About = () => {
    const aboutStyle = useStyle()
    const [semi, setSemi] = useState(false);
    useEffect(() => {
        setTimeout(() => { setSemi(!semi) }, 1000)
    }, [semi]);
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 1}} >
                        <Modal.Dialog >
                            <Modal.Header style={aboutStyle.modalHeader} >
                                <Modal.Title style={aboutStyle.modalTitle} >Full-Stack Developer</Modal.Title>
                               
                                <span style={aboutStyle.modalText} >2021/5/1 to 2021/7/31</span>
                            </Modal.Header>

                            <Modal.Body style={aboutStyle.modalBody} >
                                <span style={aboutStyle.modalMainTitle}>What have I Do???</span><br></br>
                                <a href={`https://aws.amazon.com/?nc1=h_ls`} target="_blank" style={aboutStyle.modalSubTitle} >AWS :</a><img src={aws} style={aboutStyle.logoImage}></img><br></br>
                                <span style={aboutStyle.modalText} >Lambda serverless With NodeJS + APIGateway</span><br></br>
                                <span style={aboutStyle.modalText} >S3 + Cloudfont + Certification Manager + Godaddy For Web Hosting</span><br></br>
                                <span style={aboutStyle.modalText} >postgreSQL DataBase</span><br></br>
                                <a href={`https://reactjs.org/`} target="_blank" style={aboutStyle.modalSubTitle} >React :</a><img src={react} style={aboutStyle.logoImage}></img><br></br>
                                <span style={aboutStyle.modalText} >react + redux + redux-saga</span><br></br>
                                <span style={aboutStyle.modalText} >Material-UI</span><br></br>
                                <br></br>
                                <a href={`https://chat.jobwits.com.tw/app/`} target="_blank" style={aboutStyle.modalSubTitleForReference} >More Reference</a>
                            </Modal.Body>

                            <Modal.Footer style={aboutStyle.modalFooter} >
                                <span style={aboutStyle.modalFooterText} >jasonMini:~ jasonsiuaw$ {semi && (` |...`)}</span>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 5 }}>
                        <Modal.Dialog >
                            <Modal.Header style={aboutStyle.modalHeader} >
                                <Modal.Title style={aboutStyle.modalTitle} >Backend Developer</Modal.Title>
                                <span style={aboutStyle.modalText} >2021/1/1 to 2021/3/31</span>
                            </Modal.Header>

                            <Modal.Body style={aboutStyle.modalBody} >
                                <span style={aboutStyle.modalMainTitle}>What have I Do???</span><br></br>
                                <a href={`https://aws.amazon.com/?nc1=h_ls`} target="_blank" style={aboutStyle.modalSubTitle} >AWS :</a><img src={aws} style={aboutStyle.logoImage}></img><br></br>
                                <span style={aboutStyle.modalText} >Lambda serverless With Python + APIGateway</span><br></br>
                                <span style={aboutStyle.modalText} >TCP Server With NodeJS</span><br></br>
                                <span style={aboutStyle.modalText} >DynamoDB</span><br></br>
                                <span style={aboutStyle.modalText} >S3 For Data storage</span><br></br>
                                <span style={aboutStyle.modalText} >SES</span><br></br>
                                <a href={`https://firebase.google.com/`} target="_blank" style={aboutStyle.modalSubTitle} >Firebase :</a><img src={firebase} style={aboutStyle.logoImage}></img><br></br>
                                <span style={aboutStyle.modalText} >Web Hosting</span><br></br>
                                <span style={aboutStyle.modalText} >FCM Notification</span><br></br>
                                <a href={`https://404`} target="_blank" style={aboutStyle.modalSubTitle} >Other :</a><img src={other} style={aboutStyle.logoImage}></img><br></br>
                                <span style={aboutStyle.modalText} >every8d SMS Notification</span><br></br>
                                <br></br>
                                <a href={`https://404`} target="_blank" style={aboutStyle.modalSubTitleForReference} >More Reference</a>
                            </Modal.Body>

                            <Modal.Footer style={aboutStyle.modalFooter} >
                                <span style={aboutStyle.modalFooterText} >jasonMini:~ jasonsiuaw$ {semi && (` |...`)}</span>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About