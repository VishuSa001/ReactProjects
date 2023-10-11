import React from "react";
import Video from "./components/Video";
import "../src/App.css";
function App() {
  let obj={
    title: "Database",
    channel: "Vishal Saini",
    view:"1000k",
    time: "1 month ago",
    verified: "true"

  }
  return (
    <div className="App">
      <h1 className="head">YouTube Playlist Thumbnail</h1>
      <Video
      
      {...obj}


        // title="ReactJs Practice With props"
        // channel="Vishu"
        // view="10k"
        // time="1 month aga"
      />
      <Video
        verified={false}
        title="Nodejs Practice with props"
        channel="Vishu"
        view="50k"
        time="1 month aga"
      />
      <Video
        title="MongoDb Practice with props"
        // channel="Vishu"
        view="20k"
        time="1 month aga"
       verified={false}

      />
    

    </div>
  );
}

export default App;
