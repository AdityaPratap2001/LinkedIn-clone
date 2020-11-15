import React, { Component } from "react";
import Post from "./Post/Post";
import "./Posts.css";
import myPic from '../../../assets/profileSample.jpg'

let postsData = [
  {
    profileId: 32,
    postId: 87,
    userPic: null,
    // selfUserPic: null,
    selfUserPic: myPic,
    selfProfileId: 123,
    selfName: 'User himself',
    selfTagline : 'self TagLine',
    userName: "Utkarsh Patel",
    userTag:
      "Competitive programmer Competitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmer",
    location: "Noida, Uttar Pradesh, India",
    mediaType: "video",
    mediaSrc: null,
    postText:
      'A lot of people ask me for college advice - how to succeed in college. Here is a complete guide (specially for so-called "tier 2/3" colleges) 1. Realize that your past does not define your future. Be proud of yourself and stand up - the world rewards the brave.2. First learn a skill. It could be coding, graphic designing, marketing, stock trading, whatever. Pick something which has good number of jobs or companies.4. Build your network. Go to college tech events, hackathons and try to connect with senior people. Even one good mentor can change your life.',
    numLikes: 23,
    numComments: 32,
    isSaved: false,
    peopleLiked: [],
    comments: [
      {
        comment: {
          userId: 23,
          commentId: 11,
          userImg: null,
          isLiked: false,
          numLikes: 34,
          numReplies: 43,
          peopleLiked: [], 
          name: "Aditya Pratap Singh",
          tag: "Web Developer at (SDC-SI)",
          comment: "Sample comment",
        },
        replies: [
          {
            replyId: 83,
            userImg: null,
            name: "Aditya Pratap Singh",
            tag: "Web Developer at (SDC-SI)",
            reply: "Sample reply1",
            isLiked: false,
            numLikes: 31,
            likeList: [],
          },
          {
            replyId: 33,
            userImg: null,
            name: "Aditya Pratap Singh",
            tag: "Web Developer at (SDC-SI)",
            reply: "Sample reply2",
            isLiked: true,
            numLikes: 76,
            likeList: [],
          },
        ],
      },
      {
        comment: {
          userId: 43,
          commentId: 12,
          userImg: null,
          isLiked: true,
          numLikes: 90,
          numReplies: 9, 
          peopleLiked: [], 
          name: "Utkarsh Patel",
          tag: "Web Developer at (SDC-SI)",
          comment: "Sample comment2",
        },
        replies: [
          {
            replyId: 3,
            userImg: null,
            name: "Aditya Pratap Singh",
            tag: "Web Developer at (SDC-SI)",
            reply: "Sample reply1",
            isLiked: false,
            numLikes: 31,
            likeList: [],
          },
        ],
      },
    ],
  },
  {
    profileId: 32,
    postId: 87,
    userPic: null,
    // selfUserPic: null,
    selfUserPic: myPic,
    selfProfileId: 123,
    selfName: 'User himself',
    selfTagline : 'self TagLine',
    userName: "Utkarsh Patel",
    userTag:
      "Competitive programmer Competitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmer",
    location: "Noida, Uttar Pradesh, India",
    mediaType: "video",
    mediaSrc: null,
    postText:
      'A lot of people ask me for college advice - how to succeed in college. Here is a complete guide (specially for so-called "tier 2/3" colleges) 1. Realize that your past does not define your future. Be proud of yourself and stand up - the world rewards the brave.2. First learn a skill. It could be coding, graphic designing, marketing, stock trading, whatever. Pick something which has good number of jobs or companies.4. Build your network. Go to college tech events, hackathons and try to connect with senior people. Even one good mentor can change your life.',
    numLikes: 23,
    numComments: 32,
    isSaved: false,
    peopleLiked: [],
    comments: [
      {
        comment: {
          userId: 23,
          commentId: 11,
          userImg: null,
          isLiked: false,
          numLikes: 34,
          numReplies: 43,
          peopleLiked: [], 
          name: "Aditya Pratap Singh",
          tag: "Web Developer at (SDC-SI)",
          comment: "Sample comment",
        },
        replies: [
          {
            replyId: 83,
            userImg: null,
            name: "Aditya Pratap Singh",
            tag: "Web Developer at (SDC-SI)",
            reply: "Sample reply1",
            isLiked: false,
            numLikes: 31,
            likeList: [],
          },
          {
            replyId: 33,
            userImg: null,
            name: "Aditya Pratap Singh",
            tag: "Web Developer at (SDC-SI)",
            reply: "Sample reply2",
            isLiked: true,
            numLikes: 76,
            likeList: [],
          },
        ],
      },
      {
        comment: {
          userId: 43,
          commentId: 12,
          userImg: null,
          isLiked: true,
          numLikes: 90,
          numReplies: 9, 
          peopleLiked: [], 
          name: "Utkarsh Patel",
          tag: "Web Developer at (SDC-SI)",
          comment: "Sample comment2",
        },
        replies: [
          {
            replyId: 3,
            userImg: null,
            name: "Aditya Pratap Singh",
            tag: "Web Developer at (SDC-SI)",
            reply: "Sample reply1",
            isLiked: false,
            numLikes: 31,
            likeList: [],
          },
        ],
      },
    ],
  }
];

class Posts extends Component {
  state = {
    posts: postsData,
  };

  render() {
    let postsData = this.state.posts.map((post, index) => {
      return <Post data={post} />;
    });

    return <div className="posts">{postsData}</div>;
  }
}

export default Posts;
