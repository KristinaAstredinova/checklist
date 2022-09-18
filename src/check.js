import { Component } from "react";
import icon from "./icon.png"


export class Check extends Component{
    state = {
userInput :"",
checkList: []
    }

    
    onChangeEvent(e){
       this.setState({userInput: e})
    }
    adItem(input){
        if(input === ""){
            alert("Пожалуйста введите пункт")
        }
        else{
        let listArray = this.state.checkList;
        listArray.push(input);
        this.setState({checkList: listArray, userInput:""})
    }
}
delete(){
    let listArray = this.state.checkList;
    listArray = [];
    this.setState({checkList:listArray})
}
    cross(event){
        const li = event.target;
        li.classList.toggle("cross")

    }
    submitEnter(e){
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submitEnter}>
            <div className="container">
            <input 
            placeholder="Что вы запланировали сегодня??" 
            type ="text"
            onChange = {(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.adItem(this.state.userInput)} className="btn-add">Создать задачу</button>
            </div>
            <ul>
                {this.state.checkList.map((item, index) =>(
                <li onClick={this.cross} key= {index}>
                   
                    <img src = {icon} width="50px" alt = "icon"/>
                    {item}</li>
                ))

                
            }
            </ul>
            <div className="container">
            <button onClick={() => this.delete()} className = "btn-delete">Удалить</button>
            </div>
            </form>
            </div>
        )
    }
}