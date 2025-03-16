import assets from "../assets";
import './LeftNav.css';

function LeftNav() {
    return (
        <>
            <nav className="left-nav">
                <img id="game-logo" src={assets.cs2Logo} alt="cs2-logo"></img>
            
                <div className="manager-options">
                    <img src={assets.homeIcon} alt="home"></img>
                    <img src={assets.inboxIcon} alt="inbox"></img>
                    <img src={assets.calendarIcon} alt="schedule"></img>
                    <img src={assets.radarIcon} alt="tournaments"></img>
                    <img src={assets.squadIcon} alt="squad"></img>
                    <img src={assets.trainingIcon} alt="training"></img>
                    <img src={assets.marketIcon} alt="market"></img>
                    <img src={assets.teamInfoIcon} alt="team-info"></img>
                    <img src={assets.financesIcon} alt="finances"></img>
                </div>
            
                <img id="conf-wheel" src={assets.settingsIcon} alt="conf-wheel"></img>
            </nav>
        </>
    );
}

export default LeftNav;