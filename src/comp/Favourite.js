import React, { Component } from 'react'
import axios from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateForm from './UpdateForm.js'
export class Favourite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            index:-1, 
            name:'',
            img:'',
            id:'',

        }
    }
    componentDidMount = async () => {
        // const url=process.env.SERVER_URL;
        // const url = process.env.MONGO_URL;
        const url =`https://examcocktailsbackend.herokuapp.com`;
        console.log(url)
        const favData = await axios.get(`${url}/getFav`);
        this.setState({
            favData: favData.data
        })
        console.log(favData.data)
    }
    delete=async(id)=> {
        // const url =  process.env.MONGO_URL;
        const url =`https://examcocktailsbackend.herokuapp.com`;
        console.log(url);
        console.log('in delete function');
         const newData=await axios.delete(`${url}/deleteFav?id=${id}`);
         this.setState({
            favData: newData.data
        })
        console.log(newData.data)

    }
    showUpdateForm=(idx)=> {
        this.setState({
            show:true,
            index:idx,
            name:this.state.favData[idx].name,
            img:this.state.favData[idx].img,
            id:this.state.favData[idx].id,

        })
    }

    handleClose= () =>{
        this.setState({
            show:false
        })
    }
    updateData=async(e)=>{
        e.preventDefault();
        
        const obj={
            name:e.target.name.value,
            img:e.target.img.value,
            id:this.state.favData[this.state.index]['_id'],
        }
        // const url = `${process.env.MONGO_URL}`;
        const url =`https://examcocktailsbackend.herokuapp.com`;
        console.log(obj)
        const newData=await axios.put(`${url}/updateDate`,obj);
        console.log(newData.data)
        this.setState({
            show:false,
            favData:newData.data
        })
    }

    render() {
        return (
            <>
                <Row xs={1} md={4} className="g-4">
                    {this.state.favData.map((item, idx) => (
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Button variant="primary" onClick={()=> this.delete(item._id)}>Delete</Button>
                                    <Button variant="primary" onClick={()=> this.showUpdateForm(idx)}>Update</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
    }
         </Row>
         <UpdateForm
         show={this.state.show}
         name={this.state.name}
         img={this.state.img}
         handleClose={this.handleClose}
         updateData={this.updateData}
         />
            </>
        )
    }
}

export default Favourite
