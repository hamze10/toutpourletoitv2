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
        const { imagesavant, imagesapres, commune } = this.props;
        return (
            <div className="content">
                <h1>{commune}</h1>
                <div>
                    <h3> Avant </h3>
                    {imagesavant.map(image =>
                        <img key={this.generateRandomKey()} src={image} alt="test" width="200" height="200" />
                    )}

                    <h3> Après </h3>
                    {imagesapres.map(image =>
                        <img key={this.generateRandomKey()} src={image} alt="test" width="200" height="200" />
                    )}

                </div>

                <style jsx>
                    {
                        `
                            .content {
                                display : flex;
                                flex-direction : column;
                            }

                            img {
                                margin-right : 1%;
                            }
                        `
                    }
                </style>
            </div>
        )
    }
}

export default Gallery;