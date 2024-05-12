import mongoose from "mongoose";

const RequiremntScehma = mongoose.Schema({
    Groom_Baptismal_Certificate :{
        type: String,
        required: true
    },
    Groom_Confirmation_Certificate :{
        type: String,
        required: true
    },
    Groom_Birth_Certificate :{
        type: String,
        required: true
    },
    Groom_CeNomar_Civil_Married :{
        type: String,
        required: true
    },
    Groom_Cannonical_Application :{
        type: String,
        required: true
    },
    Groom_Id_Picture :{
        type: String,
        required: true
    },
    Groom_Marriage_Banns :{
        type: String,
        required: true
    },
    Groom_Banns_Reply :{
        type: String,
        required: true
    },
    Groom_Pre_Cana :{
        type: String,
        required: true
    },
    Groom_Marriage_Contract :{
        type: String,
        required: true
    },

    Bride_Baptismal_Certificate :{
        type: String,
        required: true
    },
    Bride_Confirmation_Certificate :{
        type: String,
        required: true
    },
    Bride_Birth_Certificate :{
        type: String,
        required: true
    }, 
    Bride_CeNomar_Civil_Married :{
        type: String,
        required: true
    },
    Bride_Cannonical_Application :{
        type: String,
        required: true
    },
    Bride_Id_Picture :{
        type: String,
        required: true
    },
    Bride_Marriage_Banns :{
        type: String,
        required: true
    },
    Bride_Banns_Reply :{
        type: String,
        required: true
    },
    Bride_Marriage_Contract :{
        type: String,
        required: true
    },
})

const WeddingRequirements = mongoose.model('Requirements', RequiremntScehma);
export default WeddingRequirements