import React, { useState, useEffect } from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from "./firebase"

function Feed() {

   const  [posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => {  //when you get that real time snapshot update 
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))                               // update the post
      });

    }, []);                   // Only runs once when it is load

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender/>
               
            {posts.map((post) => (
              <Post
                key={post.data.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
              />
             ))}   
          

            {/* <Post
            //   key={id}
            //   profilePic={profilePic}
              profilePic="https://images.squarespace-cdn.com/content/v1/53d25377e4b0089588796f30/1406344741887-8CJZ6VYSCX1QIRPHJEX8/ke17ZwdGBToddI8pDm48kBUDAxm-FLUF-OJf9moK1kV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT_TXfTUFcrrnRvtinoH4JYxq5g0UB9t65pVePltZrd1IKYY7Qu0iTZQJ-GJ4dsqLQ/image-asset.jpeg"
            //   message={message}
            //   timestamp={timestamp}
            //   username={username}
            //   image={image}
            message="This is work"
            timestamp="This is a Timestamp"
            username='Ben'
            image="https://syscryption.com/public/admin/myimg/563809162.png"
            />
            <Post
            //   key={id}
            //   profilePic={profilePic}
              profilePic="https://images.squarespace-cdn.com/content/v1/53d25377e4b0089588796f30/1406344741887-8CJZ6VYSCX1QIRPHJEX8/ke17ZwdGBToddI8pDm48kBUDAxm-FLUF-OJf9moK1kV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT_TXfTUFcrrnRvtinoH4JYxq5g0UB9t65pVePltZrd1IKYY7Qu0iTZQJ-GJ4dsqLQ/image-asset.jpeg"
            //   message={message}
            //   timestamp={timestamp}
            //   username={username}
            //   image={image}
            message="This is work"
            timestamp="This is a Timestamp"
            username='Ben'
            image="https://syscryption.com/public/admin/myimg/563809162.png"
            />
            <Post
            //   key={id}
            //   profilePic={profilePic}
              profilePic="https://images.squarespace-cdn.com/content/v1/53d25377e4b0089588796f30/1406344741887-8CJZ6VYSCX1QIRPHJEX8/ke17ZwdGBToddI8pDm48kBUDAxm-FLUF-OJf9moK1kV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT_TXfTUFcrrnRvtinoH4JYxq5g0UB9t65pVePltZrd1IKYY7Qu0iTZQJ-GJ4dsqLQ/image-asset.jpeg"
            //   message={message}
            //   timestamp={timestamp}
            //   username={username}
            //   image={image}
            message="This is work"
            timestamp="This is a Timestamp"
            username='Ben'
            image="https://syscryption.com/public/admin/myimg/563809162.png"
            /> */}
        </div>
    );
}

export default Feed
