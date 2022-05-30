import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../src/mongodb";
import * as bcrypt from "bcrypt";

type Data =
	| { message: string }
	| {
			token: string;
			user: {
				email: string;
				username: string;
				role: string;
			};
	  };
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	switch (req.method) {
		case "POST":
			return loginUser(req, res);
		default:
			res.status(400).json({
				message: "Bad request"
			});
	}
}
const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { email = "", password = "" } = req.body;
	const { db } = await connectToDatabase();
	const user = await db.collection("users").findOne({ email });
	if (!user) {
		return res.status(400).json({ message: "email o password not valid - e" });
	}
	if (!bcrypt.compareSync(password, user.password!)) {
		return res.status(400).json({ message: "email o password not v alid - p" });
	}

	const { role, username } = user;

	return res.status(200).json({
		token: "",
		user: {
			email,
			role,
			username
		}
	});
};
