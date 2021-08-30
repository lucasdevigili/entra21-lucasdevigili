export function ParOuImpar(props) {
    return(
        <>
            {
                props.numeros % 2 === 0 ?
                <p>O número {props.numero} é Par</p> :
                <p>O número {props.numero} é Impar</p>
            }
        </>
    );
}