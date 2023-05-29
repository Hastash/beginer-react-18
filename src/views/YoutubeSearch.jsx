import "./css/Blog.css"
import axios from "axios";
import moment from "moment-timezone";
import { useState, useEffect } from "react";
const YoutubeSearch = () => {
    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState([])
    const { YOUTUBE_API_KEY } = require("../config");
    if (!YOUTUBE_API_KEY) {
        throw new Error("No API key is provided");
      }
    useEffect(()=>{

    },[])
    //youtube API sees all these info, so that it knows what kind of information you want to retrieve
    const options = {
        key: YOUTUBE_API_KEY,
        type: 'video',
        part: 'snippet',
        maxResults: 10,
        q: query
    };
    const handleSearchYoutube = async () => {
        let url = 'https://www.googleapis.com/youtube/v3/search'
        url += '?' + Object.keys(options).map((k) => k + '=' + encodeURIComponent(options[k])).join('&');
        let res = await fetch(url);
        let response = await res.json();
        console.log('>>Check response: ',response)
        if (response && response.items){
            let raw = response.items;
            let result = [];
            if (raw.length > 0){
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.publishAt = item.snippet.publishAt;
                    object.author = item.snippet.channelTitle;
                    object.description = item.snippet.description;
                    result.push(object)
                })
            }
            setVideos(result);
            console.log('>>Check result: ',result)
        }
        console.log('>>Check video: ',videos)
        
        // // Handel with array
        // setVideos(response.items)
    }
    return (
        <div className="youtube-search-container">
            <div className="youtube-search-container">
                <input type="text" placeholder="Search"
                    value ={query}
                    onChange={(e)=>setQuery(e.target.value)}
                />
                <button type="button" onClick={handleSearchYoutube}> Search</button>
            </div>
            {videos && videos.length > 0 && 
                videos.map(item=>{
                    return(
                        <div className="yt-result" key={item.id}>
                            <div className="left">
                            <iframe className="ifram-yt"
                            src={`https://www.youtube.com/embed/${item.id}`}
                            title="Strapi Crash Course (with React &amp; GraphQL) #1 - Intro &amp; Setup" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen></iframe>

                            </div>
                            <div className="right">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="publish">
                                    Create At: {moment(item.publishAt).format('DD-MM-YYYY HH:mm:ss')}
                                </div>
                                <div className="author">
                                    Author: {item.author}
                                </div>
                                <div className="description">
                                    {item.description}    
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "67CX2yhKthx-86OvdY9C37-bFxk",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 449306,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "w7aOL5Yb7edBKtVRZoQssDEn-b4",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "qw--VYLpxG4"
//         },
//         "snippet": {
//           "publishedAt": "2019-04-04T14:00:12Z",
//           "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
//           "title": "Learn PostgreSQL Tutorial - Full Course for Beginners",
//           "description": "Learn how to use PostgreSQL in this full course. PostgreSQL is a general purpose and object-relational database management ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/qw--VYLpxG4/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/qw--VYLpxG4/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/qw--VYLpxG4/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "freeCodeCamp.org",
//           "liveBroadcastContent": "none",
//           "publishTime": "2019-04-04T14:00:12Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "ttmTqLxtARES4aLVVJNvxQnHLFM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "btjBNKP49Rk"
//         },
//         "snippet": {
//           "publishedAt": "2022-12-12T12:00:17Z",
//           "channelId": "UCKWaEZ-_VweaEx1j62do_vQ",
//           "title": "PostgreSQL vs MySQL",
//           "description": "Deploy PostgreSQL → https://ibm.biz/BdPSXZ Get Started with MySQL→ https://ibm.biz/BdPSXY Most Relational Database ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/btjBNKP49Rk/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/btjBNKP49Rk/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/btjBNKP49Rk/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "IBM Technology",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-12-12T12:00:17Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "eD5W4Ueita9441bQaB_OFRULnYE",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "85pG_pDkITY"
//         },
//         "snippet": {
//           "publishedAt": "2022-09-29T14:38:09Z",
//           "channelId": "UCwRXb5dUK4cvsHbx-rGzSgw",
//           "title": "PostgreSQL Tutorial Full Course 2022",
//           "description": "I provide here in this PostgreSQL tutorial a full course you can use to master PostgreSQL. Postgres is an object relational ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/85pG_pDkITY/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/85pG_pDkITY/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/85pG_pDkITY/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Derek Banas",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-09-29T14:38:09Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "gCow81WYvEe7Xb-97r373qdlSTI",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "eMIxuk0nOkU"
//         },
//         "snippet": {
//           "publishedAt": "2021-04-05T09:30:02Z",
//           "channelId": "UCsvqVGtbbyHaMoevxPAq9Fg",
//           "title": "PostgreSQL Tutorial For Beginners | What Is PostgreSQL? | Learn PostgreSQL | Simplilearn",
//           "description": "Data Analyst Master's Program (Discount Code: YTBE15): ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/eMIxuk0nOkU/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/eMIxuk0nOkU/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/eMIxuk0nOkU/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Simplilearn",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-04-05T09:30:02Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "NYKzGGWcOWu-Pw5XWYlwGddJhrs",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "zw4s3Ey8ayo"
//         },
//         "snippet": {
//           "publishedAt": "2022-01-14T21:40:32Z",
//           "channelId": "UC3gaPMKmnqWRFPHuiRNojvw",
//           "title": "PostgreSQL CRASH COURSE - Learn PostgreSQL in 2022",
//           "description": "Thank you for watching! If you enjoyed please consider subscribing and liking the video. Follow me on Twitter ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/zw4s3Ey8ayo/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/zw4s3Ey8ayo/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/zw4s3Ey8ayo/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Troy Amelotte",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-01-14T21:40:32Z"
//         }
//       }
//     ]
//   }
  