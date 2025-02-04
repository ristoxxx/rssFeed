/*
 * File: Feed.jsx
 * Created Date: Tuesday February 4th 2025 01:38:56
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Tuesday February 4th 2025 02:06:29
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

const Feed = ({ title, link }) => {

  return (
    <div>
      <h2>{title}</h2><br />
      <a href={link} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Read more</a>
      <br></br>
      <br></br>
    </div>
  );
};

export default Feed;
