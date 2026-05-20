import crypto from "crypto"

export const hash = (password) => {
    const pepperpassword = pepper+password
    const hashing = crypto.createHas("sha512")
    const hashed = hashing.update(process.env.PEPPER + password).digest("base64url")
    return hashed
}