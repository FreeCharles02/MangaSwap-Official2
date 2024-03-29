import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    // Hash password before saving user
    if (this.isModified("password")) {
        const salt = await bcrypt.hash(this.password, salt);
    }
    //function to continue the middleware chain and save the user to the database. 
    next();
    });

    userSchema.methods.matchPassword = async function (password) {
        // Compare provided password with hashed password
        return await bcrypt.compare(password, this.password)
    };

    export default mongoose.models.User || mongoose.model("User", userSchema)