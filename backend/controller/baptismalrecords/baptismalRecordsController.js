import baptismal_records from "../../model/baptismalRecords/baptismalRecordsModel.js";

const addBaptismalRecords = (req, res) => {
    baptismal_records.create(req.body)
    .then((baptismalRecords) => {
        res.json({
            message:"Succesfully add records",
            baptismalRecords,
        });
    })
    .catch((err) => {
        res.status(404).json({
          message: "Failed to add records",
          error: err.message,
        });
      });
}

const deletebaptismalRecords = (req, res) => {
    baptismal_records.findOneAndDelete({_id: req.params.id})
    .then((baptismalRecords) => {
        if(baptismalRecords) {
            res.json({
                message: "Successfully delete baptismal records",
                baptismalRecords
            })
        } else {
            res.status(404).json({
              message: "Record not found",
            });
          }
    })
    .catch((err) => {
        res.status(404).json({
          message: "failed to delete",
          error: err.message,
        });
      });
}

const listBaptismalRecords = (req, res) => {
    baptismal_records.find()
    .then((baptismalRecords) => {
        if (baptismalRecords.length === 0) {
            return res.json({ message: "No records found" });
        }
        return res.status(200).json(baptismalRecords);
    })
    .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve records", error: err.message });
    });
}

const GetSingleRecord = (req, res) => {
    const id = req.params.id;
    baptismal_records.findById({_id:id})
    .then(baptismalRecords => res.json(baptismalRecords))
    .catch(err => res.json(err))
}

const updatebaptismalRecords = (req, res) => {
    const id = req.params.id;
    baptismal_records.findOneAndUpdate({_id: id}, {name: req.body.name, dateofBirth: req.body.dateofBirth,
        dateofBaptismal: req.body.dateofBaptismal,
        birthPlace: req.body.birthPlace,
        cellphoneNumber: req.body.cellphoneNumber,
        currentAddress: req.body.currentAddress,
        fatherName: req.body.fatherName,
        fatherBirthOfPlace: req.body.fatherBirthOfPlace,
        motherName: req.body.motherName,
        motherBirthOfPlace: req.body.motherBirthOfPlace,
        marriedPlace: req.body.marriedPlace,
        priestWhoBaptized: req.body.priestWhoBaptized,
        godMother: req.body.godMother,
        godFather: req.body.godFather})

        .then((baptismalRecords) => {
            console.log(baptismalRecords)
            res.json({
                message:"Succesfully add update",
                baptismalRecords,
            });
        })
        .catch((err) => {
            res.status(404).json({
              message: "Failed to update records",
              error: err.message,
            });
          });
}

export {
    addBaptismalRecords,
    deletebaptismalRecords,
    updatebaptismalRecords,
    listBaptismalRecords,
    GetSingleRecord
}