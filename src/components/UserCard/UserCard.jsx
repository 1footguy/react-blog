  export default function UserCard({nome, idade, cargo}) {
      return (
      <article>
          <h3>{nome}</h3>
          <p>Idade: {idade}</p>
          <p>Cargo: {cargo}</p> 
      </article>
      )
}