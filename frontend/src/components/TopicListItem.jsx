import React from "react";

import "../styles/TopicListItem.scss";
import "../styles/TopicList.scss";

const TopicListItem = ({ title, onClick}) => {
  return (
    <div className="topic-list__item" onClick={onClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;