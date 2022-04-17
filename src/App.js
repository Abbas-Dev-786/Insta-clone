import Layout from "./components/HomePage/Layout";
import Message from "./components/ChatPage/Message";
import Discover from "./components/DiscoverPage/Discover";
import User from "./components/UserPage/User";
import Login from "./components/AuthPage/Login";
import Register from "./components/AuthPage/Register";
import UserStory from "./components/StoryPage/UserStory";
import OtherUser from "./components/UserPage/OtherUser";
import PostPage from "./components/PostsPage/PostPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/message" element={<Message />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/home" element={<Layout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user" element={<User />} />
              <Route exact path="/story" element={<UserStory />} />
              <Route
                exact
                path="/otheruser/:username"
                element={<OtherUser />}
              />
              <Route exact path="/posts/:user" element={<PostPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
