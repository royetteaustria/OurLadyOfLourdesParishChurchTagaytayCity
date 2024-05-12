import massClient from "../../model/client/mass.js";

const createMasslClient = (req, res) => {
    massClient.create(req.body)
    .then((mass_client) => {
        res.json({
            message:"Succesfully Accept",
            mass_client,
        });
    })
    .catch((err) => {
        res.status(404).json({
          message: "Failed to Accept",
          error: err.message,
        });
      });
}

const listMassClient = (req, res) => {
    massClient.find()
    .then((mass_client) => {
        if (mass_client.length === 0) {
            return res.json({ message: "No Inquiries" });
        }
        return res.status(200).json(mass_client);
    })
    .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve records", error: err.message });
    });
}

const updateMassClient = (req, res) => {
    const id = req.params.id;
    massClient.findOneAndUpdate({ _id: id }, { description: req.body.description, status: req.body.status })
        .then((mass_client) => {
            console.log({ mass_client })
            return res.json({
                message: "Successfully update",
                mass_client,
            })
        })
        .catch((err) => {
            res.status(404).json({
                message: "Can't be updated",
                error: err.message,
            })
        })
}


const getSingleClient = (req, res) => {
    const id = req.params.id;
    massClient.findById({_id:id})
    .then(mass_client => res.json(mass_client))
    .catch(err => res.json(err))
};




export {
    createMasslClient,
    listMassClient,
    updateMassClient,
    getSingleClient
}