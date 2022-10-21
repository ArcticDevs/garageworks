import CSRmodel from '../../../../database/models/complaints_spares_repairsSchema'
import connection from "../../../../database/connection"

export default async function handler(req, res) {
  connection();
  
  const csrs = await CSRmodel.find();

  res.status(200).json({ success: true, csrs });
}
