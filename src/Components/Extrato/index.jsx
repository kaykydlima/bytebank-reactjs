import React from "react";
import { Box } from "../UI";
import {extratoLista} from "../../info.js"
import {ToogleButton} from "../UI"
import Items from "../Items";

const Extrato = () => {
    return(
        <Box>
            {extratoLista.updates.map(({id, type, from, value, date}) => {
                return(
                    <Items key={id} type={type} from={from} value={value} date={date} />
                );
            })}
            <ToogleButton>Ver Mais</ToogleButton>
        </Box>
    );
}

export default Extrato;