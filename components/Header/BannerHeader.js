export default function BannerHeader() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        return (
            <div className="content">
                <img src="/assets/images/banner3_mob.jpg" alt="Banniere" />
            </div>
        )
    }
    return (
        <div className="content">
            <img src="/assets/images/banner3.jpg" alt="Banniere" />
        </div>
    )
}