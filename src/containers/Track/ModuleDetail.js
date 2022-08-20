import React from 'react';

const ModuleDetail = ({ track, module }) => {
  const { id, title, length, content, videoUrl } = module;
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

export default ModuleDetail;
