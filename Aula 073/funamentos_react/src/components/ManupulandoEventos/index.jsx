export function ManipulandoEventos(props) {
    function handleClick() {
        alert("Você clicou no botão");
    }

    function handleMouseOver() {
        console.log("Você entrou no botão");
    }

    function handleMouseLeave() {
        console.log("Você saiu do batão");
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Formulário enviado");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"/>
            <button 
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >Clique em mim!</button>
        </form>
    );
}
