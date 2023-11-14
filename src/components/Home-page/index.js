const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <div class="card" style={{ width: '18rem' }}>
        <img
          src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=ais"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
