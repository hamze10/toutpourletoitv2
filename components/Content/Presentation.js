export default function Presentation() {
    return (
        <div className="content"> 
            <h1> QUI SOMMES-NOUS ? </h1>
            <hr />
            <p> Tout pour le toit est une société composée de couvreurs agrées et expérimentés et d'ouvriers qualifiés.
                Nous offrons différents services de qualité à des prix corrects aux clients désireux d'effectuer des travaux de toiture.
            </p>
            <p>
                Tout pour le toit vous garantit une durabilité de vos travaux à long terme. De la rénovation à la transformation et à la
                construction de votre toiture, découvrez toutes nos réalisations au travers de ce site. Nous intervenons
                également en cas d'urgence et de dépannages.
            </p>
            <p>
                Tout pour le toit est à votre disposition pour toute information supplémentaire ou devis gratuit au
                <span className="gras"> +32 (0)2 521 97 10 </span> ou par e-mail <span className="gras"> toutpourletoit@gmail.com </span>
            </p>
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
                            margin-left : 10%;
                            margin-right : 10%;
                        }

                        h1 {
                            text-align : center;
                            margin-bottom : 3%;
                            color : #e67e22;
                            font-weight : bold;
                            font-family : trash;
                        }

                        p {
                            font-family : lemon;
                        }

                        .gras {
                            font-weight : bold;
                        }

                        hr {
                            width : 50%;
                            margin-left : auto;
                            margin-right : auto;
                        }

                        @media screen and (max-width: 600px) {
                            div {
                                margin-left : 0%;
                                margin-right : 0%;
                            }

                            h1 {
                                font-size : x-large;
                            }

                            p {
                                font-size : small;
                            }
                        }
                    `
                }
            </style>
        </div>
    )
}