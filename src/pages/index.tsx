import { GetServerSideProps } from "next";
import React from "react";
import { ChampionCardComponent } from "../components/ChampionCardComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import api from "../services/api";

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

export default function Home({ champions }: PageProps) {
    return (
        <>
            <ChampionCardComponent
                champions={champions}
            />
        </>
    )
}
export const getServerSideProps: GetServerSideProps = async () => {
    const response = await api.get("/champions/level/1/roulette");
    return {
        props: {
            champions: response.data
        }
    }
}
