const Ticket = require('../models/Ticket');

// Create New Ticket
const ticket_post = async (req, res) => {
    const ticket = new Ticket({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const createTicket = await ticket.save();
        res.json(createTicket).status(201);

    } catch (err) {
        res.json({ error: err }).status(404);
    };
};

module.exports = {
    ticket_post
}