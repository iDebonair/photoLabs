import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topicData?.map((topic) => (
        <TopicListItem
          key={topic.id}
          title={topic.title}
          onClick={() => props.handleTopicClick(topic.id)}
        />
      ))}
    </div>
  );
};

export default TopicList;
