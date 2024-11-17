import Agenda from "agenda";

// Initialize Agenda instance
const agenda = new Agenda({
  db: { address: process.env.MONGODB_URL, collection: "agendaJobs" },
  processEvery: "1 minute", // Check jobs every minute
});

// Start Agenda
agenda.start();

export default agenda;
