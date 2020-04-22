import Lottie from 'react-lottie';
import animationData from '../../public/assets/images/gift-box.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export default function TopHeader() {
    return (
        <nav>
            <div className="nav-logo">
                <img src="/assets/images/logo.png" alt="Logo de tout pour le toit." width="180" height="180" />
            </div>

            <div className="nav-texte">
                <Lottie 
                    options={defaultOptions} 
                    height={80}
                    width={80}
                />
                <p>
                    <span className="devis-gratuit"> Devis gratuit <br /> </span>
                    <span className="devis-numero"> +32 (0)2 521 97 10 </span>
                </p>
            </div>

            <style jsx>
                {
                    `
                        nav {
                            display : flex;
                            position: sticky;
                            top: 0;
                            left: 0;
                            right: 0;
                            background-color : white;
                            align-items : center;
                            justify-content : space-between;
                            padding-right : 1%;
                        }

                        .nav-texte {
                            display : flex;
                            align-items : center;
                        }

                        .devis-gratuit {
                            color : #f39c12;
                            font-weight : bold;
                            font-size : large;
                        }
                        
                        .devis-numero {
                            font-size : small;
                        }

                        @media screen and (max-height: 850px) {
                            nav {
                                padding-right : 2%;
                            }

                            .devis-gratuit {
                                font-size : medium;
                            }
                            
                            .devis-numero {
                                font-size : x-small;
                            }
                        }
                    `
                }
            </style>
        </nav>
    )
}