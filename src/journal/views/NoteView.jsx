import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { useEffect } from "react";
import { setActiveNote, setSaving } from "../../store/journal/journalSlice";
import { startSavingNote } from "../../store/journal/journalThunks";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.journal);
  const { title, body, date, onInputChange, formState } = useForm(note);
  const dateString = useMemo(() => new Date(date).toUTCString(), [date]);

  const onSaveNote = () => {
    dispatch(setSaving());
    dispatch(startSavingNote());
  };

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ marginBottom: 2 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="ligth">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
          <SaveOutlined xs={{ fontsize: 30 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          fullWidth
          type="text"
          name="title"
          value={title}
          label="Titulo"
          variant="filled"
          onChange={onInputChange}
          placeholder="Ingrese un titulo"
          sx={{ border: "none", marginBottom1: 1 }}
        />
        <TextField
          multiline
          fullWidth
          minRows={5}
          type="text"
          name="body"
          value={body}
          variant="filled"
          onChange={onInputChange}
          placeholder="¿Qué sucedio el día de hoy?"
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
