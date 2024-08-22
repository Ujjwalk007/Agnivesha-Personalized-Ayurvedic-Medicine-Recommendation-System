import React, { useState } from 'react';
import { useContext,useEffect } from 'react';
import usercontext from '../context/usercontext';
import {useNavigate} from 'react-router-dom';
import './select.css';

const diseases = [
  "psoriasis", "arthritis", "migraine", "bronchitis", "insomnia", "Ovarian cysts",
  "acne", "cholestrol", "Fever", "cough", "constipation", "hypertension", 
  "Rheumatoid Arthritis", "eczema", "IBS"
];

function DiseaseSelection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDiseases,setfilteredDiseases] = useState([]);
  const cont = useContext(usercontext);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    setfilteredDiseases(
      diseases.filter(disease =>
        disease.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  
  const handleSuggestionClick = (suggestion) => {
    setfilteredDiseases([]);
    setSearchTerm(suggestion);
  };

  const SearchRemedy = ()=>{

          var temp = cont.userdata;
          temp.Disease_name = searchTerm;
          cont.setUserdata(temp);
          console.log(temp);
          navigate('/upchar');

  }
  

  return (
    <div>
      <div className="box">
        <div className="search">
          <input
            type="text"
            placeholder="Search For Diseases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <button type="button" onClick={()=>SearchRemedy()}>⌕</button>
          
          
          {filteredDiseases.length > 0 && searchTerm && (
            <div className="recommendation-list">
              {filteredDiseases.map((disease, index) => (
                <div 
                  key={index} 
                  className="recommendation-item"
                  onClick={() => handleSuggestionClick(disease)}
                >
                  {disease}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <br />
        <div style={{ fontFamily: 'Times New Roman', marginLeft: '55vh', fontSize: '3vh', color: 'green' }}>
          Select Disease
        </div>

        <div className="Dnames">
          <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
            <div>psoriasis</div>
            <div>arthritis</div>
            <div>migraine</div>
            <div>bronchitis</div>
            <div>insomnia</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
            <div>Ovarian cysts</div>
            <div>acne</div>
            <div>cholestrol</div>
            <div>Fever</div>
            <div>cough</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
            <div>constipation</div>
            <div>hypertension</div>
            <div>Rheumatoid Arthritis</div>
            <div>eczema</div>
            <div>IBS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiseaseSelection;
