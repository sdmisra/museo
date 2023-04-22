import React from 'react'
import {findSomeArt, getThatArt} from '../../apiCalls'
import './SearchBox.css'

function SearchBox {


  handleChange = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value});
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log(this.state.formValue)
      this.props.querySearch(this.state.formValue)
    }
  }
  
  clearFilters = (event) => {
    event.preventDefault();
    this.setState({
      formValue: ''
    })
  }

  render() {
  return (
    <footer>
      <form >
      <div className='input-box'>
        <input type='text' 
          className='search-box' 
          name='search-box'
          placeholder='Search the Met...' 
          value={this.state.formValue} 
          onChange={event => this.handleChange(event)}>
        </input>
      </div>
    <button onClick={()=> this.props.querySearch(this.state.formValue)}>Get Art!</button>
    </form>
  </footer>
  )
}}

export default SearchBox;