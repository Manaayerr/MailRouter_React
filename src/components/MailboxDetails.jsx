import { useParams, Link } from "react-router-dom";

 function MailboxDetails({ mailboxes }) {
  const { id } = useParams();
  const mailbox = mailboxes.find((box) => box.id === parseInt(id));

  if (!mailbox) {
    return (
      <main>
        <h1>Mailbox Not Found</h1>
        <Link to="/mailboxes">← Back to list</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>Mailbox Details</h1>
      <p><strong>Owner:</strong> {mailbox.boxOwner}</p>
      <p><strong>Size:</strong> {mailbox.boxSize}</p>
      <Link to="/mailboxes">← Back to list</Link>
    </main>
  );
}
export default MailboxDetails