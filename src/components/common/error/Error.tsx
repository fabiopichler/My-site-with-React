import React, { Component } from 'react';

export default class Error extends Component {

    render() {
        return (
            <section className="card mb-2">
                <header className="p-3">
                    <h2 className="mt-2 text-center">Página não encontrada</h2>
                </header>

                <div className="content px-3 mb-3 text-center">
                    <p>O conteúdo que você está tentando acessar não foi encontrado!</p>

                    <p>Verifique se digitou o endereço corretamente.</p>
                </div>
            </section>
        );
    }
}