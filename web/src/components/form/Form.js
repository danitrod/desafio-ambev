import React from 'react';
import styles from './Form.module.css';

const Form = () => {
    return (
        <form className={'container ' + styles.form}>
            <h1>Nova venda</h1>
            <p>
                Preencha as informações do estabelecimento para obter uma
                recomendação de produtos próximos prontos para vender!
            </p>
            <select>
                <option disabled selected>
                    Cidade
                </option>
                <option>São Paulo</option>
            </select>
            <select>
                <option disabled selected>
                    Bairro
                </option>
                <option>Butantã</option>
                <option>Moema</option>
                <option>Vila Andrade</option>
                <option>Vila Madalena</option>
                <option>Vila Leopoldina</option>
            </select>
            <select>
                <option disabled selected>
                    Tipo de estabelecimento
                </option>
                <option>Bar</option>
                <option>Boteco</option>
                <option>Supermercado</option>
            </select>
            <select>
                <option disabled selected>
                    Tipo de estabelecimento
                </option>
                <option>Bar</option>
                <option>Boteco</option>
                <option>Supermercado</option>
            </select>
            <select>
                <option disabled selected>
                    Tamanho
                </option>
                <option>Muito pequeno </option>
                <option>Pequeno</option>
                <option>Médio</option>
                <option>Grande</option>
                <option>Muito grande</option>
            </select>
            <button>Analisar</button>
        </form>
    );
};

export default Form;
