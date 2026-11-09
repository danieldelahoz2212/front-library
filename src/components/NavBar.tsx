import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { Brand } from "./Brand";

const views = ["Narrativa", "Ensayo", "Clásicos"];

export const NavBar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "#f8f4ed", color: "#173b36" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 72 }}>
          <Brand />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {views.map((page) => (
              <Button
                key={page}
                // onClick={}
                sx={{
                  my: 2,
                  color: "rgba(23, 59, 54, 0.55)",
                  display: "block",
                  "&:hover": {
                    color: "#173b36",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
        
      </Container>
    </AppBar>
  );
};
