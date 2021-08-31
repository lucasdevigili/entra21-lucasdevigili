import React from "react";

export class ValorAleatorio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valor: 0
        };
    }

    handleClick = () => {
        const ValorAleatorio = parseInt(Math.random() * (this.props.max - this.props.min)) + this.props.min;
        this.setState({ valor: ValorAleatorio });
    }

    render() {
        return(
            <>
                <p>{this.state.valor}</p>
                <button onClick= {this.handleClick}>Gerar valor</button>
            </>
        );
    }
}

ValorAleatorio.defaultProps = {
    min: 0,
    max: 100,
}