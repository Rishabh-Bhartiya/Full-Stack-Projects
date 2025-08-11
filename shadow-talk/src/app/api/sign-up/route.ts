import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
    await dbConnect()

    try {
        const { username, email, password } = await request.json()

        const exitingUserVerifiedByUsername = await UserModel.findOne({
            username,
            isVerified: true
        })

        if (exitingUserVerifiedByUsername) {
            return Response.json({
                success: false,
                message: "User is Already Taken"
            }, { status: 400 })
        }

        const exitingUserVerifiedByEmail = await UserModel.findOne({ email })

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()

        if (exitingUserVerifiedByEmail) {
            if(exitingUserVerifiedByEmail.isVerified) {
                return Response.json({
                    success: false,
                    message: "User Already Exist with this Email"
                }, {status: 400})
            } else {
                const hasedPassword = await bcrypt.hash(password, 10)
                exitingUserVerifiedByEmail.password = hasedPassword;
                exitingUserVerifiedByEmail.verifyCode = verifyCode;
                exitingUserVerifiedByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000)

                await exitingUserVerifiedByEmail.save()
            }
        } else {
            const hasedPassword = await bcrypt.hash(password, 10)
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1)

            const newUser = new UserModel({
                username,
                email,
                password: hasedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false,
                isAcceptingMessage: true,
                messages: [],
            })
            await newUser.save()
        }

        // Send Verification Email
        const emailResponse = await sendVerificationEmail(
            email,
            username,
            verifyCode
        )

        if(!emailResponse.success) {
            return Response.json({
                success: false,
                message: emailResponse.message
            }, {status: 500})
        }

        return Response.json({
            success: true,
            message: "User Registered Successfully. Please Verify Your Email"
        }, {status: 201})

    } catch (error) {
        console.error("Error Registering User");
        return Response.json(
            {
                success: false,
                message: "Error Registering User"
            },
            {
                status: 500
            }
        )
    }
}
