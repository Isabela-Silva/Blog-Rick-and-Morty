import React from 'react';
import './Sobre.css'; // Você precisará criar este arquivo CSS

export default function Sobre() {
  const teamMembers = [
    {
      name: "Erique",
      role: "Estrategista Genial",
      description: "Sempre desafiando os limites da lógica com suas ideias inovadoras.",
      icon: "🧪",
      color: "#3498db" // Azul
    },
    {
      name: "Soraya",
      role: "Alma Criativa",
      description: "Mestre das referências mais hilárias e das postagens visuais alucinantes.",
      icon: "🎨",
      color: "#e74c3c" // Vermelho
    },
    {
      name: "Isabela",
      role: "Especialista Técnica",
      description: "Garante que o portal interdimensional do blog funcione impecavelmente.",
      icon: "💻",
      color: "#2ecc71" // Verde
    },
    {
      name: "Hanny",
      role: "Explorador de Mundos",
      description: "Trazendo temas inovadores e empolgantes para nossa comunidade.",
      icon: "🔭",
      color: "#9b59b6" // Roxo
    }
  ];

  return (
    <div className="sobre-container">
      <div className="portal-background"></div>
      
      <header className="sobre-header">
        <h1 className="glitch-title" data-text="Sobre a Equipe">Sobre a Equipe</h1>
        <div className="tech-line"></div>
      </header>
      
      <div className="about-intro">
        <p className="intro-text">
          Somos quatro fãs apaixonados de <em>Rick and Morty</em> que decidiram unir forças 
          para criar este espaço intergaláctico de ideias, debates e caos criativo. 
          Nossa missão? Explorar as infinitas dimensões do multiverso Rick and Morty!
        </p>
      </div>
      
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div 
            className="team-card" 
            key={index}
            style={{'--card-color': member.color}}
          >
            <div className="card-icon">{member.icon}</div>
            <h3 className="member-name">{member.name}</h3>
            <div className="member-role">{member.role}</div>
            <p className="member-desc">{member.description}</p>
            <div className="card-circuits"></div>
          </div>
        ))}
      </div>
      
      <div className="join-us">
        <h3>Junte-se à nossa aventura interdimensional!</h3>
        <p>Estamos sempre em busca de novos viajantes do multiverso para contribuir com ideias.</p>
        <button className="tech-button">Contate-nos</button>
      </div>
    </div>
  );
}