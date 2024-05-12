import Report from "../../model/report/Report.js";

const CreateReport = (req, res) => {
    Report.create(req.body)
    
    .then((Reports) => {
        res.json({
            message:"Succesfully create!",
            Reports,
        });
        console.log(Report)
    })
    .catch((err) => {
        res.status(404).json({
          message: "Failed to add records",
          error: err.message,
        });
      });
}

const deleteReports = (req, res) => {
    Report.findOneAndDelete(req.params.id, req.body)
    .then((Reports) => {
        res.json({
            message: "Successfully delete Report",
            Reports
        })
    })
    .catch((err) => {
        res.status(404).json({
          message: "failed to delete",
          error: err.message,
        });
      });
}

const listReport = (req, res) => {
    Report.find()
    .then((Reports) => {
        if (Reports.length === 0) {
            return res.json({ message: "No reports found" });
        }
        return res.status(200).json(Reports);
    })
    .catch((err) => {
        res.status(500).json({ message: "Failed to retrieve reports", error: err.message });
    });
}


const updateReports = (req, res) => {
    Report.findOneAndUpdate(req.params.id, req.body)
    .then((Reports) => {
        console.log({ Reports })
        return res.json({
            message: "Successfully update",
            Reports,
        })
    })
    .catch((err) => {
        res.status(404).json({
            message: "Cant be update",
            error: err.message,
        })
    })
}

const GetSingleReport = (req, res) => {
    const id = req.params.id;
    Report.findById({_id:id})
    .then(record => res.json(record))
    .catch(err => res.json(err))
}

export { CreateReport,
        deleteReports,
        listReport,
        updateReports,
        GetSingleReport }