import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    // http request:
    fetch(
      "https://react-meetup-course-eee25-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST", // методот мора да се дефинира, по default e GET
        body: JSON.stringify(meetupData), // го претвора во JSON
        headers: {
          "Content-Type": "application/json",
        },
        // object
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
