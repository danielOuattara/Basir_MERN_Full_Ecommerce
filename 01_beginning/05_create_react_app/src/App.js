import data from './data';

function App() {
  return (
     <div className="grid-container">
        <header className="row">
            <div>
                <a  className="brand" href="/">amazona</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
            <div className="row center">
              {
                data.products.map( item => {
                  return (
                    <div key={item._id} className="card">
                      <a href={`/product/${item._id}`}>
                          {/* image size: 630 x 830  */}
                          <img 
                            className="medium" 
                            src={item.image} 
                            alt={item.name}/>
                      </a>
                      <div className="card-body">
                           <a href={`/product/${item._id}`}>
                              <h2>{item.name}</h2>
                          </a>
                          <div className="rating">
                              <span><i className="fa fa-star"></i></span>
                              <span><i className="fa fa-star"></i></span>
                              <span><i className="fa fa-star"></i></span>
                              <span><i className="fa fa-star-half-o"></i></span>
                              <span><i className="fa fa-star-o"></i></span>
                          </div>
                          <div className="price">{item.price} €</div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
        </main>
        <footer className="row center">
            All right reserved
        </footer>
    </div>

  );
}

export default App;
