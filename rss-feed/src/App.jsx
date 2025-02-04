import axios from 'axios'
import { useState, useEffect } from 'react'
import Feed from './Feed';
function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);
  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:4000/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  
  return (
    <>
      <h1>RSS Feed</h1>
      {articles.map((item, index) => (
            <Feed
                key={index}
                title={item.title}
                link={item.link}
                description={item.description}
            />
      ))}
    </>
  )
}

export default App;
