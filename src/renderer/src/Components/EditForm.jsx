import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import moment from "moment";


function EditForm() {
  let { id } = useParams();
  function getObjectSpecific(objects, id) {
    let targetObject = null;

    for (let i = 0; i < objects.length; i++) {
      if (objects[i].id === id) {
        targetObject = objects[i];
        break;
      }
    }

    if (targetObject !== null) {
      return targetObject;
    } else {
      return null;
    }
  }
  
  let newObj = JSON.parse(window.localStorage.getItem("dataJSON"));
  let dreams = getObjectSpecific(newObj, id);
  const [dream, setdream] = useState({
    id: dreams.id,
    name: dreams.name,
    good_dream: dreams.good_dream,
    dream_description: dreams.dream_description,
    topic: dreams.topic,
    date: dreams.date,
    night: dreams.night,
  });


  const navigate = useNavigate();


  const handleTextChange = (event) => {
   
    setdream({ ...dream, [event.target.id]: event.target.value });
  };

function editObjectDream(){

  const existingArray = JSON.parse(window.localStorage.getItem('dataJSON')) || [];

  const indexToRemove = existingArray.findIndex(obj => obj.id === id);
  
  if (indexToRemove !== -1) {
    existingArray.splice(indexToRemove, 1);
    existingArray.push(dream);
    const updatedArray = JSON.stringify(existingArray);
    window.localStorage.setItem("dataJSON", updatedArray);
  }
  
  const updatedArray = JSON.stringify(existingArray);
  
  window.localStorage.setItem('dataJSON', updatedArray);

}


  const handleSubmit = (event) => {
    event.preventDefault();


    editObjectDream();


navigate(`/dreams/${id}`)
    
  };

  return (
    <div className="cardContact">


    <div className="spacerDIV"><strong>✏️ EDIT Receipt Archive 📝</strong></div>

<div>Under Construction</div>

    {/* <div className="edit">
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          id="user_id"
          name="user_id"
          value={dream.user_id}
        ></input>

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={dream.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={moment(dream.date).format("YYYY-MM-DD")}
          onChange={handleTextChange}
        />
        <label htmlFor="category">Topic:</label>
        <input
          id="topic"
          type="text"
          name="topic"
          value={dream.topic}
          onChange={handleTextChange}
        />
        <label htmlFor="good_dream">Type of Dream:</label>

        <select
          onChange={handleTextChange}
          name="good_dream"
          id="good_dream"
          value={dream.good_dream}
        >
          <option value="">--Please choose an option--</option>
          <option value="good">good</option>
          <option value="neutral">neutral</option>
          <option value="bad">bad</option>
        </select>

        <label htmlFor="dream_description">Description of Dream:</label>


        <textarea
  id="dream_description"
  name="dream_description"
  value={dream.dream_description}
  placeholder="What is your Dream about..."
  onChange={handleTextChange}
  rows="5" 
  cols="50" 
  required
/>

        <label htmlFor="night">Night Time Dream:</label>

        <select
          onChange={handleTextChange}
          name="night"
          id="night"
          value={dream.night}
        >
          <option defaultValue={true}>true</option>
          <option defaultValue={false}>false</option>
        </select>

        <input type="submit" />
      </form>
      <Link to={`/receipts/${id}`}>
        <button className="backButton">Nevermind!</button>
      </Link>
    </div> */}
    
    </div>
  );
}

export default EditForm;
