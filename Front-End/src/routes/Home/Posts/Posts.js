import React, { Component } from "react";
import Post from "./Post/Post";
import "./Posts.css";
import myPic from "../../../assets/profileSample.jpg";
import axios from "../../../API/baseURL/baseURL";
import Skeleton from "react-loading-skeleton";

// let postsData = [
//   {
//     profileId: 32,
//     postId: 87,
//     userPic: null,
//     // selfUserPic: null,
//     selfUserPic: myPic,
//     selfProfileId: 123,
//     selfName: 'User himself',
//     selfTagline : 'self TagLine',
//     userName: "Utkarsh Patel",
//     userTag:
//       "Competitive programmer Competitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmer",
//     location: "Noida, Uttar Pradesh, India",
//     mediaType: "video",
//     mediaSrc: null,
//     postText:
//       'A lot of people ask me for college advice - how to succeed in college. Here is a complete guide (specially for so-called "tier 2/3" colleges) 1. Realize that your past does not define your future. Be proud of yourself and stand up - the world rewards the brave.2. First learn a skill. It could be coding, graphic designing, marketing, stock trading, whatever. Pick something which has good number of jobs or companies.4. Build your network. Go to college tech events, hackathons and try to connect with senior people. Even one good mentor can change your life.',
//     numLikes: 23,
//     numComments: 32,
//     isSaved: false,
//     peopleLiked: [],
//     comments: [
//       {
//         comment: {
//           userId: 23,
//           commentId: 11,
//           userImg: null,
//           isLiked: false,
//           numLikes: 34,
//           numReplies: 43,
//           peopleLiked: [],
//           name: "Aditya Pratap Singh",
//           tag: "Web Developer at (SDC-SI)",
//           comment: "Sample comment",
//         },
//         replies: [
//           {
//             replyId: 83,
//             userImg: null,
//             name: "Aditya Pratap Singh",
//             tag: "Web Developer at (SDC-SI)",
//             reply: "Sample reply1",
//             isLiked: false,
//             numLikes: 31,
//             likeList: [],
//           },
//           {
//             replyId: 33,
//             userImg: null,
//             name: "Aditya Pratap Singh",
//             tag: "Web Developer at (SDC-SI)",
//             reply: "Sample reply2",
//             isLiked: true,
//             numLikes: 76,
//             likeList: [],
//           },
//         ],
//       },
//       {
//         comment: {
//           userId: 43,
//           commentId: 12,
//           userImg: null,
//           isLiked: true,
//           numLikes: 90,
//           numReplies: 9,
//           peopleLiked: [],
//           name: "Utkarsh Patel",
//           tag: "Web Developer at (SDC-SI)",
//           comment: "Sample comment2",
//         },
//         replies: [
//           {
//             replyId: 3,
//             userImg: null,
//             name: "Aditya Pratap Singh",
//             tag: "Web Developer at (SDC-SI)",
//             reply: "Sample reply1",
//             isLiked: false,
//             numLikes: 31,
//             likeList: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     profileId: 32,
//     postId: 87,
//     userPic: null,
//     // selfUserPic: null,
//     selfUserPic: myPic,
//     selfProfileId: 123,
//     selfName: 'User himself',
//     selfTagline : 'self TagLine',
//     userName: "Utkarsh Patel",
//     userTag:
//       "Competitive programmer Competitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmer",
//     location: "Noida, Uttar Pradesh, India",
//     mediaType: "video",
//     mediaSrc: null,
//     postText:
//       'A lot of people ask me for college advice - how to succeed in college. Here is a complete guide (specially for so-called "tier 2/3" colleges) 1. Realize that your past does not define your future. Be proud of yourself and stand up - the world rewards the brave.2. First learn a skill. It could be coding, graphic designing, marketing, stock trading, whatever. Pick something which has good number of jobs or companies.4. Build your network. Go to college tech events, hackathons and try to connect with senior people. Even one good mentor can change your life.',
//     numLikes: 23,
//     numComments: 32,
//     isSaved: false,
//     peopleLiked: [],
//     comments: [
//       {
//         comment: {
//           userId: 23,
//           commentId: 11,
//           userImg: null,
//           isLiked: false,
//           numLikes: 34,
//           numReplies: 43,
//           peopleLiked: [],
//           name: "Aditya Pratap Singh",
//           tag: "Web Developer at (SDC-SI)",
//           comment: "Sample comment",
//         },
//         replies: [
//           {
//             replyId: 83,
//             userImg: null,
//             name: "Aditya Pratap Singh",
//             tag: "Web Developer at (SDC-SI)",
//             reply: "Sample reply1",
//             isLiked: false,
//             numLikes: 31,
//             likeList: [],
//           },
//           {
//             replyId: 33,
//             userImg: null,
//             name: "Aditya Pratap Singh",
//             tag: "Web Developer at (SDC-SI)",
//             reply: "Sample reply2",
//             isLiked: true,
//             numLikes: 76,
//             likeList: [],
//           },
//         ],
//       },
//       {
//         comment: {
//           userId: 43,
//           commentId: 12,
//           userImg: null,
//           isLiked: true,
//           numLikes: 90,
//           numReplies: 9,
//           peopleLiked: [],
//           name: "Utkarsh Patel",
//           tag: "Web Developer at (SDC-SI)",
//           comment: "Sample comment2",
//         },
//         replies: [
//           {
//             replyId: 3,
//             userImg: null,
//             name: "Aditya Pratap Singh",
//             tag: "Web Developer at (SDC-SI)",
//             reply: "Sample reply1",
//             isLiked: false,
//             numLikes: 31,
//             likeList: [],
//           },
//         ],
//       },
//     ],
//   }
// ];

class Posts extends Component {
  state = {
    // posts: postsData,
    posts: null,
  };

  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let profId = localStorage.getItem("profileID");
    axios
      // .get(`/user/post/view/${profId}/`, config)
      .get(`/user/post/feed/`, config)
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
        // this.setState({ posts: null });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let postsData = null;
    if (this.state.posts === null) {
      return (
        <div className="post">
          <div
            className="postHeader"
            style={{ display: "flex", padding: "11.8px 14px" }}
          >
            <div>
              <Skeleton
                style={{ marginRight: "8px" }}
                circle={true}
                width={48}
                height={48}
              />
            </div>
            <div style={{ paddingTop: "5px" }}>
              <Skeleton height={12.5} width={200} />
              <br />
              <Skeleton
                style={{ paddingBottom: "0px" }}
                height={8.5}
                width={200}
              />
              <br />
            </div>
          </div>
          <Skeleton height={310} />
          <div style={{ padding: "11px", paddingTop: "7px" }}>
            <Skeleton height={22} width="100%" />
          </div>
        </div>
      );
    }
    if (this.state.posts !== null) {
      postsData = this.state.posts.map((post, index) => {
        return <Post postId={post.id} data={post} />;
      });
    }

    return <div className="posts">{postsData}</div>;
  }
}

export default Posts;
