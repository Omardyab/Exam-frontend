import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
export class Item extends Component {
    render() {
        return (
            <>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{this.props.item.strDrink}</Card.Title>
                       
                        <Button variant="primary" onClick={()=> this.props.addFav(this.props.idx)}>add to Favourite</Button>
                    </Card.Body>
                </Card>
            </>


        )
    }
}

export default Item
