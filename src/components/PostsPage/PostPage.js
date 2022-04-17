import React from "react";
import { useSelector } from "react-redux";
import Posts from "../HomePage/Posts";
import Navbar from "../Navbar";

function PostPage() {
  const user = useSelector((state) => state.post);
  console.log(user);

  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: "70px" }}>
        <div className="row">
          <div className="col-12 col-md-6 d-block mx-auto">
            <Posts
              likes={user.likes}
              imageURL={user?.imageURL}
              caption={user?.caption}
              profileImg={
                user?.profileImg ||
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAMFBMVEXk5ueutLersbTP0tTn6eqmrbDa3d7d4OHh4+XJzc+4vcC1ur3V2NqyuLrq7Oy+w8XgWwibAAADGUlEQVR4nO2b2bLbIAxA2Vcb/v9vi6+b1EkTIxGEMy3n4U7mvuSMEJtEGJtMJpPJZDKZTCaTyf+J+uFiBbtInwteGneRjGLWR87FbzgP0o5XUUmG7cuPCJ5tGqyx8CeJHR3MwJAoFl9abDERfpzG8s7ixyTaMSFJ+UxjG5whY6N8RaOEZKEXUbVojBGpDsqYoTlP0SOW1MMBLbgIlAFRARoOLjydiJJgjZIiZBosITQ4z1QBAawcDyNDlqoYi+JBFBD4nL3haDwCUoNoylikBueRxAMzaXdIpi5og3uEZLtLWAuqBNF4kUygYRo81v4a+NVjo/8KglzUd8SXeOj+W8z0+FIP/LJOk6dfMm+ZbVjHQn8NplrWdYp9bkVrkOxzDRNGm/4ajC34eJCcx8B3yrsGzYEdeNU/eCwUGuUEgvQgOH3s4C4OZDdthTyS0VgU0tty5atwSLrCAypDCEvLiLVMkKxhd6CpSlkO2nCwVBUUO+0DoBQRK3khF3IeEpGm8vEoUl1FxOqGFNjtehoSEUY1g9zpjjeuAcOSfO6J3dB8UPdlRyn/qjEm4jK4QceUk5Efo1I+h4Vd0DtVysggtBai/NFrvqJteldJyhljLCsfLnPYvtnd+POvgQopMSN9DmG9NbT5GkPOfnGjArP19P2eFn9Ply1TYkkURitTwm78NkvO11PBY14c2dRRyeT1XOHokiVFUMpweKDD3UVn0zkoii3h9cOCSlSi7GmSlqBbqjAFvcpek1mZtaH0cQhKl5goi+8zPJvEz/sO6u0Oj0Hnz0JSO3qBEZ/d7lpqle9M2nsg6ILHuUjjIV6xTmNyp+kxRrfUONDSr3P9NRpElCOwKGikiMMXbWHgIoJ4b4IG0QrpO2GfgBd321ocYA/wgoYuHCNFgClCmRw7oIWVdlQ2RIZcghveE2CBvMdo6gdigTQisK9vWgA8pcI2Fdo8fC1DGl69tFBtiZBtLE/UWkTkk3anVvZu6uI3cZ4gKQ7SqCwhuBeVn3ict0WA7YTPqdxnjBaDOE9UK0dRmbjX/qBmMplMJv8KvwBEiyR5AZgRQAAAAABJRU5ErkJggg=="
              }
              name={user?.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
