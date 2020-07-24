import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, searchData } from '../Redux/ActionGenerators/index';
import Logo from '../Assets/img/logo.png';
import {
  Card,
  Row,
  Col,
  InputGroup,
  FormControl,
  Container,
  Button,
} from 'react-bootstrap';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  handleSubmit = (e) => {
    this.props.dispatch(searchData());
    this.props.dispatch(fetchData(this.state.userInput));
  };
  render() {
    return (
      <Container className='cardDeck'>
        <Row>
          <Col>
            <img src={Logo} alt='' />
          </Col>
        </Row>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Enter Name'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
            onChange={this.handleChange}
            value={this.state.userInput}
          />
          <InputGroup.Append>
            <Button variant='outline-secondary' onClick={this.handleSubmit}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>

        {this.props.item.map((data) => (
          <Row key={data.char_id}>
            <Col>
              <Card>
                <Card.Img variant='top' src={data.img} />
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = ({ items, loading, error }) => ({
  item: items,
  loading: loading,
  error: error,
});
export default connect(mapStateToProps)(Home);
