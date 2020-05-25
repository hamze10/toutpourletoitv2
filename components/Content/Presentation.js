export default function Presentation() {
    return (
        <div className="content"> 
            <h1> QUI SOMMES-NOUS ? </h1>
            <hr />
            <p> <span className="police"> Excell'Toit </span> est une société composée de couvreurs agrées et expérimentés et d'ouvriers qualifiés.
                Nous offrons différents services de qualité à des prix corrects aux clients désireux d'effectuer des travaux de toiture.
            </p>
            <p>
                <span className="police"> Excell'Toit </span> vous garantit une durabilité de vos travaux à long terme. De la rénovation à la transformation et à la
                construction de votre toiture, découvrez toutes nos réalisations au travers de ce site. Nous intervenons
                également en cas d'urgence et de dépannage.
            </p>
            <p>
                <span className="police"> Excell'Toit </span> est à votre disposition pour toute information supplémentaire ou devis gratuit au
                <b> <a href="tel:+32489501357"> 0489 50 13 57 </a> </b> ou par e-mail <b> <a href="mailto:excelltoit@hotmail.com"> excelltoit@hotmail.com </a> </b>
            </p>
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

                        @font-face {
                            font-family : futuraBold;
                            src : url('/assets/fonts/FuturaPTBold.otf');
                            font-display: swap;
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
                            font-family : trash, sans-serif;
                        }

                        .police {
                            font-family : futuraBold, sans-serif;
                            font-size : x-large;
                            font-weight : bold;
                        }

                        p {
                            font-family : futuraLight, sans-serif;
                            font-size : x-large;
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
                                font-size : medium;
                            }
                            
                            .police {
                                font-size : large;
                            }
                        }
                    `
                }
            </style>
        </div>
    )
}