import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const { register, handleSubmit} = useForm();
  const [imageUrl, setImageUrl] = useState(null);

const [eventAdded, setEventAdded] = useState(false);

  const onSubmit = (data) => {
 const EventData = {
     event: data.service,
     image: imageUrl
 }
 console.log(EventData)
 const url = `http://localhost:4000/addEvent`;
    
 fetch(url, {
   method: 'POST', 
   headers: {
     'content-type': 'application/json'
   },
   body: JSON.stringify(EventData)
 })
 .then(res => {
     
   if (res) {
       setEventAdded(true)
   }

})
};

  const handleImage = (event) => {
    const imageData = new FormData();
    imageData.set("key", "b26389c1040d4906f07c920d5340a088");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url)
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="bg-info text-center p-5">
      {
          !eventAdded && <h1 className="text-warning">Add New Events!!</h1>
      }
      <div className="d-flex justify-content-center align-items-center">
        {
            eventAdded ?<> <h1 className="text-warning">New Event Constructed Successfully!</h1>
            <div className="btn btn-primary" onClick={()=>{
              setEventAdded(false)
            }}>Add New Event</div></>
             : 
            <form className="" onSubmit={handleSubmit(onSubmit)}>
    <input className="form-control" name="service" defaultValue="test" ref={register} />
    <br />
    <input className="text-light form-control-file"  name="exampleRequired" type="file" onChange={handleImage} />
    <br /> <input className="form-control bg-primary text-light" type="submit" />
  </form>
        }
      </div>
    </div>
  );
};

export default AddEvent;
