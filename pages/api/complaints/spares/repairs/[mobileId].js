import User from '../../../../database/models/userSchema'
import CSRmodel from '../../../../database/models/complaints_spares_repairsSchema'
import connection from "../../../../database/connection"

export default async function handler(req, res) {
  connection();

  const csr = await CSRmodel.findOne({ mobile: req.query.mobileId });

    res.status(200).json({ success: true, csr });
}
