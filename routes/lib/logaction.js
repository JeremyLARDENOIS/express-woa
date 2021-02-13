function logaction (cookie = "") {
	if (cookie != undefined) if (cookie.value == "lol") return "OMG"
	return '<button type="button" onclick="location.href=\'/connect\';" class="btn btn-secondary">Log in</button>'
}

module.exports = logaction
