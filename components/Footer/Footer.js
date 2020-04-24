export default function Footer() {
    return (
        <div className="content">
            <p>
                <span className="icone">
                    <i className="fas fa-phone-alt"></i>
                </span>
                +32 (0)2 521 97 10
            </p>

            <p className="mail">
                <span className="icone">
                    <i className="fas fa-envelope"></i>
                </span>
                toutpourletoit@gmail.com
            </p>
            <style jsx>
                {
                    `
                        @font-face {
                            font-family : lemon;
                            src : url('/assets/fonts/LEMONMILK-Light.otf');
                        }

                        div {
                            display : flex;
                            flex-direction : row;
                            
                        }

                        p {
                            font-family : lemon;
                            width : 100%;
                            text-align : center;
                        }

                        .icone {
                            margin-right : 1%;
                            color: #e67e22;
                        }

                        @media screen and (max-width: 600px) {
                            p {
                                font-size : small;
                                text-align : center;
                            }

                            .mail {
                                font-size : x-small;
                            }
                        }
                    `
                }
            </style>
        </div>
    )
}