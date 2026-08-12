import { create } from 'zustand'

const useData = create(() => ({

    //for sidebar
    subscriptions :[{ img: "https://imgs.search.brave.com/_Hf9l4vUroQq5Gks-sFPdFBeNhJzsf_IU5SQ8_ZJjf4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/cmVpbWFnaW5lLndl/YnA", channelName: "sargam" }],

    you_section :[
        { img: '/images/channel.svg', contentName: "Your Channel" },
        { img: '/images/history.svg', contentName: "History" },
        { img: '/images/playlist.svg', contentName: "Playlist" },
        { img: '/images/watch_later.svg', contentName: "Watch Later" },
        { img: '/images/like.svg', contentName: "Liked Videos" },
        { img: '/images/your_video.svg', contentName: "Your Videos" },
        { img: '/images/downloads.svg', contentName: "Downloads" },
        { img: '/images/courses.svg', contentName: "Courses" },
        { img: '/images/clips.svg', contentName: "Clip" },
    ],

    more :[
        { img: "/favicon.svg.webp", contentName: "Try premium for $0" },
        { img: "/favicon.svg.webp", contentName: "Youtube Music" },
        { img: "/favicon.svg.webp", contentName: "Youtube Kids" }
    ],
    explore :[
        { img: '/images/music.svg', contentName: "Music" },
        { img: '/images/gaming.svg', contentName: "Gaming" },
        { img: '/images/sports.svg', contentName: "Sports" },
        { img: '/images/membership.svg', contentName: "Membership" }
    ],
   collapseSidebar :[
        { img: '/images/subscriptions.svg', contentName: "Subscriptions" },
        { img: '/images/you.svg', contentName: "You" }
    ],
    // for filter
    filterOptions :["All", "Comedy", "Science"],

    //for videos
    videos :[
        {
            id: "dQw4w9WgXcQ",
            title: "Never Gonna Give You Up",
            channel: "Rick Astley",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
            duration: "3:32",
            views: 1500000000,
            uploadedAt: "2025-01-15",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            id: "M7lc1UVf-VE",
            title: "YouTube Player API Demo",
            channel: "YouTube Developers",
            thumbnail: "https://img.youtube.com/vi/M7lc1UVf-VE/maxresdefault.jpg",
            duration: "2:15",
            views: 8500000,
            uploadedAt: "2024-08-20",
            url: "https://www.youtube.com/watch?v=M7lc1UVf-VE"
        },
        {
            id: "9bZkp7q19f0",
            title: "Gangnam Style",
            channel: "officialpsy",
            thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
            duration: "4:13",
            views: 5200000000,
            uploadedAt: "2024-06-10",
            url: "https://www.youtube.com/watch?v=9bZkp7q19f0"
        }
    ]

}))

export default useData;