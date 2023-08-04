import { useEffect, useState } from 'react'


function Names() {
    const [ names, setNames ] = useState([])

    function fetchNames() {
        const myRequest = new Request("http://127.0.0.1:3000/api");
        fetch(myRequest)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setNames(json);
            });
    }

    useEffect(() => {
            fetchNames()
    }, [] )

    const items = names.map(() => (obj) => {
        return (
            <li key={'id-' + index}>
                {obj.name}
                <button>Delete</button>
                </li>
            );
    });
            

    console.log(items);

    return (
        <>
            <ul>
                {items}
            </ul>
            <form>
                <p>
                    <input placeholder='Add a name' />
                    <input type="submit" value="Add" />
                </p>
            </form>
        </>
    )
}

export default Names;