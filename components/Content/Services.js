import React, { Component } from 'react';

class Services extends Component {
    constructor() {
        super();
        this.state = {
            removeMess: false
        };
        this.removeMessage = this.removeMessage.bind(this);
    }

    removeMessage() {
        this.setState({
            removeMess: true
        });
    }

    render() {
        const { removeMess } = this.state;
        return (
            <div className="content">
                <h1> NOS SERVICES ET REALISATIONS </h1>
                <hr />
                { /*!removeMess &&
                    <article id="mess" className="message is-warning">
                        <button className="delete is-small" aria-label="delete" onClick={this.removeMessage}></button>
                        <div className="message-body">
                            Cliquez sur les différentes sections pour voir la description et les photos des différents chantiers.
                                </div>
                    </article> */
                }

                <div className="cards">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-256x256">
                                <img src="/assets/images/logo-reno.png" alt="Image renovation" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content blanche">
                                Rénovation
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href="#" className="card-footer-item">Tuiles</a>
                            <a href="#" className="card-footer-item">Ardoises</a>
                            <a href="#" className="card-footer-item">Zinc</a>
                            <a href="#" className="card-footer-item">Roofing</a>
                        </footer>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-256x256">
                                <img src="/assets/images/logo-transfo.png" alt="Image transformation" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content blanche">
                                Transformation
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href="#" className="card-footer-item">Chien assis</a>
                            <a href="#" className="card-footer-item">Rehaussement</a>
                        </footer>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-256x256">
                                <img src="/assets/images/logo-const.png" alt="Image construction" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content blanche">
                                Construction
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href="#" className="card-footer-item">Nouvelle toiture</a>
                        </footer>
                    </div>
                </div>

                <style jsx>
                    {
                        `
                            @font-face {
                                font-family : lemon;
                                src : url('/assets/fonts/LEMONMILK-Light.otf');
                            }
    
                            @font-face {
                                font-family : trash;
                                src : url('/assets/fonts/TrashHand.TTF');
                            }
    
                            div {
                                padding : 2%;
                                background-color : #ffe6cf;
                            }
    
                            .cards {
                                display : flex;
                                justify-content : center;
                                flex-wrap : wrap;
                            }
    
                            .card {
                                background-color : white;
                                width : 400px;
                                margin-left: 2%;
                                margin-right: 2%;
                                margin-bottom : 2%;
                            }
    
                            .image {
                                margin-right : auto;
                            }
    
                            .blanche {
                                color : #e67e22;
                                text-align : center;
                                font-size : xx-large;
                                font-family : trash;
                            }
    
                            a {
                                font-family : lemon;
                            }
    
                            a:link {
                                color : #e74c3c;
                            }
    
                            a:hover {
                                color : #f6e58d;
                            }
    
                            .card-image, .card-content, .blanche {
                                background-color : white;
                            }
    
                            h1 {
                                text-align : center;
                                color : #e67e22;
                                font-weight : bold;
                                font-family : trash;
                            }
    
                            hr {
                                width : 50%;
                                margin-left : auto;
                                margin-right : auto;
                            }
    
                            .message-body {
                                background-color : #fffbe4;
                            }
    
                            article {
                                width : 40%;
                            }
    
                            .delete {
                                float : right;
                                margin-top : 1%;
                                margin-right : 1%;
                            }
    
                            @media screen and (max-width: 600px) {
                                h1 {
                                    font-size : x-large;
                                    margin-top : 2%;
                                }
    
                                .card {
                                    width : 320px;
                                }
    
                                a {
                                    font-size : small;
                                }
    
                                .blanche {
                                    font-size : x-large;
                                }
    
                                article {
                                    width : 100%;
                                }
                            }
                        `
                    }
                </style>
            </div>
        )
    }
}

export default Services;