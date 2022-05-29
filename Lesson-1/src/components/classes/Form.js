// import React from "react"; // Необходим для создания классового компонента
import React, {Component} from "react"; // Можем с помощью деструктуризации импортировать сразу Component

/**
 * Создаём и экспортируем класс Form и наследуем свойства от класса React.Component
 * Состояние компонента (state) позволяет передать туда какие-то данные и чтобы компонент следил за изменением этих данных. И при изменении этих данных перерисовался.
 * */
export class Form extends Component {
   /**
    * state - объект наследованный от Component
    * */
   state = {
      name: 'gb',
      count: 0
   }
   /**
    * С помощью handleClick меняем count
    * */
   handleClick = () => {
      this.setState({count: this.state.count + 1})
   }

   /**
    * render - обязательная функция и должна что-то возвращать
    * React.Fragment - позволяет обернуть несколько тегов для отрисовки т.к. без него можно передать только 1 тег. (Можно использовать <></>)
    * */
   render() {
      return (
         <>
           <div>Hello, {this.state.count}</div>
           <button onClick={this.handleClick}>click</button>
         </>
      )
   }
}