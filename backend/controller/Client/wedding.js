import weddingClient from "../../model/client/wedding.js";

const acceptWedidngClient = (req, res) => {
    weddingClient.create(req.body)
    .then((wedding_client) => {
        res.json({
            message:"Succesfully Accept",
            wedding_client,
        });
    })
    .catch((err) => {
        res.status(404).json({
          message: "Failed to Accept",
          error: err.message,
        });
      });
}

const listWeddingClient = (req, res) => {
    weddingClient.find()
    .then((wedding_client) => {
        if (wedding_client.length === 0) {
            return res.json({ message: "No Inquiries" });
        }
        return res.status(200).json(wedding_client);
    })
    .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve records", error: err.message });
    });
}

const updateWeddingClient = async (req, res) => {
    const id = req.params.id;
    
    weddingClient.findOneAndUpdate({_id: id}, 
            {
            groom_Cannonical_Interview: req.body.groom_Cannonical_Interview,
            groomalreadyBaptist: req.body.groomalreadyBaptist,
            groomalreadyKumpil: req.body.groomalreadyKumpil,
            Bride_Cannonical_Interview: req.body.Bride_Cannonical_Interview,
            weddingStatus: req.body.weddingStatus,
            bridealreadyBaptist: req.body.bridealreadyBaptist,
            bridealreadyKumpil: req.body.bridealreadyKumpil
            }
        )
        .then((client) => {
            console.log(client)
            res.json({
                message:"Succesfully add update",
                client,
            });
        })
        .catch((err) => {
            res.status(404).json({
              message: "Failed to update client",
              error: err.message,
            });
          });
};

const getSingleClient = (req, res) => {
    const id = req.params.id;
    weddingClient.findById({_id:id})
    .then(wedding_client => res.json(wedding_client))
    .catch(err => res.json(err))
};
  

export {
    acceptWedidngClient,
    listWeddingClient,
    updateWeddingClient,
    getSingleClient,
}