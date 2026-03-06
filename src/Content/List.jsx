function List({name, age, tech, gender, technologies:techs}){
    return (
        <li style={{listStyle: "none", border: "1px solid #333", padding: "1rem", borderRadius: "8px", overflow: 'hidden', cursor: 'pointer'}}>
            <h1 style={{textTransform: 'uppercase', marginBottom: '1rem', color: '#8e008e'}}>{name} ({gender})</h1>
            <div>
            <span>{tech} @ {age}</span>
          <span style={{display: 'flex', gap: '.4rem'}}> Technologies: {techs.map(tech=> <span key={tech}>{tech}</span>)} </span>

            </div>
        </li>
    )
}
export default List;