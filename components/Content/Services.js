import React, { Component } from 'react';
import Gallery from './Gallery';

class Services extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            items: [],
            activeItem: []
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        fetch("/assets/data/data.json")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data
                })
            })
    }

    openModal(compatriement, soustitre) {
        const { items } = this.state;
        let newItems = [];
        for (let item in items) {
            let it = items[item];
            if (it.compatriement.toLowerCase() === compatriement && it.soustitre.toLowerCase() === soustitre) {
                newItems.push(it);
            }
        }
        this.setState({
            modal: true,
            activeItem: newItems
        })
    }

    closeModal() {
        this.setState({
            modal: false
        })
    }

    render() {
        const { modal, activeItem } = this.state;
        let titre;
        if (activeItem.length > 0) {
            titre = activeItem[0].compatriement + " - " + activeItem[0].soustitre;
        } else {
            titre = "Aucun chantier trouvé.";
        }
        return (
            <div className="cont">
                <div className={`modal ${modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">
                                <span className="titre-modal"> {titre} </span>
                            </p>
                            <button className="delete" aria-label="close" onClick={this.closeModal}></button>
                        </header>
                        <section className="modal-card-body">
                            {
                                activeItem.map(item =>
                                    <Gallery key={item.id} item={item} />
                                )
                            }
                        </section>
                    </div>
                </div>
                <div id="services" className="content">
                    <h1> NOS SERVICES ET REALISATIONS </h1>
                    <hr />
                    <div className="cards">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-256x256">
                                    <img src="/assets/images/card-reno.webp" alt="Image renovation" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="content blanche">
                                    Rénovation
                            </div>
                            </div>
                            <footer className="card-footer">
                                <a role="button" className="card-footer-item" onClick={() => this.openModal("rénovation", "tuiles")}>Tuiles</a>
                                <a role="button" className="card-footer-item" onClick={() => this.openModal("rénovation", "ardoises")}>Ardoises</a>
                                <a role="button" className="card-footer-item" onClick={() => this.openModal("rénovation", "zinc")}>Zinc</a>
                                <a role="button" className="card-footer-item" onClick={() => this.openModal("rénovation", "roofing")}>Roofing</a>
                            </footer>
                        </div>

                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-256x256">
                                    <img src="/assets/images/card-transfo.webp" alt="Image transformation" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="content blanche">
                                    Transformation
                            </div>
                            </div>
                            <footer className="card-footer">
                                <a role="button" className="card-footer-item" onClick={() => this.openModal("transformation", "chien assis")}>Chien assis</a>
                                <a role="button" className="card-footer-item" onClick={() => this.openModal("transformation", "rehaussement")}>Rehaussement</a>
                            </footer>
                        </div>

                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-256x256">
                                    <img src="/assets/images/card-const.webp" alt="Image construction" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="content blanche">
                                    Construction
                            </div>
                            </div>
                            <footer className="card-footer">
                                <a role="button" className="card-footer-item" onClick={() => this.openModal("construction", "nouvelle toiture")}>Nouvelle toiture</a>
                            </footer>
                        </div>
                    </div>
                </div>

                <style jsx>
                    {
                        `
                            @font-face {
                                font-family : trash;
                                src : url('/assets/fonts/TrashHand.TTF');
                                font-display: swap;
                            }

                            @font-face {
                                font-family : futuraLight;
                                src : url('/assets/fonts/FuturaPTLight.otf');
                                font-display: swap;
                            }

                            .cont {
                                margin-bottom : 1%;
                            }
                            
                            #services {
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
                                margin-left : auto;
                            }
    
                            .blanche {
                                color : #e67e22;
                                text-align : center;
                                font-size : xx-large;
                                font-family : trash, sans-serif;
                            }
    
                            a {
                                font-family : futuraLight, sans-serif;
                                font-size : xx-large;
                                font-weight : bold;
                                color : #e67e22;
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
                                font-family : trash, sans-serif;
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

                            .modal-card {
                                width : 90%;
                                height : 100%;
                            }
    
                            @media screen and (max-width: 600px) {
                                h1 {
                                    font-size : x-large;
                                    margin-top : 2%;
                                }
    
                                .card {
                                    width : 320px;
                                    margin-bottom : 4%;
                                }
    
                                a {
                                    font-size : large;
                                }
    
                                .blanche {
                                    font-size : x-large;
                                }
    
                                article {
                                    width : 100%;
                                }

                                .model-card {
                                    width : 100%;
                                    height : 90%;
                                }

                                .titre-modal {
                                    font-size : medium;
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