import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import NavbarUser from "../Components/NavbarUser";
import "./CSS/Admin.css"
import {GrFavorite} from "react-icons/gr"

const Customer = () => {
  const [medias, setMedias] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios.get(`https://codissstream.herokuapp.com/user/media/videos`, {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log("err", error);
        alert("Error happened!");
      });
  };
  return (
    <Box>
      <NavbarUser />
      <Box className="Video_main" marginTop="100px">
        {medias ? (
          medias.map((media, i) => {
            return (
              <div className="video_display" key={i}>
                <Box className="loveOuter">
                <p>Video Title : {media.name}</p>
                  <GrFavorite size="30px" cursor="pointer" />
                </Box>
                <div>
                  {media.videos.map((video,i) => {
                    return (
                      <video key={i} preload="auto" width="800" height="240" controls>
                        <source src={`https://codissstream.herokuapp.com${video}`} />
                        Your browser does not support the video tag.
                      </video>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </Box>
    </Box>
  );
};

export default Customer;
