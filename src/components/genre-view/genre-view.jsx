import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Col, Container, Row } from 'react-bootstrap';

const url = 'https://movieapi-0162.herokuapp.com/';

class GenreView extends React.Component {
    state = { genre: {} } 

    componentWillMount() {
        const url_ = `${url}movies/genre/${window.location.href.split("/genre/")[1].replace("%20", " ")}`;
        axios.get(`${url_}`, {
            headers : {
              Authorization : 'Bearer '+localStorage.getItem('token')
            }
          }).then(result=>this.setState({genre: result.data}) )
          .catch(function (error) {
            console.log(error);
          });
        }

    render() { 
        const { onBackClick } = this.props;
        const { genre } = this.state;
        return (
            <Container className="director-view">
                <Row>
                    <Col className="label">Genre: </Col>
                    <Col className="value">{genre.Name}</Col>
                </Row>
                <Row>
                    <Col className="label">Dsecription: </Col>
                    <Col className="value">{genre.Description}</Col>
                </Row>
            <Button onClick={() => { window.location.replace("/movies") }} variant="warning">Back</Button> 
            </Container>
        );
    }
}

 
export default GenreView;