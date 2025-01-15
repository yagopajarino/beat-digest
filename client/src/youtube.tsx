const YtIframe = (props: { youtubeId: string, youtubeTitle: string }) => {
    return (
        <iframe
        width="1024"
        height="543"
        src={`https://www.youtube.com/embed/${props.youtubeId}`}
        title={props.youtubeTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        // referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
    );
}

export default YtIframe;