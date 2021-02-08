import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {

   constructor (props) {
       super(props)
       console.log(this);
       console.log("irem ");
   }
  test(){
      console.log("test");
  }
    render() {
        return (
            <div>
                <h3>Category List{this.props.title.info}</h3>
                <h4></h4>
                <ListGroup>
      <ListGroupItem onClick= {this.props.title.asd} tag="a"href="#">Cras justo odio</ListGroupItem>
      <ListGroupItem onClick= {this.test} tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
    </ListGroup>
            </div>
        )
    }
}
