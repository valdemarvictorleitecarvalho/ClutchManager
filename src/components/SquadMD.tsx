import { useState, useEffect, useRef } from 'react';
import Player from '../classes/Player';
import assets from '../assets';
import './SquadMD.css';

function SquadMD() {

    const [squad, setSquad] = useState<Player[]>([]);
    const effectRan = useRef(false);

    const updateSquad = (newPlayer: Player) => {
        setSquad((prevSquad) => [...prevSquad, newPlayer]);
    };

    const addNewPlayer = (nickname: string, image: string, country: string, form: number, entry: number, clutch: number, aim: number) => {
        const newPlayer = new Player(
            nickname,
            image,
            country,
            form,
            entry,
            aim,
            clutch
        );
        updateSquad(newPlayer);
    };

    useEffect(() => {
        if (effectRan.current) return;
        
        addNewPlayer(
            "FalleN",
            "https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a",
            "https://static.hltv.org/images/bigflags/30x20/BR.gif",
            79,
            80,
            86,
            84
        );
    
        addNewPlayer(
            "KSCERATO",
            "https://img-cdn.hltv.org/playerbodyshot/U6t0j2bJDKUR3mTI8rIqv7.png?ixlib=java-2.1.0&w=400&s=b5257c378b8122f415f21985855e95ca",
            "https://static.hltv.org/images/bigflags/30x20/BR.gif",
            85,
            80,
            88,
            92
        );
    
        addNewPlayer(
            "yuurih",
            "https://img-cdn.hltv.org/playerbodyshot/i6UGhkYxrhutAOmWZT0-8O.png?ixlib=java-2.1.0&w=400&s=2cd696f6ff4baf5680a43d537214b6eb",
            "https://static.hltv.org/images/bigflags/30x20/BR.gif",
            75,
            77,
            83,
            87
        );
    
        addNewPlayer(
            "chelo",
            "https://img-cdn.hltv.org/playerbodyshot/1UmLZkSSAfBosakeRR3gwZ.png?ixlib=java-2.1.0&w=400&s=4b513eb29f7896053a6996ef30575ed8",
            "https://static.hltv.org/images/bigflags/30x20/BR.gif",
            70,
            74,
            79,
            83
        );
    
        addNewPlayer(
            "skullz",
            "https://img-cdn.hltv.org/playerbodyshot/Ql8Oez5CfB2SBPOQdLJdL3.png?ixlib=java-2.1.0&w=400&s=780116a9290d11b1347f35182716ad53",
            "https://static.hltv.org/images/bigflags/30x20/BR.gif",
            81,
            84,
            80,
            83
        );

        effectRan.current = true;
    }, []);

    return (
        <>
            <div className="squad">
                {squad.map((player, index) => (
                    <div key={index} className="player-card">
                        <div className="player-img">
                            <img src={player.image} alt={player.nickname}></img>
                        </div>
            
                        <div className="player-immutableinfo">
                            <p>{player.nickname}</p>
                            <img src={player.country} alt={player.nickname}></img>
                        </div>

                        <hr></hr>

                        <div className="overall-info">
                            <img src={assets.overallImg}></img>
                            <p>Overall: {player.overall}</p>   
                        </div>

                        <hr></hr>

                        <div className="player-stats">
                            <div className="upper-stats">
                                <p>Form: {player.form}</p>
                                <p>Entry: {player.entry}</p>
                            </div>
                            <div className="bottom-stats">
                                <p>Aim: {player.aim}</p>
                                <p>Clutch: {player.clutch}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SquadMD;