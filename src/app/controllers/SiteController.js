const Course = require("../models/Course");
class SiteController {
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: "error" });
            }
        });
        // res.render("home");
    }

    seach(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
