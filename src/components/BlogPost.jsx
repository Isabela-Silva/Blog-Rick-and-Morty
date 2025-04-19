import { Link } from 'react-router-dom';
import './BlogPost.css'; 

export default function BlogPost({ character }) {
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'Alive': return 'rgb(50, 205, 50)'; 
      case 'Dead': return 'rgb(220, 53, 69)';  
      default: return 'rgb(108, 117, 125)';    
    }
  };
  
  const statusColor = getStatusColor(character.status);
  
  return (
    <div className="card tech-card h-100 shadow" style={{'--status-color': statusColor}}>
      <div className="card-image-container">
        <img src={character.image} alt={character.name} className="card-img-top" />
        <div className="tech-overlay"></div>
      </div>
      <div className="card-body text-center">
        <h4 className="card-title">{character.name}</h4>
        <p className="card-text">
          <span className="status-indicator" style={{backgroundColor: statusColor}}></span>
          {character.species} - {character.status}
        </p>
        <Link to={`/post/${character.id}`} className="btn btn-tech">Ver mais</Link>
      </div>
    </div>
  );
}