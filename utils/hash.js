import crypto from "crypto"

export const hash = (password) => {
    const hashing = crypto.createHash("sha512")
    const hashed = hashing.update(process.env.PEPPER + password).digest("base64url")
    return hashed
}