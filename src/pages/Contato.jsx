import { useState } from 'react';
import './Contato.css';

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);
  
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nome: '', email: '', mensagem: '' });
    
    setTimeout(() => setEnviado(false), 5000);
  };
  
  return (
    <div className="contato-container">
      <div className="portal-background"></div>
      
      <header className="contato-header">
        <h1 className="glitch-title" data-text="Entre em Contato">Entre em Contato</h1>
        <div className="tech-line"></div>
      </header>
      
      <div className="contact-intro">
        <p className="intro-text">
          Tem alguma dúvida, sugestão ou gostaria de falar com a equipe? 
          Envie uma transmissão interdimensional através do nosso portal de comunicação abaixo!
        </p>
      </div>
      
      <div className="form-container">
        {enviado && (
          <div className="message-success">
            <div className="success-icon">✓</div>
            <div className="success-text">
              <h4>Transmissão recebida!</h4>
              <p>Sua mensagem foi enviada com sucesso para nossa dimensão.</p>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="tech-form">
          <div className="form-field">
            <label htmlFor="nome" className="field-label">Nome</label>
            <div className="input-container">
              <input
                id="nome"
                className="tech-input"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome terrestre"
                required
              />
              <div className="input-focus-effect"></div>
            </div>
          </div>
          
          <div className="form-field">
            <label htmlFor="email" className="field-label">Email</label>
            <div className="input-container">
              <input
                id="email"
                type="email"
                className="tech-input"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu.email@dimensao.c137"
                required
              />
              <div className="input-focus-effect"></div>
            </div>
          </div>
          
          <div className="form-field">
            <label htmlFor="mensagem" className="field-label">Mensagem</label>
            <div className="input-container textarea-container">
              <textarea
                id="mensagem"
                className="tech-input tech-textarea"
                name="mensagem"
                rows="4"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Wubba Lubba Dub Dub! Compartilhe seus pensamentos..."
                required
              />
              <div className="input-focus-effect"></div>
            </div>
          </div>
          
          <div className="form-button-container">
            <button type="submit" className="tech-button">
              <span className="button-text">Enviar Mensagem</span>
              <span className="button-icon">➜</span>
            </button>
          </div>
        </form>
      </div>
      
      <div className="contact-info">
        <div className="info-card">
          <div className="info-icon">📡</div>
          <h3>Encontre-nos na Cidadela</h3>
          <p>Nosso escritório intergaláctico está localizado na Dimensão C-137</p>
        </div>
        <div className="info-card">
          <div className="info-icon">⚡</div>
          <h3>Transmissões Diretas</h3>
          <p>Para assuntos urgentes: wubaliba@dubdub.com</p>
        </div>
      </div>
    </div>
  );
}