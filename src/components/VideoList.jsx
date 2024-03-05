const videos = [
    {
        name: 'JavaScript',
        duration: 15,
        id: 1,
    },
    {
        name: 'TypeScript',
        duration: 15,
        id: 2,
    },
    {
        name: 'React',
        duration: 15,
        id: 3,
    },
    {
        name: 'Redux',
        duration: 13,
        id: 4,
    }
]

export function VideoList() {
    return(
        <>
            <h1>Video List</h1>
            {
                videos.map((video) => {
                    return(
                        <div key = {video.id}>
                            <p>{video.name}</p>
                            <p>{video.duration}</p>
                            <button>Like!</button>
                        </div>
                    )
                })
            }
        </>
    );
}