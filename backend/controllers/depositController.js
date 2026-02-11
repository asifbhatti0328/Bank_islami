import depositModel from '../models/depositModel.js'
import userModel from '../models/userModel.js'


//Route for user deposit
const depositUser = async (req, res) => {
    try {
        const { depositMethod, depositAmount,accountHolderName,accountNumber } = req.body;
        const userId = await userModel.findById('6983847bbdab67776d1d30ec');

        const newDeposit = new depositModel({
            depositMethod,
            accountHolderName,
            accountNumber,
            depositAmount,
            userId: userId._id,
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