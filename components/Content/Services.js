export default function Services() {
    return (
        <div className="content">
            <h1 data-aos="fade-down"> NOS SERVICES ET REALISATIONS </h1>
            <hr />
            <div className="cards">

                <div className="card" data-aos="fade-right">
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

                <div className="card" data-aos="zoom-in-up">
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

                <div className="card" data-aos="fade-left">
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
                            margin: 2%;
                        }

                        .image {
                            margin-right : auto;
                        }

                        .blanche {
                            color : #e67e22;
                            text-align : center;
                            font-size : xx-large;
                            font-family : lemon;
                        }

                        a {
                            font-family : lemon;
                        }

                        .card-image, .card-content, .blanche {
                            background-color : white;
                        }

                        h1 {
                            text-align : center;
                            color : #e67e22;
                            font-weight : bold;
                            font-family : lemon;
                        }

                        hr {
                            width : 50%;
                            margin-left : auto;
                            margin-right : auto;
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
                        }
                    `
                }
            </style>
        </div>
    )
}