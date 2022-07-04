const getPlaylists = (req, res) => {
	// add the name of the function in brackets as a string
	// name it the same as the function so you know for sure the right objet has been returned
	return res.send("getPlaylists");
};

const getPlaylist = (req, res) => {
	return res.send("getPlaylist");
};

const createPlaylist = (req, res) => {
	return res.send("createPlaylist");
};

const updatePlaylist = (req, res) => {
	return res.send("updatePlaylist");
};

const deletePlaylist = (req, res) => {
	return res.send("deletePlaylist");
};

module.exports = {
	getPlaylists,
	getPlaylist,
	createPlaylist,
	updatePlaylist,
	deletePlaylist,
};
