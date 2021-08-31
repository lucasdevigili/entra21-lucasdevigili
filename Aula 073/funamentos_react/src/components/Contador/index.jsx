import React from "react";
import { Botao }  from "./Botao"

export class Contador extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                contador: props.inicial
        };
    }

    incrementar = () => {
        this.setState(state => ({
            contador: state.contador + 1
        }));
    }

    decrementar = () => {
        this.setState(state => ({
            contador: state.contador - 1
        }));
    }

    render() {
        return (
            <>
                <p>{this.state.contador}</p>
                <Botao legenda="+" onClick={this.incrementar} />
                <Botao legenda="-" onClick={this.decrementar} />
            </>
        )
    }
}

Contador.defaultProps = {
    inicial: 0
};