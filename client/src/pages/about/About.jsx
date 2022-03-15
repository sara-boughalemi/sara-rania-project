import "./about.css"

export default function Sidebar() {
    return (
      <div class="padding">
      <div class="col-md-8">
          <div class="card"> <img class="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap"/>
              <div class="card-body little-profile text-center">
                  <div class="pro-img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBW_SaoYlrFE0nBtuYO13Wy-t21pPfNhFyFA&usqp=CAU" alt="user"/></div>
                  <h3 class="m-b-0">Salma Mekni</h3>
                  <p>Web Designer &amp; Developer</p> <a href="https://www.instagram.com/?hl=fr" class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a>
                  <div className="hi">
                      <div class="col-lg-4 col-md-4 m-t-20">
                          <h3 class="m-b-0 font-light">10434</h3><small>Articles</small>
                      </div>
                      <div class="col-lg-4 col-md-4 m-t-20">
                          <h3 class="m-b-0 font-light">434K</h3><small>Followers</small>
                      </div>
                      <div class="col-lg-4 col-md-4 m-t-20">
                          <h3 class="m-b-0 font-light">5454</h3><small>Following</small>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }