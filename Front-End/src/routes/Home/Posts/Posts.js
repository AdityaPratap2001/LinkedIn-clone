import React, { Component } from 'react';
import Post from './Post/Post';
import './Posts.css';

let postsData = [
  {
    profileId : 32,
    userPic : null,
    userName : 'Utkarsh Patel',
    userTag : 'Competitive programmer Competitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmerCompetitive programmer',
    location : 'Noida, Uttar Pradesh, India',
    mediaType : 'img',
    postText : 'A lot of people ask me for college advice - how to succeed in college. Here is a complete guide (specially for so-called "tier 2/3" colleges) 1. Realize that your past does not define your future. Be proud of yourself and stand up - the world rewards the brave.2. First learn a skill. It could be coding, graphic designing, marketing, stock trading, whatever. Pick something which has good number of jobs or companies.4. Build your network. Go to college tech events, hackathons and try to connect with senior people. Even one good mentor can change your life.',
    numLikes : 23,
    numComments : 32,
    isSaved : false,
    peopleLiked : [],
    comments : [
      
      {
        comment : {
          userImg : null,
          name : 'Aditya Pratap Singh',
          tag : 'Web Developer at (SDC-SI)',
          comment : 'Sample comment',
        },
        reply : {
          userImg : null,
          name : 'Aditya Pratap Singh',
          tag : 'Web Developer at (SDC-SI)',
          comment : 'Sample reply',
        }
      },
      {
        comment : {
          userImg : null,
          name : 'Aditya Pratap Singh',
          tag : 'Web Developer at (SDC-SI)',
          comment : 'Sample comment',
        },
        reply : {
          userImg : null,
          name : 'Aditya Pratap Singh',
          tag : 'Web Developer at (SDC-SI)',
          comment : 'Sample reply',
        }
      }

    ]

  }
]

class Posts extends Component {

  state = {
    posts : postsData,
  }

  render() {

    let postsData = this.state.posts.map((post,index)=>{
      return (
        <Post data={post}/>
      )
    })

    return (
      <div className='posts'>
        {postsData}
      </div>
    );
  }
}

export default Posts;