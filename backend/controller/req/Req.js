import WeddingRequirements from "../../model/files/WeddingReq.js";

const uploadFile = async (req, res) => {
  try {
    const files = req.files;
    const { groomName, brideName, ...otherData } = req.body;
    const data = {
      groomName,
      brideName,
      ...otherData,
    };

    // Iterate over each field and create an object with the file names
    for (const field in files) {
      if (files[field].length > 0) {
        data[field] = files[field][0].filename;
      }
    }

    // Create a new document in the database with the file names and form data
    await WeddingRequirements.create(data);
    res.json({ message: "Successfully upload", data });
  } catch (error) {
    res.json({ status: error });
  }
};

const getAllClient = (req, res) => {
  WeddingRequirements.find()
  .then((Requirements) => {
    if(Requirements.length === 0) {
      return res.json({ message: "No Client found" });
    } return res.status(200).json(Requirements);
  })
  .catch((err) => {
    res.status(500).json({ message: "Failed to retrieve client", error: err.message });
});
}

const getSingleRequirements = (req, res) => {
  const id = req.params.id;
  WeddingRequirements.findById({_id:id})
  .then(requirements => res.json(requirements))
  .catch(err => res.json(err))
}

const updateFile = async (req, res) => {
  const id = req.params.id;

  try {
    // First, find the existing document
    const requirements = await WeddingRequirements.findById(id);

    if (!requirements) {
      return res.status(404).json({ message: "Requirements not found" });
    }

    // Create an object with the new file names or paths
    const updatedData = {};

    // Iterate over each file field and update the corresponding field in updatedData
    for (const field in req.files) {
      if (req.files[field].length > 0) {
        updatedData[field] = req.files[field][0].filename;
      }
    }

    // Update the document with the new file names or paths
    const updatedRequirements = await WeddingRequirements.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true }
    );

    res.json({
      message: "Successfully updated files",
      requirements: updatedRequirements,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to update files",
      error: err.message,
    });
  }
};

export { uploadFile, updateFile, getAllClient, getSingleRequirements };
