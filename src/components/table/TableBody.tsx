import { Notification } from "@/src/icons/Notification";
import styled from "styled-components";

const TBody = styled.div`
  background-color: white;
  box-shadow: 0 0 5px #191f4f25;
  padding: 12px;
  border-radius: 0 0 8px 8px;

  input {
    margin-right: 8px;
  }
  label {
    margin-right: 15px;
  }
  form {
    border-bottom: 1px solid #bdbdbd;
  }
`;

export const TableBody = () => {
  return (
    <TBody>
      <form>
        <input type="radio" name="radio" id="from" />
        <label htmlFor="from">From</label>
        <input type="radio" name="radio" id="to" />
        <label htmlFor="to">To</label>
      </form>

      <table
        style={{
          textAlign: "left",
          fontSize: "12px",
          width: "100%",
          marginTop: 20,
        }}
      >
        <tr style={{ color: "#003b83c1" }}>
          <th>Patient Details</th>
          <th>Consultant Details</th>
          <th>Action</th>
        </tr>

        <tr style={{ color: "#191F4F", padding: 12 }}>
          <td>
            <p style={{ color: "#191F4F", fontWeight: "bold" }}>
              Leslie Alexander
            </p>
            <span style={{ color: "#4F4F4F" }}>(MRN: AB12345)</span>
          </td>
          <td>
            <p style={{ color: "#191F4F", fontWeight: "bold" }}>
              Dr. Bessie Cooper
            </p>
            <span style={{ color: "#4F4F4F" }}>(Orthopedics)</span>
          </td>
          <td>
            <Notification />
          </td>
        </tr>
        <tr style={{ background: "#E2EEFF42", padding: 12 }}>
          <td>
            <p style={{ color: "#191F4F", fontWeight: "bold" }}>
              Leslie Alexander
            </p>
            <span style={{ color: "#4F4F4F" }}>(MRN: AB12345)</span>
          </td>
          <td>
            <p style={{ color: "#191F4F", fontWeight: "bold" }}>
              {" "}
              Dr. Bessie Cooper
            </p>
            <span style={{ color: "#4F4F4F" }}>(Orthopedics)</span>
          </td>
          <td>
            <Notification />
          </td>
        </tr>
      </table>
    </TBody>
  );
};
