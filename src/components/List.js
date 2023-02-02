import Item from './Item'

//Fragments <> e </>
function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca='Volkswagen' ano_lancamento = {1937}/>
                <Item marca='Ferrari' ano_lancamento ={1947}/>
                <Item/>
            </ul>
        </>
    )
}

/*
Forma que utiliza a div desnecessariamente.
function List(){
    return(
        <div>
            <h1>MInha lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </div>
    )
}
*/

export default List