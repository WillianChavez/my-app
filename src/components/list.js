import ListItem from './listItem.js'
import '../styles/list.css'

export default function List(props) {
    const numbers = props.numbers
    const numberList = numbers.map((number) => <ListItem key={number.id} value={number.value} />)

    return <ul className="list">{numberList}</ul>
}
