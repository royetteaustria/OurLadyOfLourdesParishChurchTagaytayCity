import Binyag from '../../model/client/Baptismal.js'
import nodemailer from 'nodemailer'

const createBaptismalClient = (req, res) => {
    Binyag.create(req.body)  // Use req.body instead of req, res
    .then((baptismal_Client) => {
        res.json({
            message: 'Successfully accepted',
            baptismal_Client,
        });
    })
    .catch((err) => {
        res.status(404).json({
          message: "Failed accept",
          error: err.message,
        });
    });
};


const listbaptismalClient = (req, res) => {
    Binyag.find()
    .then((baptismal_Client) => {
        if (baptismal_Client.length === 0) {
            return res.json({ message: "No Inquiries" });
        }
        return res.status(200).json(baptismal_Client);
    })
    .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve records", error: err.message });
    });
}

const updatebaptismalClient = (req, res) => {
    const id = req.params.id;
    Binyag.findOneAndUpdate({ _id: id }, { status: req.body.status, seminar: req.body.seminar })
    .then((baptismal_Client) => {
        console.log({ baptismal_Client })
        return res.json({
            message: "Successfully update",
            baptismal_Client,
        })
    })
    .catch((err) => {
        res.status(404).json({
            message: "Cant be update",
            error: err.message,
        })
    })
}

const getSingleClient = (req, res) => {
    const id = req.params.id;
    Binyag.findById({_id: id})
    .then(baptismal_Client => res.json(baptismal_Client))
    .catch(err => res.json(err))
}

export {
    createBaptismalClient,
    listbaptismalClient,
    updatebaptismalClient,
    getSingleClient
}