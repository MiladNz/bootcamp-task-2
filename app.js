const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

function sortAndFilter(input) {
  const notesListCopy = [...notesList];
  const filters = {
    sort: "",
    filter: "",
    status: "",
  };

  filters.sort = input.sort;
  filters.filter = input.filter.toLowerCase().trim();
  filters.status = input.status;

  notesListCopy.forEach((note) => {
    note.createdAt = Date.parse(note.createdAt);
    if (note.completed) note.completed = "completed";
    else note.completed = "uncompleted";
  });

  if (filters.sort == "earliest")
    notesListCopy.sort((note1, note2) => note1.createdAt - note2.createdAt);

  if (filters.sort == "latest")
    notesListCopy.sort((note1, note2) => note2.createdAt - note1.createdAt);

  // console.log(notesListCopy);
  let filteredNote;
  switch (filters.status) {
    case "completed": {
      filteredNote = notesListCopy.filter(
        (note) =>
          note.completed === "completed" ||
          note.title.toLowerCase().includes(filters.filter)
      );
      break;
    }
    case "uncompleted": {
      filteredNote = notesListCopy.filter(
        (note) =>
          note.completed === "uncompleted" ||
          note.title.toLowerCase().includes(filters.filter)
      );
      break;
    }
    case "all": {
      filteredNote = notesListCopy.filter(
        (note) =>
          note.completed === "uncompleted" ||
          "completed" ||
          note.title.toLowerCase().includes(filters.filter)
      );
      break;
    }
    default:
      break;
  }
  return filteredNote;
}

console.log(
  sortAndFilter({
    sort: "latest",
    filter: "react",
    status: "uncompleted",
  })
);
