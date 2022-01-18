import ListItem from './listItem.js'
import '../styles/list.css'
import { themeContext } from '../themeContext.js'

export default function List(props) {
    const numbers = props.numbers
    const numberList = numbers.map((number) => {
        return <ListItem key={number.id} children={number.value} />
    })

    return <themeContext.Consumer>{(theme) => <ul className={`list ${theme}`}>{numberList}</ul>}</themeContext.Consumer>
}
