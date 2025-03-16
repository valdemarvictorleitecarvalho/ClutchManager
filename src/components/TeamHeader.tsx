import assets from "../assets";
import './TeamHeader.css';

function TeamHeader() {
    return (
        <>
            <header className="header">
                <div className="finances-info">
                    <div className="cash">
                        <img src={assets.cashMoney} alt="cash-icon"></img>
                        <p>200.000,00</p>
                    </div>
                    <div className="expenses">
                        <img src={assets.monthExpenses} alt="expenses-icon"></img>
                        <p>10.000,00</p>
                    </div>
                </div>

                <div className="team-info">
                    <img src={assets.notificationDown} alt="notification-icon"></img>
                    <div className="countryn-name">
                        <img id="team-logo" alt="FURIA" src="https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&amp;s=11e5056829ad5d6c06c5961bbe76d20c" title="FURIA"></img>
                        <div className="profile-team">
                            <div className="country">
                                <img className="team-flag" alt="Brazil" src="https://static.hltv.org/images/bigflags/30x20/BR.gif"></img>
                                <span>Brazil</span> 
                            </div>
                            <p className="team-name">FURIA</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default TeamHeader