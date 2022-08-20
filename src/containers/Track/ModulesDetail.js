import React from 'react';

const ModulesDetail = ({ trackmodules }) => {
  //   console.log(trackmodules);
  const { id, title, length, content, videoUrl } = trackmodules;
  console.log(id);
  return (
    <div>
      {id}
      {/* {title}
      {length}
      {content}
      {videoUrl} */}
    </div>
  );
};

export default ModulesDetail;
