import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelected}) => {
    return (
        <div onClick={() => onVideoSelected(video)} className="video-item item">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.default.url}/>
            <div className="content">
                <div className="header">
                    <label>{video.snippet.title}</label>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;