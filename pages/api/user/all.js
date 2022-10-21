import User from "../../database/models/userSchema";
import connection from '../../database/connection'

export default async function handler(req, res) {
    connection();
    const users = await User.find()

    res.status(200).json({success:true,users})
}
