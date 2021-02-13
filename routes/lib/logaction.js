function logaction (cookie = "") {
	if (cookie != undefined) {
		if (cookie.value == "h4ppy v4l3nt1n3'5 d4y") {
		return '<button type="button" onclick="location.href=\'/admin\';" class="btn btn-secondary me-1">Admin</button> \
			<button type="button" onclick="location.href=\'/disconnect\';" class="btn btn-secondary ms-1">Log out</button>'
		}
	}
	return '<button type="button" onclick="location.href=\'/connect\';" class="btn btn-secondary">Log in</button>'
}

module.exports = logaction
