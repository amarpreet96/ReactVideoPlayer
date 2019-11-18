import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onVideoSelect})=>{
    const renderedList = videos.map((video)=>{
        return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
    })
    return <div className="ui relaxed divided list"> <h4>Search Results will apear here: </h4>{renderedList}</div>;
};

export default VideoList;