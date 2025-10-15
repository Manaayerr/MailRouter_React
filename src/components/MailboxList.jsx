import { Link } from "react-router-dom";

function MailboxList({ mailboxes }) {
  return (
    <main>
      <h1>All Mailboxes</h1>
      {mailboxes.length === 0 ? (
        <p>No mailboxes yet. Add one!</p>
      ) : (
        <ul className="mailbox-list">
          {mailboxes.map((box) => (
            <li key={box.id}>
              <Link to={`/mailboxes/${box.id}`}>
                <strong>{box.boxOwner}</strong> - {box.boxSize}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default MailboxList