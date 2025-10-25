// Load environment variables

const JWT_User_SECRET = process.env.JWT_USER_SECRET;
const JWT_Admin_SECRET = process.env.JWT_ADMIN_SECRET;

module.exports = {
    JWT_User_SECRET,
    JWT_Admin_SECRET
};
