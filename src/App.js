import React, { Component } from 'react';
import './App.css';



import TodoList from './components/TodoList';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          items: [{text:'todo1', id: '33445'}],
          noteText : '',
      };
 
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({noteText: e.target.value})
  }

  handleSubmit(e){
      e.preventDefault();
      if(!this.state.noteText.length){
        return;
      }

      const newItem ={
        text: this.state.noteText,
        id: Date.now()
      };

      this.setState(prevState => ({
          items: prevState.items.concat(newItem),
          noteText: ''
      }));
  }




  render() {
     

    return (
      <div className="App">
         
          <div className="container" >
              <div className="header">React Todo Application</div>
              <TodoList items={this.state.items}/>

            <form >
              <input type="text"
                     placeholder="What needs to be done? ..."
                     ref={((input) => {this.textInput = input})}
                     className="textInput"
                     value={this.state.noteText}
                     onChange={this.handleChange}
              />
               <div  className="btn" onClick={this.handleSubmit}> + </div>
            </form>
          </div>

      </div>
    );
  }


}

export default App;
