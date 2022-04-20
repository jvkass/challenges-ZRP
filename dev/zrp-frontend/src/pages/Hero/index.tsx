import React from "react";
import { Header } from "../../components/Header";
import { HeroesTable } from "../../components/HeroesTable";

const Hero: React.FC = () => {

    return (
        <>
            <Header />
            <HeroesTable />
        </>
    );
};

export default Hero;