import React from 'react';
import Articles from './MOCK_DATA.json'; // Import your JSON data

const List = () => {
  return (
    <ul>
      {Articles.map(article => (
        <li key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.author} {article.date}</p>
          <p>{article.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
