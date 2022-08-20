import React from 'react';

const TrackDetail = ({ track }) => {
  console.log('Dilip Track: ', track);
  const {
    id,
    title,
    thumbnail,
    length,
    modulesCount,
    description,
    numberOfViews,
    author,
    modules,
  } = track;
  return (
    <div>
      {id}
      {/* {title}
      {thumbnail}
      {length}
      {modulesCount}
      {description}
      {numberOfViews} */}
      {author.id}
      {/* {author.name}
      {author.photo} */}
      {modules[0].id}
      {/* {modules.title}
      {modules.length}
      {modules.content}
      {modules.videoUrl} */}
    </div>
  );
};

export default TrackDetail;
