import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import NavbarInner from "../Components/NavbarInner";
import "./CSS/Admin.css"


const AdminVideos = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
    console.log("medias",medias)
  }, []);

  const getAllMedias = () => {
    axios.get(`https://codissstream.herokuapp.com/api/v1/media/all`).then((result) => {
      setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log("err",error);
        alert("Error happened!");
      });
  };
  return (
    <Box>
      <NavbarInner />
      <Box className="Video_main">
        {medias ? medias.map((media,i) => {
          return (
            <div className="video_display" key={i}>
              <p>Video Title : {media.name}</p>
              <p>Plan Alloted : {media.plan}</p>
              <div>
                {media.videos.map((video)=>{
                  return (
                    <video preload="auto" width="800" height="240" controls>
                    <source src={`https://codissstream.herokuapp.com${video}`} />
                    Your browser does not support the video tag.
                  </video>
                  )
                })}
              </div>
            </div>
          );
        }) :<Loading/>}
      </Box>
    </Box>
  );
};

export default AdminVideos;
