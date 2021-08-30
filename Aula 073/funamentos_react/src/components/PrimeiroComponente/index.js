import "./style.css";

export function PrimeiroComponente() {
	const menssagem = ":D"
    return (
        <>
            <h2>Primeiro componente</h2>
            <p className="emoji">{ menssagem }</p>
        </>
    );
}
