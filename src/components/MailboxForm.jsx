import { useState } from "react";
import { useNavigate } from "react-router-dom";

 function MailboxForm({ addBox }) {
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "Small",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addBox(formData);
    navigate("/mailboxes");
  }

  return (
    <main>
      <h1>New Mailbox</h1>

      <form onSubmit={handleSubmit} className="mailbox-form">
        <label>
          Enter a boxholder:
          <input
            type="text"
            name="boxOwner"
            value={formData.boxOwner}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Select a box size:
          <select
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
export default MailboxForm