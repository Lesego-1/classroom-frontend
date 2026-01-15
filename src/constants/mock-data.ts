import { Subject } from "../types";

// Mock subject data
export const MOCK_SUBJECTS: Subject[] = [
    {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
        "Covers fundamental concepts in computer science, including algorithms, data structures, and basic programming principles.",
    createdAt: new Date().toISOString(),
    },
    {
    id: 2,
    code: "ENG205",
    name: "Literature and Composition",
    department: "English",
    description:
        "Explores major works of English literature from the 20th century, focusing on themes, style, and historical context.",
    createdAt: new Date().toISOString(),
    },
    {
    id: 3,
    code: "Math201",
    name: "Calculus II",
    department: "Math",
    description:
        "Introduces core biological concepts such as cell structure, genetics, evolution, and ecosystems.",
    createdAt: new Date().toISOString(),
    }
];
