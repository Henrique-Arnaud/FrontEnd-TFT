import React, { useState, useCallback } from 'react'
import api from '../../services/api';
import { ChampionPool, Container } from './style'

interface PageProps {
    champions: Array<ChampionsProps>;
}

interface ChampionsProps {
    championName: string,
    championCost: number,
    championOrigin: string,
    championClass: string,
    championPool: number
}

export function ChampionCardComponent({ champions }: PageProps) {
    const [championList, setChampionList] = useState(champions);
    const [playerLvl, setPlayerLvl] = useState(1);

    const handleRoll = useCallback(async () => {
        try {
            championList.map(champion => {
                const response = api.post(`/champions/${champion.championName}/roulette`);
            })
            const request = await api.get(`/champions/level/${playerLvl}/roulette`);
            setChampionList(request.data);
        }
        catch (error) {
            alert("Erro ao roletar");
        }
    }, [championList]);

    const handleLevelUp = useCallback(async () => {
        playerLvl < 9 ? setPlayerLvl(playerLvl + 1) : alert("Lvl máximo atingido!");
    }, [playerLvl])

    const handleBuyChampion = useCallback(async (i:number) => {
        var newList = [...championList];
        newList.splice(i, 1);
        setChampionList(newList);
    }, [championList]);

    return (
        <Container>
            {/* gold PNG foi desenvolvido por 千图网 e vem de <a href="https://pt.pngtree.com">Pngtree.com</a> */}
            <div className="actions">
                <div className="roll" onClick={handleRoll}>
                    <h3>
                        Atualizar
                    </h3>

                    <span>
                        <img src="gold.png" /> 2
                    </span>
                </div>
                <div className="levelUp" onClick={handleLevelUp}>
                    <h3>
                        Comprar Xp
                    </h3>
                    <span>
                        <img src="gold.png" /> 4
                    </span>
                    <div>
                        <h3>{playerLvl}</h3>
                    </div>
                </div>
            </div>
            {championList.map((champion, i) => {
                return (
                    <ChampionPool background={"/" + champion.championName.toLowerCase().replace(/ /g, "") + ".jpg"} key={i} onClick={async() => {
                        handleBuyChampion(i)
                    }}>
                        <div>
                            <h3>{champion.championOrigin}</h3>
                            <h3>{champion.championClass}</h3>
                        </div>
                        <section>
                            <h2>
                                {champion.championName}
                            </h2>

                            <h3>
                                <img src="gold.png" />{champion.championCost}</h3>
                        </section>
                    </ChampionPool>
                )
            }
            )}
        </Container>
    )
}
