import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.generateRandomKey = this.generateRandomKey.bind(this);
    }

    generateRandomKey() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    render() {
        const { item } = this.props;
        return (
            <div className="content">
                <h1>{item.nom} - {item.titre}</h1>
                <div>
                    <h3> Avant </h3>
                    {item.images.before.map(image =>
                        <img key={this.generateRandomKey()} src={image} alt="test" width="200" height="200" />
                    )}

                    <h3> Après </h3>
                    {item.images.after.map(image =>
                        <img key={this.generateRandomKey()} src={image} alt="test" width="200" height="200" />
                    )}

                </div>

                <style jsx>
                    {
                        `
                            @font-face {
                                font-family : futuraLight;
                                src : url('/assets/fonts/FuturaPTLight.otf');
                                font-display: swap;
                            }

                            .content {
                                display : flex;
                                flex-direction : column;
                            }

                            img {
                                margin-right : 1%;
                            }

                            img:hover {
                                -ms-transform: scale(3.5); /* IE 9 */
                                -webkit-transform: scale(3.5); /* Safari 3-8 */
                                transform: scale(3.5);
                                transition-delay: 0.4s; 
                            }

                            h1, h3 {
                                font-family : futuraLight, sans-serif;
                            }

                            @media screen and (max-width: 600px) {
                                img:hover {
                                    -ms-transform: scale(1.5); /* IE 9 */
                                    -webkit-transform: scale(1.5); /* Safari 3-8 */
                                    transform: scale(1.5);
                                }
                            }
                        `
                    }
                </style>
            </div>
        )
    }
}

export default Gallery;