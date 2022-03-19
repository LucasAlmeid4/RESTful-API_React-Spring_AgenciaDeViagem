/* eslint-disable jsx-a11y/alt-text */
function Card({nome, foto}){
    return(
        <div class="col-lg-3 mb-4 mt-4">
            <div class="card rounded">
              <div class="bg-image hover-overlay ripple rounded-3" data-ripple-color="light">
                <img src={foto}
                  class="img-fluid rounded-3" />
                <a href="#!">
                  <div class="mask"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">{nome}</h5>
                <p class="card-text">
                  Bacon ipsum dolor amet porchetta ball tip tenderloin aliqua. Doner culpa officia quis aliquip qui.
                </p>
                <a href="#!" class="btn btn-primary">Saiba mais</a>
              </div>
            </div>
          </div>
    )
}

export default Card