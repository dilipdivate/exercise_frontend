import React from 'react';
import { IncrementTrackViews } from '../../mutations/trackMutation.js';
import { useMutation } from '@apollo/client';

const TrackCard = ({ track }) => {
  const { title, thumbnail, author, length, modulesCount, id, modules } = track;

  const [incrementTrackViews] = useMutation(IncrementTrackViews, {
    variables: { incrementTrackViewsId: id },
    onCompleted: (data) => {
      console.log(data);
    },
  });
  return (
    <div to={`/track/${id}`} onClick={incrementTrackViews}>
      {/* 'Title' {title} | */}
      {/* 'Thumbnail ' {thumbnail} | 'Author_photo '{author.photo}{' '} */}
      {/* | "Author_name "{author.name}| "Length " {length} | "Modules_Count "{' '} */}
      "Modules_Count " {modulesCount} | | "Track_id " {track.id} | | "Author_id
      "{author.id} | | "Module_id" {modules[0].id}
    </div>
  );
};

export default TrackCard;
