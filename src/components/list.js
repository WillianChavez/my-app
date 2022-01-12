import ListItem from './listItem.js'
import '../styles/list.css'
import { themeContext } from '../themeContext.js'

export default function List(props) {
    const numbers = props.numbers
    const numberList = numbers.map((number) => <ListItem key={number.id} value={number.value} />)

    return <themeContext.Consumer>{(theme) => <ul className={`list ${theme}`}>{numberList}</ul>}</themeContext.Consumer>
}
