import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Col, Container, Row } from 'react-bootstrap';

const url = 'https://movieapi-0162.herokuapp.com/';

class DirectorView extends React.Component {
    state = { director: {} } 

    componentWillMount() {
        const url_ = `${url}movies/director/${window.location.href.split("/director/")[1].replace("%20", " ")}`;
        axios.get(`${url_}`, {
            headers : {
              Authorization : 'Bearer '+localStorage.getItem('token')
            }
          }).then(result=>this.setState({director: result.data}) )
          .catch(function (error) {
            console.log(error);
          });
        }

    render() { 
        const { onBackClick } = this.props;
        const { director } = this.state;
        console.log(director)
        return (
            <Container className="director-view">
                <Row>
                    <Col className="label">Director: </Col>
                    <Col className="value">{director.Name}</Col>
                </Row>
                <Row>
                    <Col className="label">Bio: </Col>
                    <Col className="value">{director.Bio}</Col>
                </Row>
                <Row>
                <Col className="label">Birth: </Col>
                <Col className="value">{director.Birth}</Col>
                </Row>
            <Button onClick={() => { window.location.replace("/movies") }} variant="warning">Back</Button> 
            </Container>
        );
    }
}

// DirectorView.propTypes = {
//   director: PropTypes.shape({
//     Name: PropTypes.string.isRequired,
//     Bio: PropTypes.string.isRequired,
//     Birth: PropTypes.string.isRequired,
//     Death: PropTypes.string
//   }).isRequired
// };
 
export default DirectorView;