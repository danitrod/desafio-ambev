import React, { useState } from 'react';
import api from '../../services/api';
import styles from './Recommendation.module.css';
import Header from '../header/Header';
import Mix from '../mix/Mix';
import { formatDate2 } from '../../util/formatDate';

const Recommendation = () => {
    const [values, setValues] = useState({});
    const [mixes, setMixes] = useState([]);

    const formFields = [
        {
            type: 'select',
            placeholder: 'Cidade',
            options: ['São Paulo'],
            value: values['Cidade']
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
            ],
            value: values['Bairro']
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
            ],
            value: values['Tamanho']
        },
        {
            type: 'select',
            placeholder: 'Perfil',
            options: ['Baixo', 'Médio', 'Alto'],
            value: values['Perfil']
        },
        {
            type: 'select',
            placeholder: 'Tipo de estabelecimento',
            options: [
                'Academia',
                'Bar/pub',
                'Casa de festas',
                'Restaurante',
                'Padaria',
                'Mercearia',
                'Lanchonete',
                'Barzinho',
                'Loja de conveniência',
                'Mercado',
                'Restaurante corporativo',
                'Supermercado'
            ].sort(),
            value: values['Tipo de estabelecimento']
        },
        {
            type: 'input',
            inputType: 'date',
            min: formatDate2(new Date()),
            placeholder: 'Dia da entrega',
            value: values['Dia da entrega']
        },
        {
            type: 'input',
            inputType: 'number',
            min: 0,
            max: 23,
            step: 1,
            placeholder: 'Hora da entrega',
            value: values['Hora da entrega']
        },
        {
            type: 'input',
            inputType: 'number',
            min: 0,
            max: 59,
            step: 1,
            placeholder: 'Minuto da entrega',
            value: values['Minuto da entrega']
        }
    ];

    const buttonClickHandler = e => {
        e.preventDefault();
        const fetchMixes = async () => {
            let perfil;
            if (values.Perfil === 'Baixo') {
                perfil = 1;
            } else if (values.Perfil === 'Médio') {
                perfil = 2;
            } else {
                perfil = 3;
            }
            const input = {
                ...values,
                Perfil: perfil
            };
            console.log(input);
            const response = await api.post('/recommend', input);
            if (response.data.err === false) {
                setMixes(response.data.mixes);
            }
        };
        fetchMixes();
    };

    const valueChangeHandler = (e, v) => {
        let newValue = values;
        newValue[v] = e.target.value;
        setValues(newValue);
    };

    return (
        <>
            <Header title='Novo pedido' />
            <div className={'container ' + styles.container}>
                <div className={styles.form}>
                    <p>
                        Preencha as informações do estabelecimento para
                        sugerirmos os produtos que mais combinam com ele!
                    </p>
                    <form>
                        <div className={styles.select}>
                            {formFields.map((field, index) => {
                                if (field.type === 'select') {
                                    let style = null;
                                    if (
                                        field.placeholder ===
                                        'Tipo de estabelecimento'
                                    ) {
                                        style = styles.establishment;
                                    }
                                    return (
                                        <select
                                            className={style}
                                            defaultValue={field.placeholder}
                                            key={field.placeholder}
                                            value={field.value}
                                            onChange={e =>
                                                valueChangeHandler(
                                                    e,
                                                    field.placeholder
                                                )
                                            }
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
                                } else if (field.type === 'input') {
                                    let optionalWarning = null;
                                    if (index === 5) {
                                        optionalWarning = <h3>Opcional</h3>;
                                    }
                                    return (
                                        <>
                                            {optionalWarning}
                                            <div key={field.placeholder}>
                                                <div
                                                    key={field.placeholder}
                                                    className={styles.input}
                                                >
                                                    <h4>{field.placeholder}</h4>
                                                    <input
                                                        type={field.inputType}
                                                        min={field.min}
                                                        max={field.max}
                                                        step={field.step}
                                                        value={field.value}
                                                        onChange={e =>
                                                            valueChangeHandler(
                                                                e,
                                                                field.placeholder
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    );
                                }
                                return null;
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
                    {mixes.length !== 0 ? (
                        mixes.length === 1 ? (
                            <h3>Mix sugerido</h3>
                        ) : (
                            <h3>Mixes sugeridos</h3>
                        )
                    ) : null}
                    <div className={styles.mixes}>
                        {mixes.map(mix => {
                            return (
                                <Mix
                                    key={mix.cdd}
                                    products={mix.products}
                                    cdd={mix.cdd}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recommendation;

// Adicionar: Tempo de entrega, preço total e unitário no mix, adicionar/remover no mix
// Tirar: Preço no indisponível
