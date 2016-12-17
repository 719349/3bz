var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/:page', function(req, res, next) {
	var requestedPage = req.params.page;
	console.log('Processing request for page ', req.params);
	res.render(requestedPage, { title: requestedPage });
});

module.exports = router;
