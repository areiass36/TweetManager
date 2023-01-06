const user = require("../models/user");

exports.getUser = async (req, res) => {
    console.log("Get user called");
    const id = req.params.id;
    if (!id)
        res.status(400).send({ error: "No id was passed by" });

    const u = await user.findOne({ _id: id });

    if (!u)
        return res.status(200).send({ error: "Id could not be found" });

    res.status(200).send({
        _id: u._id,
        name: u.name,
        username: u.username,
        deletedTweetsCount: u.deletedTweetsCount,
        profileImageUrl: u.profileImageUrl,
    });
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;

    if (!id)
        res.status(400).send({ error: "No id was passed by" });

    console.log("Called??");

    await user.deleteOne({ _id: id });
    res.status(200).send({ deleted: true });
};