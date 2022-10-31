import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
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
          28 Agosto 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined xs={{ fontsize: 30 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: "none", marginBottom1: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          multiline
          fullWidth
          placeholder="¿Qué sucedio el día de hoy?"
          label="Titulo"
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
