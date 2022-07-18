class SiteController {
  index(req, res) {
    res.render("home");
  }

  seach(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
