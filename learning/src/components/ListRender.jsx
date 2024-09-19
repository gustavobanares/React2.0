import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(['Gustavo', 'Bruno', 'Guilherme', 'Banares'])

  return (
    <div>
        <ul>
            {list.map((item) =>(
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender