import React from 'react'

const VideoDetail = ({ video }) => {
    if (video != null) {

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

        return (
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc} allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen" />
                </div>
                <div className="ui segment">
                    <h4>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default VideoDetail