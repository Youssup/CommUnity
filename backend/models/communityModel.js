const db = require("../config/db");

const Community = {
    // Get all communities
    async getAll() {
        let sql = `SELECT * FROM communities`;
        try {
            return await db.query(sql);
        } catch (error) {
            throw new Error("Failed to get communities: " + error.message);
        }
    },

    // Create a new community
    async create(name, address, meetingTime, contact, description) {
        const community = { name, address, meetingTime, contact, description };
        let sql = `INSERT INTO communities (name, address, meetingTime, contact, description) 
               VALUES ("${community.name}", "${community.address}", "${community.meetingTime}", "${community.contact}", "${community.description}")`;
        try {
            const result = await db.query(sql, [name, address, meetingTime, contact, description]);
            return result.name + " created successfully";
        } catch (error) {
            throw new Error("Failed to create community: " + error.message);
        }
    },

    // Delete an existing community
    // async delete(communityID) {
    //     let sql = `DELETE FROM communities WHERE id = ?`;
    //     try {
    //         const result = await db.query(sql, [communityID]);
    //         if (result.affectedRows === 0) {
    //             throw new Error("Community not found");
    //         }
    //         return { message: "Community deleted successfully" };
    //     } catch (error) {
    //         throw new Error("Failed to delete community: " + error.message);
    //     }
    // }
};

module.exports = Community;