import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { savingNewNote } from "../../store/journal/journalSlice";
import { startNewNote } from "../../store/journal/journalThunks";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onNewNote = () => {
    dispatch(savingNewNote());
    dispatch(startNewNote());
  };
  return (
    <JournalLayout>
      {active ? <NoteView /> : <NothingSelectedView />}
      <IconButton
        disabled={isSaving}
        onClick={onNewNote}
        size="large"
        sx={{
          color: "#ffffff",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
