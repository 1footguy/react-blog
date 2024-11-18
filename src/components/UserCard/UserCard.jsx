export default function UserCard(props) {
    console.log(props);

    return (
        <div>
            <h3>{props.item.nome}</h3>
            <p>Idade: {props.item.idade}</p>
            <p>Cargo: {props.item.cargo}</p> 
        </div>
    )
}