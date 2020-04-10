export const home = (req, res) => res.render("home"); // views 폴더에서 home.pug return
export const search = (req, res) => res.render("search");

export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");