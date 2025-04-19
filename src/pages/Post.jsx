import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Post.css';

export default function Post() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [otherCharacters, setOtherCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const characterResponse = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(characterResponse.data);
        
        const totalCharacters = 826;
        const randomIds = [];
        
        while (randomIds.length < 4) {
          const randomId = Math.floor(Math.random() * totalCharacters) + 1;
          if (randomId !== parseInt(id) && !randomIds.includes(randomId)) {
            randomIds.push(randomId);
          }
        }
        
        const otherCharsResponse = await axios.get(`https://rickandmortyapi.com/api/character/${randomIds.join(',')}`);
        setOtherCharacters(Array.isArray(otherCharsResponse.data) ? otherCharsResponse.data : [otherCharsResponse.data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [id]);

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, {
        id: Date.now(),
        text: newComment,
        date: new Date().toLocaleString(),
        author: 'Usuário Anônimo'
      }]);
      setNewComment('');
    }
  };

  if (isLoading) {
    return (
      <div className="post-container">
        <div className="portal-background"></div>
        <div className="loading-container">
          <div className="tech-loader"></div>
          <p className="loading-text">Acessando dados interdimensionais...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="post-container">
        <div className="portal-background"></div>
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h3 className="error-title">Anomalia Dimensional Detectada</h3>
          <p className="error-message">Portal de acesso instável: {error}</p>
          <button className="tech-button" onClick={() => window.location.reload()}>
            Reconectar Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="post-container">
      <div className="portal-background"></div>
      
      {character && (
        <div className="post-header">
          <h1 className="glitch-title" data-text={character.name}>{character.name}</h1>
          <div className="tech-line"></div>
        </div>
      )}
      
      <div className="post-content">
        <div className="main-content">
          {character && (
            <div className="character-card">
              <div className="card-inner">
                <div className="character-image-container">
                  <div className={`status-indicator ${character.status.toLowerCase()}`}></div>
                  <img 
                    src={character.image} 
                    alt={character.name} 
                    className="character-image"
                  />
                </div>
                <div className="character-details">
                  <h2 className="character-name">{character.name}</h2>
                  <ul className="details-list">
                    <li className="detail-item">
                      <span className="detail-label">Espécie:</span> 
                      <span className="detail-value">{character.species}</span>
                    </li>
                    <li className="detail-item">
                      <span className="detail-label">Status:</span> 
                      <span className="detail-value">{character.status}</span>
                    </li>
                    <li className="detail-item">
                      <span className="detail-label">Gênero:</span> 
                      <span className="detail-value">{character.gender}</span>
                    </li>
                    <li className="detail-item">
                      <span className="detail-label">Origem:</span> 
                      <span className="detail-value">{character.origin.name}</span>
                    </li>
                    <li className="detail-item">
                      <span className="detail-label">Localização:</span> 
                      <span className="detail-value">{character.location.name}</span>
                    </li>
                  </ul>
                  <div className="card-circuits"></div>
                </div>
              </div>
            </div>
          )}

          <div className="comments-section">
            <div className="section-header">
              <h3 className="section-title">Comentários Interdimensionais</h3>
              <div className="small-tech-line"></div>
            </div>
            
            <div className="comments-container">
              {comments.length === 0 ? (
                <div className="no-comments">
                  <p>Nenhum comentário ainda. Será que o portal interdimensional está bloqueado? Deixe sua marca e prove que você é mais esperto que Morty!</p>
                </div>
              ) : (
                <ul className="comments-list">
                  {comments.map(comment => (
                    <li className="comment-item" key={comment.id}>
                      <div className="comment-header">
                        <div className="comment-author">{comment.author}</div>
                        <div className="comment-date">{comment.date}</div>
                      </div>
                      <div className="comment-text">{comment.text}</div>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="comment-form">
                <label className="form-label">Transmitir mensagem</label>
                <div className="input-group">
                  <textarea
                    className="comment-input"
                    rows={2}
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    placeholder="Digite sua mensagem interdimensional..."
                    onKeyPress={e => e.key === 'Enter' && !e.shiftKey && addComment()}
                  />
                  <button 
                    className="tech-button"
                    onClick={addComment}
                    disabled={!newComment.trim()}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="related-characters">
            <div className="section-header">
              <h3 className="section-title">Outros Viajantes</h3>
              <div className="small-tech-line"></div>
            </div>
            
            <ul className="character-list">
              {otherCharacters.map(char => (
                <li className="related-character-item" key={char.id}>
                  <Link to={`/post/${char.id}`} className="character-link">
                    <div className="mini-character-card">
                      <div className="mini-image-container">
                        <div className={`mini-status ${char.status.toLowerCase()}`}></div>
                        <img 
                          src={char.image} 
                          alt={char.name} 
                          className="mini-character-image" 
                        />
                      </div>
                      <div className="mini-character-info">
                        <h4 className="mini-character-name">{char.name}</h4>
                        <div className="mini-character-details">
                          <span className="mini-species">{char.species}</span>
                          <span className="mini-status-text">{char.status}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="sidebar-circuits"></div>
          </div>
        </div>
      </div>
      
      <div className="dimensional-footer">
        <Link to="/" className="tech-button-small">
          Voltar ao Portal Principal
        </Link>
      </div>
    </div>
  );
}