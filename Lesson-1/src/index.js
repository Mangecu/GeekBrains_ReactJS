import React from 'react'; // подключение библиотеки React
import ReactDOM from 'react-dom/client'; // позволяет подключить React в наше web-приложение
import {App} from "./App"; // импортируем компонент App из App.js

const root = ReactDOM.createRoot(document.getElementById('root')); // ищем div с id=root, для дальнейшей работы с ним
/*
/!**
 * Для создания react-элемента нужно:
 * 1. Прописать переменную React (куда импортировали 'react')
 * 2. Прописываем метод createElement
 * 3. Передаём сначала тег, который хотим создать, потом передаются все атрибуты и далее содержимое нашего тега.
 * Замечание: вложенный элемент должен создаваться перед элементом, в который вкладывается
 * *!/

const p = React.createElement(
'p',
{className: 'element_2'},
'Кажется, мы подключили React'
);

const h1 = React.createElement(
'h1',
{className: 'element_1'},
      p
);*/
//___________________________________________________________________


/*/!**
 * App - jsx-элемент
 * По сути это компонент, а по другому это функция
 * компонент App возвращает разметку
 * *!/
const App = () => {
   return <h1>hello, GB</h1>
}*/


/**
 * В функцию render мы можем передать react-элемент для отрисовки
 * Компонент в render можно передавать в виде вызова функции - root.render(App()), но
 * удобнее передавать в виде тегов
 * */
root.render(<App />);




