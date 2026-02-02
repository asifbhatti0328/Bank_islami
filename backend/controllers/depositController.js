import depositModel from '../models/depositModel.js'
import userModel from '../models/userModel.js'


//Route for user deposit
const depositUser = async (req, res) => {
    try {
        const { depositMethod, depositAmount } = req.body;
        const transactionId = Math.floor(Math.random() * 5000000000) + 1;
        const userId = await userModel.findById('69343d6afc346164000b9e86');

        const newDeposit = new depositModel({
            depositMethod,
            depositAmount,
            userId: userId._id,
            transactionId: transactionId
        })

        const deposit = await newDeposit.save();
        console.log(deposit)
        res.json({ success: true, deposit })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

export default depositUser;