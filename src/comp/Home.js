import React, { Component } from 'react'
import axios from 'axios'
import Item from './Item'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            allData:[]
        }        
    }
    componentDidMount=async()=> {
        // const url=process.env.SERVER_URL;
        //   const url= process.env.MONGO_URL;
        const url =`https://examcocktailsbackend.herokuapp.com`;
        console.log(url)
        const newData=await axios.get(`${url}/all`); 
        console.log(newData.data)
        this.setState({
            allData: newData.data
        })
    }
    addFav= async(idx)=> {
        console.log('in Fav method')
        // const url= process.env.MONGO_URL
        const url =`https://examcocktailsbackend.herokuapp.com`;
        console.log(url)
        const obj={
            name:this.state.allData[idx].strDrink,
            img:this.state.allData[idx].strDrinkThumb,
            id:this.state.allData[idx].idDrink,
        }
        console.log(obj)
        await axios.post(`${url}/addFav`,obj); 
      
    }
    render() {
        return (
            <>
            <Row xs={1} md={4} className="g-4">
          {this.state.allData.map((item,idx)=>
             <Col>
             <Item 
             key={idx}
             item={item}
             addFav={this.addFav}
             idx={idx}
             />
             </Col>
             )
            }
            </Row>
            </>
        )
    }
}

export default Home
