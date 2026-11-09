import MenuBookIcon from "@mui/icons-material/MenuBook";

export const Brand = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 40,
          height: 40,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "#173b36",
          color: "#f5eee3",
        }}
      >
        <MenuBookIcon sx={{ fontSize: 20 }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <p
          style={{
            margin: 0,
            color: "#173b36",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 22,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          Relatos
        </p>
        <p
          style={{
            margin: 0,
            color: "#b57b45",
            fontFamily: "Arial, sans-serif",
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.28em",
            lineHeight: 1.2,
            textTransform: "uppercase",
          }}
        >
          de papel
        </p>
      </div>
    </div>
  );
};
