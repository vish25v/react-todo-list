import React,{Component} from 'react';

class TodoList extends Component{



    render(){
        //console.log(this.props);
        const styles ={
            todoList:{
                padding: '4px',
                border: '3px',
                color: '#adadad',
                background: '#fff',
                border: 'solid 1px #e9e9e9',
                cursor: 'pointer',
                boxshadow: '0px 0px 14px 0px rgba(0,0,0,0.1)',
                transition: 'transform .2s ease'
            }

        }
        return(
            <ul style={styles.todoList}>
                {this.props.items.map(item =>(
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }

}

export default TodoList;