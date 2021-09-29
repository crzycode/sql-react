import axios from 'axios';
import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:'',
           classes:'',
           marks:''
        };
      };
      changeHandler = (e) =>{
          this.setState({[e.target.name]: e.target.value})
      }
      submitHandler = (e) =>{
          e.preventDefault();
          console.log(this.state)
          axios.post('/Home/Create',this.state)
          .then(response =>{
              console.log(response)
          })
          .catch(error =>{
              console.log(error)
          })
      }
    render() {
        const {name, classes,marks}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
        <div>
          <input type="text" name="name" value={name}
          onChange={this.changeHandler}
          />
        </div>
        <div>
          <input type="text" name="classes" value={classes}
           onChange={this.changeHandler}
          />
        </div>
        <div>
          <input type="text" name="marks" value={marks}
           onChange={this.changeHandler}
          />
        </div>
        <button type="submit">submit</button>
      </form>
            </div>
        )
    }
}
