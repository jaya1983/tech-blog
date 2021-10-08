const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        body: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        body: "Wow, amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        body: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        body: "We just reached a million subscribers! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        body: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        body: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        body: "Very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        body: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;