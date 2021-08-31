import React from "react";
import { Square } from "../Square"

export class Board extends React.Component {
    render(i) {
        return <Square value={i} />;
    }
}    