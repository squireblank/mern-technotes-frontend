import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNoteById } from "./notesApiSlice";
import { selectAllUsers } from "../users/usersApiSlice";
import EditNoteForm from "./EditNoteForm";

const EditNote = () => {
  const { id } = useParams();

  const note = useSelector((state) => selectNoteById(state, id));
  const users = useSelector(selectAllUsers);

  return note && users?.length ? (
    <EditNoteForm note={note} users={users} />
  ) : (
    <p>Loading...</p>
  );
};

export default EditNote;
