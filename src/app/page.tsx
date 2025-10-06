'use client'

import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import User from "@/components/User";
import { useState } from "react";

const Home = () => {
  const [nameUser, setNameUser] = useState("Nycolas") ;

  return (
    <div>
      <Menu /><br />

      <User name={nameUser}>
        <p>
          Este é um conteúdo extra fornecido como children.
        </p>
      </User><br />

      <button onClick={() => setNameUser('Nycolass')}>
        Alterar nome
      </button>

      <h2>Bem-vindo Celke!</h2><br />
      <Footer />
    </div>
  );
}

export default Home;
