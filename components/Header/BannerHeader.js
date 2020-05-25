import React, {Component} from 'react';

class BannerHeader extends Component {

    constructor() {
        super();
        this.state = {
            loading : true,
            isMobile : false
        }
    }

    componentDidMount() {
        let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        this.setState({
            loading : false,
            isMobile : isMobile
        });
    }

    render() {
        const {loading, isMobile} = this.state;

        return (
            <React.Fragment>
                {
                    !!loading && <div> Chargement ... </div>
                }
                {
                    !loading && !isMobile && 
                        <div className="content">
                            <img src="/assets/images/banner3.jpg" alt="Banniere de la société Excell'Toit" />
                        </div>
                }
                {
                    !loading && !!isMobile &&
                        <div className="content">
                            <img src="/assets/images/banner3_mob.jpg" alt="Banniere version mobile de la société Excell'Toit" />
                        </div>
                }
            </React.Fragment>
        )
    }

}

export default BannerHeader;