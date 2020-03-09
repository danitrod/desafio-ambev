import React from 'react';
import styles from './Recommendation.module.css';
import Header from '../header/Header';
import Mix from '../mix/Mix';

const Recommendation = () => {
    const formFields = [
        {
            type: 'select',
            placeholder: 'Cidade',
            options: ['São Paulo']
        },
        {
            type: 'select',
            placeholder: 'Bairro',
            options: [
                'Butantã',
                'Moema',
                'Vila Andrade',
                'Vila Madalena',
                'Vila Leopoldina'
            ]
        },
        {
            type: 'select',
            placeholder: 'Tamanho',
            options: [
                'Muito pequeno',
                'Pequeno',
                'Médio',
                'Grande',
                'Muito grande'
            ]
        },
        {
            type: 'select',
            placeholder: 'Preço',
            options: ['Baixo', 'Médio', 'Alto']
        },
        {
            type: 'select',
            placeholder: 'Tipo de estabelecimento',
            options: [
                'Bar/pub',
                'Loja de conveniência',
                'Mercado',
                'Restaurante corporativo',
                'Supermercado'
            ]
        }
    ];

    const buttonClickHandler = e => {
        e.preventDefault();
    };

    return (
        <>
            <Header title='Nova venda' />
            <div className={'container ' + styles.container}>
                <div className={styles.form}>
                    <p>
                        Preencha as informações do estabelecimento para
                        sugerirmos os produtos que mais combinam com ele!
                    </p>
                    <form>
                        <div className={styles.select}>
                            {formFields.map(field => {
                                return (
                                    <select
                                        defaultValue={field.placeholder}
                                        key={field.placeholder}
                                    >
                                        <option disabled>
                                            {field.placeholder}
                                        </option>
                                        {field.options.map(option => (
                                            <option key={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                );
                            })}
                        </div>
                        <button
                            type='submit'
                            onClick={e => buttonClickHandler(e)}
                        >
                            Analisar
                        </button>
                    </form>
                </div>
                <div className={styles.recommendation}>
                    <h3>Mixes sugeridos</h3>
                    <div className={styles.mixes}>
                        <Mix />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recommendation;
