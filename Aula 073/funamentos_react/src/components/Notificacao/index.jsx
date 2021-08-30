export function Notificacao(props) {
    const notificacoes = props.mensagens || [];
    return (
        <>
            {
                notificacoes.length > 0 &&
                <p>Você tem {notificacoes.length} notificações</p>
            }
        </>
    );
}