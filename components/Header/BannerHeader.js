export default function BannerHeader() {
    return (
        <div> 
            <img src="/assets/images/banner2.jpg" alt="Banniere" />
            <style jsx> 
                {
                    `
                        @media only screen and (max-width : 850px) {
                            img{
                              width: 100%;
                              height: 200px;
                            }
                         }
                    `
                }
            </style>
        </div>
    )
}