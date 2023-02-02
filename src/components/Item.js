import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

//criando um tipo padrão para as props (reparar a diferenca escrita propTypes e PropTypes em cada caso.)
Item.propTypes ={
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

//informa um valor padrão caso não seja preenchido.
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item