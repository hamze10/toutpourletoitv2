export default function Footer() {
    return (
        <div className="content">
            <p>
                <span className="icone">
                    <i className="fas fa-phone-alt"></i>
                </span>
                <a href="tel:+32489501357"> 0489 50 13 57 </a>
            </p>

            <p className="mail">
                <span className="icone">
                    <i className="fas fa-envelope"></i>
                </span>
                <a href="mailto:excelltoit@hotmail.com"> excelltoit@hotmail.com </a>
            </p>
            <style jsx>
                {
                    `
                        @font-face {
                            font-family : futuraLight;
                            src : url('/assets/fonts/FuturaPTLight.otf');
                            font-display: swap;
                        }

                        div {
                            display : flex;
                            flex-direction : row;
                        }

                        p {
                            font-family : futuraLight, sans-serif;
                            width : 100%;
                            text-align : center;
                            font-size : large;
                        }

                        .icone {
                            margin-right : 1%;
                            color: #e67e22;
                        }

                        @media screen and (max-width: 600px) {
                            p {
                                font-size : medium;
                                text-align : center;
                            }

                            .mail {
                                font-size : medium;
                            }
                        }
                    `
                }
            </style>
        </div>
    )
}