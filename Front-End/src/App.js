import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home/Home";
import Signup from "./routes/Signup/Signup";
import Login from "./routes/Login/Login";
import Network from "./routes/Network/Network";
import Jobs from "./routes/Jobs/Jobs";
import ForgotPassword from "./routes/Login/ForgotPassword/ForgotPassword";
import Profile from "./routes/Profile/Profile";
import User from "./routes/User/User";
import PostJob from "./routes/PostJob/PostJob";
import PostedJobDisplay from "./routes/PostedJobDisplay/PostedJobDisplay";
import JobDisplay from "./routes/JobDisplay/JobDisplay";
import SavedPosts from "./routes/SavedPosts/SavedPosts";
import SearchDisplay from "./routes/SearchDisplay/SearchDisplay";
import Notifications from "./routes/Notifications/Notifications";
import MyPosts from "./routes/MyPosts/MyPosts";
import Message from "./routes/Message/Message";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/userSignup/:id"
            render={(props) => (
              <Signup key={props.location.pathname} {...props} />
            )}
          />
          <Route path="/userLogin" exact component={Login} />
          <Route
            path="/forgotPassword/:id"
            render={(props) => (
              <ForgotPassword key={props.location.pathname} {...props} />
            )}
          />
          <Route path="/network" exact component={Network} />
          <Route path="/jobs" exact component={Jobs} />
          <Route path="/profile" exact component={Profile} />
          <Route
            path="/user/:id"
            exact
            render={(props) => (
              <User key={props.location.pathname} {...props} />
            )}
          />
          <Route path="/postJob" exact component={PostJob} />
          <Route
            path="/postedJob/:id"
            render={(props) => (
              <PostedJobDisplay key={props.location.pathname} {...props} />
            )}
          />
          <Route
            path="/job/:id"
            render={(props) => (
              <JobDisplay key={props.location.pathname} {...props} />
            )}
          />
          <Route path="/savedPosts" exact component={SavedPosts} />

          <Route
            path="/search/:id"
            render={(props) => (
              <SearchDisplay key={props.location.pathname} {...props} />
            )}
          />

          <Route path="/notifications" exact component={Notifications} />
          <Route path="/MyPosts" exact component={MyPosts}/>
          
          <Route path="/message" exact component={Message}/>

          <Route
            path="/message/:id"
            render={(props) => (
              <Message key={props.location.pathname} {...props} />
            )}
          />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
