console.log('Starting up');

function initPage() {
  renderProjs()
}
function renderProjs() {
  console.log('render proj')
  var projs = getProjs()
  console.log(projs)
  var strHtmls = projs.map(proj => `<div class="col-md-4 col-sm-6 portfolio-item">
            <a
              class="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                src="img/portfolio/01-thumbnail.jpg"
                alt=""
              />
            </a>
            <div class="portfolio-caption">
              <h4>Threads</h4>
              <p class="text-muted">Illustration</p>
            </div>
          </div>`

  )
  document.querySelector('.projs').innerHTML = strHtmls.join('')

}