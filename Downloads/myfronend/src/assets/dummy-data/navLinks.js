const navLinks = [
  {
    path: "/dashboard",
    icon: "ri-apps-2-line",
    display: "Dashboard",
  },
  {
    path: "/user",
    icon: "ri-user-line",
    display: "User",
  },
  {
    path: "/datamaster",
    icon: "ri-database-line",
    display: "Datamaster",
    submenu: [
      {
        path: "/datamaster/masterruas",
        display: "Master Ruas",
      },
      {
        path: "/datamaster/mastergerbang",
        display: "Master Gerbang",
      },
      {
        path: "/datamaster/masterkategori",
        display: "Master Kategori",
      },
      {
        path: "/datamaster/mastersubkategori",
        display: "Master Subkategori",
      },
    ],
  },
  {
    path: "/kodefikasi",
    icon: "ri-edit-line",
    display: "Kodefikasi",
  },
  {
    path: "/inventori",
    icon: "ri-calculator-line",
    display: "Inventori",
  },
  {
    path: "/gis",
    icon: "ri-map-line",
    display: "GIS",
  },
];

export default navLinks;
