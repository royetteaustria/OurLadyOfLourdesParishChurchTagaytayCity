import wedding_Records from "../../model/weddingrecords/weddingRecordsModel.js";

const addWeddingRecords = (req, res) => {
    wedding_Records.create(req.body)
    .then((weddingRecords) => {
        res.json({
            message:"Succesfully add records",
            weddingRecords,
        });
    })
    .catch((err) => {
        res.status(404).json({
          message: "Failed to add records",
          error: err.message,
        });
      });
}

const UpdateSingleRecord = (req, res) => {
  const id = req.params.id;
  wedding_Records.findById({_id:id})
  .then(weddingRecords => res.json(weddingRecords))
  .catch(err => res.json(err))
}

const deleteweddingRecords = (req, res) => {
    wedding_Records.findOneAndDelete({ _id: req.params.id })
      .then((weddingRecords) => {
        if (weddingRecords) {
          res.json({
            message: "Successfully delete wedding records",
            weddingRecords
          });
        } else {
          res.status(404).json({
            message: "Record not found",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Failed to delete",
          error: err.message,
        });
      });
  }
  

const listWeddingRecords = (req, res) => {
    wedding_Records.find()
    .then((weddingRecords) => {
        if (weddingRecords.length === 0) {
            return res.json({ message: "No records found" });
        }
        return res.status(200).json(weddingRecords);
    })
    .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve records", error: err.message });
    });
}


const updateweddingRecords = (req, res) => {
    const id = req.params.id;
    wedding_Records.findOneAndUpdate({_id: id}, {groomName: req.body.groomName,
      groomBirth: req.body.groomBirth,
      groomPlaceofBirth: req.body.groomPlaceofBirth,
      groomSex: req.body.groomSex,
      groomCitezenship: req.body.groomCitezenship,
      groomResidence: req.body.groomResidence,
      groomReligion: req.body.groomReligion,
      groomCivilStatus: req.body.groomCivilStatus,
      groomNameofFather: req.body.groomNameofFather,
      groomFatherCitezenship: req.body.groomFatherCitezenship,
      groomNameofMother: req.body.groomNameofMother,
      groomMotherCitezenship: req.body.groomMotherCitezenship,
      groomNameOfPersonWhoGaveConcent: req.body.groomNameOfPersonWhoGaveConcent,
      groomNameOfPersonWhoGaveConcentRelationship: req.body.groomNameOfPersonWhoGaveConcentRelationship,
      groomPersonWhoGaveConcentResidence: req.body.groomPersonWhoGaveConcentResidence,
      brideName: req.body.brideName,
      brideBirth: req.body.brideBirth,
      bridePlaceofBirth: req.body.bridePlaceofBirth,
      brideSex: req.body.brideSex,
      brideCitezenship: req.body.brideCitezenship,
      brideResidence: req.body.brideResidence,
      brideReligion: req.body.brideReligion,
      brideCivilStatus: req.body.brideCivilStatus,
      brideNameofFather: req.body.brideNameofFather,
      brideFatherCitezenship: req.body.brideFatherCitezenship,
      brideNameofMother: req.body.brideNameofMother,
      brideMotherCitezenship: req.body.brideMotherCitezenship,
      brideNameOfPersonWhoGaveConcent: req.body.brideNameOfPersonWhoGaveConcent,
      brideNameOfPersonWhoGaveConcentRelationship: req.body.brideNameOfPersonWhoGaveConcentRelationship,
      bridePersonWhoGaveConcentResidence: req.body.bridePersonWhoGaveConcentResidence,

      RegistryNo: req.body.RegistryNo,
      Province: req.body.Province,
      City_Municipality: req.body.City_Municipality,
      placeOfMarriage: req.body.placeOfMarriage,
      dateOfMarriage: req.body.dateOfMarriage,
      timeOfMarriage: req.body.timeOfMarriage,
      priestWhoMarried: req.body.priestWhoMarried,
    })
    .then((weddingRecords) => {
           res.json({
            message: "Successfully update",
            weddingRecords,
        })
    })
    .catch((err) => {
        res.status(404).json({
            message: "Cant be update",
            error: err.message,
        });
    });
}

export { addWeddingRecords,
        deleteweddingRecords,
        listWeddingRecords,
        updateweddingRecords,
        UpdateSingleRecord  }