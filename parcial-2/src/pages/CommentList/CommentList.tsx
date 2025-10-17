import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComments, toggleFavorite } from '../../redux/slices/commentslice';
import type { RootState, AppDispatch } from '../../redux/store';
import { Link } from 'react-router';

const CommentList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector((state: RootState) => state.comments.comments);

  useEffect(() => {
    if (comments.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/comments?_limit=20')
        .then(res => res.json())
        .then(data => {
          dispatch(setComments(data));
        });
    }
  }, [dispatch, comments.length]);

  return (
    <div>
      <h2>Lista de Comentarios</h2>
      {comments.map(comment => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p><strong>Email:</strong> {comment.email}</p>
          <p>{comment.body}</p>
          <button onClick={() => dispatch(toggleFavorite(comment.id))}>
            {comment.favorite ? 'Quitar Favorito' : 'Marcar Favorito'}
          </button>
          <Link to={`/edit/${comment.id}`}>
            <button>Editar</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
